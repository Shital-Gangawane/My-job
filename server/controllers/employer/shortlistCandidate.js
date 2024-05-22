const Candidate = require("../../models/candidate/candidate");
const Employer = require("../../models/employer/employer");

module.exports.shortlistCandidate = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.employerId);
    if (!employer) {
      return res.status(404).send("Employer not found");
    }

    const candidateId = req.params.candidateId;
    const index = employer.shortlistedCandidates.findIndex(
      (c) =>
        c.candidate.toString() === candidateId &&
        c.job.toString() === req.body.jobId
    );

    if (index === -1) {
      // Candidate not shortlisted, add to list with default status and note
      employer.shortlistedCandidates.push({
        candidate: candidateId,
        job: req.body.jobId,
        status: "Shortlisted",
        note: "",
      });
    } else {
      // Candidate already shortlisted, remove from list
      employer.shortlistedCandidates.splice(index, 1);
    }

    await employer.save();
    const idArr = await employer.shortlistedCandidates.map(
      (el) => el.candidate
    );

    const allCandidates = await Candidate.find({ _id: { $in: idArr } });
    res.status(200).json({
      message: "Shortlist updated successfully",
      employer,
      allCandidates,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
