const bcrypt = require("bcryptjs");
const Candidate = require("../../models/candidate/candidate.js");
const Employer = require("../../models/employer/employer.js");

module.exports.registerCandidate = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingCandidate = await Candidate.findOne({ email });
    const existingEmployer = await Employer.findOne({ email });

    if (existingEmployer) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered as employer.",
      });
    }

    if (existingCandidate) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newCandidate = new Candidate({
      email,
      password: hashedPassword,
    });

    // Save the admin to the database
    await newCandidate.save();

    const allCandidate = await Candidate.find();

    res.status(201).json({
      success: true,
      message: "Candidate registered successfully",
      allCandidate,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
