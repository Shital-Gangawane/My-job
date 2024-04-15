const Admin = require("../../models/admin/admin.js");

module.exports.fetchAllAdmins = async (req, res) => {
  try {
    const allAdmins = await Admin.find();

    return res
      .status(200)
      .json({ message: true, message: "Fetched all admins!", allAdmins });
  } catch (error) {
    return res.status(500).json({ message: false, message: "Server error" });
  }
};
