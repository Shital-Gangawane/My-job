const Job = require("../../models/admin/job.js");
const Employer = require("../../models/employer/employer.js");

module.exports.postJobByEmployer = async (req, res) => {
  try {
    const { jobData } = req.body;

    // Extract admin id from the request
    const empId = req.user.id; // Assuming you have middleware to extract admin id from the request

    // Add the createdBy field to jobData
    jobData.createdBy = empId;

    const employer = await Employer.findById(empId);

    if (!employer)
      return res
        .status(400)
        .json({ success: false, message: "Provided company not found." });

    // Create a new job document with the provided data
    const newJob = await Job.create(jobData);

    await employer.postedJobs.push(newJob._id);
    if (employer.postJobCredits > 0)
      employer.postJobCredits = employer.postJobCredits - 1;

    await employer.save();

    return res
      .status(200)
      .json({ success: true, message: "Created job successfully!", employer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
