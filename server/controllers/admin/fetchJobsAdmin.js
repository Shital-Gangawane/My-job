import Job from "../../models/admin/job.js";

export const fetchJobsAdmin = async (req, res) => {
  try {
    const allJobs = await Job.find();

    return res
      .status(200)
      .json({ success: true, message: "fetched all jobs", allJobs });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
