const Job = require("../../models/admin/job");
const Candidate = require("../../models/candidate/candidate");
const Employer = require("../../models/employer/employer");

module.exports.applyJob = async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    const job = await Job.findById(jobId);
    const candidate = await Candidate.findById(userId);
    const employer = await Employer.findById(job.createdByEmp);

    if (!job || !employer)
      return res
        .status(400)
        .json({ success: false, message: "Job or Employer not found." });

    // Add candidate to job applications if not already applied
    const applicationExistsInJob = job.applications.some(
      (el) => el.candidate.toString() === userId
    );
    if (!applicationExistsInJob) {
      job.applications.push({ candidate: userId });
    }

    // Add new application record to employer if no such record exists
    const applicationExists = employer.applications.some(
      (el) => el.candidate.toString() === userId && el.job.toString() === jobId
    );
    if (!applicationExists) {
      employer.applications.push({ candidate: userId, job: jobId });
    }

    // Add job to candidate's appliedJobs if not already there
    if (!candidate.appliedJobs.includes(jobId)) {
      candidate.appliedJobs.push(jobId);
    }

    await candidate.save();
    await job.save();
    await employer.save();

    return res
      .status(200)
      .json({ success: true, message: "Applied job successfully!", candidate });
  } catch (error) {
    console.error("Error in applyJob:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
