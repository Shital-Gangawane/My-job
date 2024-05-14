const Job = require("../../models/admin/job.js");
const Employer = require("../../models/employer/employer.js");

module.exports.fetchJobs = async (req, res) => {
  try {
    const { userId } = req.query;
    // console.log(userId);
    const employer = await Employer.findById(userId);

    if (!employer)
      return res
        .status(400)
        .json({ success: false, message: "Employer not found." });

    const jobIdsArr = await employer.postedJobs;

    const allJobs = await Job.find({ _id: { $in: jobIdsArr } });

    // console.log(allJobs);
    return res
      .status(200)
      .json({ success: true, message: "Fetched data", allJobs });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
