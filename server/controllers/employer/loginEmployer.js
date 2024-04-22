const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Employer = require("../../models/employer/employer.js");

module.exports.loginEmployer = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is registered or not
    const existingEmployer = await Employer.findOne({ email });
    if (!existingEmployer) {
      return res
        .status(400)
        .json({ success: false, message: "Email is not registered" });
    }

    // Compare the password
    const verifiedPassword = await bcrypt.compare(
      password,
      existingEmployer.password
    );
    if (!verifiedPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect credentials" });
    }

    // if (!existingEmployer.isSuperEmployer && !existingEmployer.isApproved)
    //   return res.status(400).json({
    //     success: false,
    //     message: "You've not been authorized by the Employer yet to log in.",
    //   });

    // Generate JWT token
    const token = jwt.sign(
      { id: existingEmployer._id, email: existingEmployer.email },
      process.env.JWT_SECRET,
      { expiresIn: "5h" } // Token expiration time
    );

    res.status(201).json({
      success: true,
      message: "Logged in successfully",
      existingEmployer,
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
