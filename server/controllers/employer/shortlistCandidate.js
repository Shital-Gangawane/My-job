const Employer = require("../../models/employer/employer");

module.exports.shortlistCandidate = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.employerId);
    if (!employer) {
      return res.status(404).send("Employer not found");
    }

    const candidateId = req.params.candidateId;
    const index = employer.shortlistedCandidates.findIndex(
      (id) => id.toString() === candidateId
    );

    if (index === -1) {
      // Candidate not shortlisted, add to list
      employer.shortlistedCandidates.push(candidateId);
    } else {
      // Candidate already shortlisted, remove from list
      employer.shortlistedCandidates.splice(index, 1);
    }

    await employer.save();
    res.status(200).json({
      message: "Shortlist updated successfully",
      employer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};