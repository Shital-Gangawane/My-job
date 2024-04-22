const Admin = require("../../models/admin/admin.js");
const Employer = require("../../models/employer/employer.js");

module.exports.fetchAllAdmins = async (req, res) => {
  try {
    const allAdmins = await Admin.find();

    const allEmployers = await Employer.find();

    return res
      .status(200)
      .json({
        message: true,
        message: "Fetched all admins!",
        allAdmins,
        allEmployers,
      });
  } catch (error) {
    return res.status(500).json({ message: false, message: "Server error" });
  }
};
