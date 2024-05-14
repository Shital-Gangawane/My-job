const Job = require("../../models/admin/job.js");
const Employer = require("../../models/employer/employer.js");

module.exports.updateJobByEmployer = async (req, res) => {
  try {
    const { jobData, jobId } = req.body;

    // Extract admin id from the request
    const empId = req.user.id; // Assuming you have middleware to extract admin id from the request

    const employer = await Employer.findById(empId);

    if (!employer)
      return res
        .status(400)
        .json({ success: false, message: "Provided company not found." });

    // Create a new job document with the provided data
    const job = await Job.findByIdAndUpdate(jobId, jobData);

    if (!job)
      return res
        .status(400)
        .json({ success: false, message: "Job not found." });

    return res
      .status(200)
      .json({ success: true, message: "Updated job successfully!", employer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
