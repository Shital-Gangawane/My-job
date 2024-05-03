const { conn, Admin } = require("../../models/admin/admin.js");

module.exports.approveAdmin = async (req, res) => {
  try {
    const { adminId } = req.body;

    const admin = await Admin.findById(adminId);
    if (!admin)
      return res
        .status(400)
        .json({ success: false, message: "Admin doesn't exist" });

    admin.isApproved = !admin.isApproved;

    await admin.save();

    const allAdmins = await Admin.find();

    return res
      .status(200)
      .json({ success: true, message: "Updated isApproved status", allAdmins });
  } catch (error) {
    console.error("Error approving admin:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
