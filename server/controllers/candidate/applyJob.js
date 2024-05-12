const Job = require("../../models/admin/job");

module.exports.applyJob = async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    const job = await Job.findById(jobId);

    if (!job)
      return res
        .status(400)
        .json({ success: false, message: "Job doesn't exist." });

    await job.applications.push(userId);

    await job.save();

    return res
      .status(200)
      .json({ success: true, message: "Applied job successfully!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
