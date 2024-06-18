const Job = require("../../models/admin/job");
const Candidate = require("../../models/candidate/candidate");
const Employer = require("../../models/employer/employer");

module.exports.shortlistCandidate = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.employerId);
    const job = await Job.findById(req.body.jobId);
    if (!employer) {
      return res.status(404).send("Employer not found");
    }

    const candidateId = req.params.candidateId;

    const appIndex = employer.applications.findIndex(
      (c) =>
        c.candidate.toString() === candidateId &&
        c.job.toString() === req.body.jobId
    );

    if (appIndex !== -1) {
      switch (employer.applications[appIndex].status) {
        case "Pending":
          employer.applications[appIndex].status = "Shortlisted";
          break;
        case "Shortlisted":
          employer.applications[appIndex].status = "Pending";
          break;
        default:
          break;
      }
    }
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

    if (!job) {
      return res.status(404).send("Job not found");
    }

    const candidateIndexInJob = await job.applications.findIndex(
      (c) => c.candidate.toString() === candidateId
    );
    if (candidateIndexInJob !== -1) {
      job.applications[candidateIndexInJob].status = "Shortlisted";
    } else {
      job.applications[candidateIndexInJob].status = "Declined";
    }

    await employer.save();
    await job.save();
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
