const Job = require("../../models/admin/job.js");
const Employer = require("../../models/employer/employer.js");

module.exports.postJobByAdmin = async (req, res) => {
  try {
    const { jobData } = req.body;

    // Extract admin id from the request
    const adminId = req.user.id; // Assuming you have middleware to extract admin id from the request

    // Add the createdBy field to jobData
    jobData.createdBy = adminId;

    const employer = await Employer.findOne({ companyName: jobData.company });

    if (!employer)
      return res
        .status(400)
        .json({ success: false, message: "Provided company not found." });

    // Create a new job document with the provided data
    const newJob = await Job.create(jobData);

    await employer.postedJobs.push(newJob._id);

    await employer.save();

    return res
      .status(200)
      .json({ success: true, message: "Created job successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
