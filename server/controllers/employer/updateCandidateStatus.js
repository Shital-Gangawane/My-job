const Employer = require("../../models/employer/employer");

module.exports.updateCandidateStatus = async (req, res) => {
  const { employerId, candidateId, status, note } = req.body;
  try {
    const employer = await Employer.findById(employerId);
    if (!employer) {
      return res.status(404).send("Employer not found");
    }

    // Update the status and note for the specific candidate
    const candidateIndex = employer.shortlistedCandidates.findIndex(
      (c) => c.candidate.toString() === candidateId
    );
    if (candidateIndex !== -1) {
      employer.shortlistedCandidates[candidateIndex].status = status;
      employer.shortlistedCandidates[candidateIndex].note = note;
    } else {
      return res.status(404).send("Candidate not found in shortlist");
    }

    await employer.save();
    res.status(200).send({ message: "Status updated", employer });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
