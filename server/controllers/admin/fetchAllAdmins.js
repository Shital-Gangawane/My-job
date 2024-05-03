const { conn, Admin } = require("../../models/admin/admin.js");
const Candidate = require("../../models/candidate/candidate.js");
const Employer = require("../../models/employer/employer.js");

module.exports.fetchAllAdmins = async (req, res) => {
  try {
    const allAdmins = await Admin.find();

    const allEmployers = await Employer.find();

    const allCandidates = await Candidate.find();

    return res.status(200).json({
      success: true,
      message: "Fetched all admins!",
      allAdmins,
      allEmployers,
      allCandidates,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
