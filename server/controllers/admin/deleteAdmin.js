const { conn, Admin } = require("../../models/admin/admin.js");

module.exports.deleteAdmin = async (req, res) => {
  try {
    const { adminId } = req.params; // Corrected to req.params
    const admin = await Admin.findByIdAndDelete(adminId);

    if (!admin)
      return res
        .status(400)
        .json({ success: false, message: "Admin not found." });

    const allAdmin = await Admin.find();

    return res
      .status(200)
      .json({ success: true, message: "Delete successfully", allAdmin });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
