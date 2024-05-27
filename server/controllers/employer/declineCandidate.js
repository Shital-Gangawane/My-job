const Job = require("../../models/admin/job");
const Candidate = require("../../models/candidate/candidate");
const Employer = require("../../models/employer/employer");

module.exports.declineCandidate = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.employerId);
    const job = await Job.findById(req.body.jobId);
    if (!employer) {
      return res.status(404).send("Employer not found");
    }

    if (!job) {
      return res.status(404).send("Job not found");
    }

    const candidateId = req.params.candidateId;

    // Remove candidate from employer applications
    const employerIndex = employer.applications.findIndex(
      (c) =>
        c.candidate.toString() === candidateId &&
        c.job.toString() === req.body.jobId
    );
    if (employerIndex !== -1) {
      employer.applications.splice(employerIndex, 1);
    } else {
      return res
        .status(404)
        .send("Candidate not found in employer applications");
    }

    // Remove candidate from job applications
    const jobIndex = job.applications.findIndex(
      (c) => c.candidate.toString() === candidateId
    );
    if (jobIndex !== -1) {
      job.applications[jobIndex].status = "Declined";
      //   job.applications.splice(jobIndex, 1);
    } else {
      return res.status(404).send("Candidate not found in job applications");
    }

    await employer.save();
    await job.save();

    const idArr = await employer.applications.map((el) => el.candidate);

    const allCandidates = await Candidate.find({ _id: { $in: idArr } });

    res.status(200).json({
      message: "Candidate declined and removed from applications",
      employer,
      allCandidates,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
