import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../../models/admin/admin.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is registered or not
    const existingAdmin = await Admin.findOne({ email });
    if (!existingAdmin) {
      return res
        .status(400)
        .json({ success: false, message: "Email is not registered" });
    }

    // Compare the password
    const verifiedPassword = await bcrypt.compare(
      password,
      existingAdmin.password
    );
    if (!verifiedPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: existingAdmin._id, email: existingAdmin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expiration time
    );

    res
      .status(201)
      .json({
        success: true,
        message: "Logged in successfully",
        existingAdmin,
        token,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
