import bcrypt from "bcryptjs";
import Admin from "../../models/admin/admin.js";

export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    // Save the admin to the database
    await newAdmin.save();

    res
      .status(201)
      .json({ success: true, message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
