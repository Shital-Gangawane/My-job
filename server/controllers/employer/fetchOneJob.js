const Job = require("../../models/admin/job.js");

module.exports.fetchOneJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    // console.log(userId);
    const job = await Job.findById(jobId);

    if (!job)
      return res
        .status(400)
        .json({ success: false, message: "Job not found." });

    // console.log(allJobs);
    return res.status(200).json({ success: true, message: "Fetched Job", job });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
