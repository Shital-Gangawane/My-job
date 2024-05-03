const { conn, Admin } = require("../../models/admin/admin.js");

module.exports.updateAdmin = async (req, res) => {
  try {
    const { adminId } = req.params; // Corrected spelling from req.param to req.params
    const {
      name,
      email,
      phone,
      roleType,
      designation,
      city,
      category,
      skill,
      isAdmin,
    } = req.body;

    // Check if the admin exists
    const admin = await Admin.findByIdAndUpdate(adminId, {
      name,
      email,
      phone,
      roleType,
      designation,
      cityAssigned: city, // Adjusted field name
      categoryAssigned: category, // Adjusted field name
      skillAssigned: skill, // Adjusted field name
      isAdmin,
    });

    // If admin is not found, return an error
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    const allAdmins = await Admin.find();

    res.status(201).json({
      success: true,
      message: "Admin updated successfully",
      allAdmins,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
