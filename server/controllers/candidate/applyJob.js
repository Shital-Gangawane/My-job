const Job = require("../../models/admin/job");
const Candidate = require("../../models/candidate/candidate");

module.exports.applyJob = async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    const job = await Job.findById(jobId);
    const candidate = await Candidate.findById(userId);

    if (!job)
      return res
        .status(400)
        .json({ success: false, message: "Job doesn't exist." });

    if (!job.applications.includes(userId)) await job.applications.push(userId);

    if (!candidate.appliedJobs.includes(jobId))
      await candidate.appliedJobs.push(jobId);

    await candidate.save();
    await job.save();

    return res
      .status(200)
      .json({ success: true, message: "Applied job successfully!", candidate });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
