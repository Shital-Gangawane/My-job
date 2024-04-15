const bcrypt = require("bcryptjs");
const Admin = require("../../models/admin/admin.js");

module.exports.registerAdmin = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      roleType,
      password,
      designation,
      city,
      category,
      skill,
      isAdmin,
    } = req.body;

    // Check if the email is already registered
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newAdmin = new Admin({
      name,
      email,
      phone,
      roleType,
      password: hashedPassword,
      designation,
      cityAssigned: city, // Adjusted field name
      categoryAssigned: category, // Adjusted field name
      skillAssigned: skill, // Adjusted field name
      isAdmin,
    });

    // Save the admin to the database
    await newAdmin.save();

    const allAdmins = await Admin.find();

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      allAdmins,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
