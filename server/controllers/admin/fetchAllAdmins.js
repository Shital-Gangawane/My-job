const Admin = require("../../models/admin/admin.js");
const Candidate = require("../../models/candidate/candidate.js");
const Employer = require("../../models/employer/employer.js");
const Package = require("../../models/employer/package.js");

module.exports.fetchAllAdmins = async (req, res) => {
  try {
    const adminId = req.user.id;

    const admin = await Admin.findById(adminId);

    const allPackages = await Package.find();
    const allAdmins = await Admin.find();
    const allEmployers = await Employer.find();

    const allCandidates = await Candidate.find();

    return res.status(200).json({
      success: true,
      message: "Fetched all admins!",
      admin,
      allAdmins: admin.isSuperAdmin ? allAdmins : [],
      allPackages: admin.isSuperAdmin ? allPackages : [],
      allEmployers,
      allCandidates,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
