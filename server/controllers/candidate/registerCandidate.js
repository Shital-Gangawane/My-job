const bcrypt = require("bcryptjs");
const Candidate = require("../../models/candidate/candidate.js");
const Employer = require("../../models/employer/employer.js");

module.exports.registerCandidate = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    // Check if the number is already registered
    const existingCandidate = await Candidate.findOne({ phoneNumber });
    const existingEmployer = await Employer.findOne({ phoneNumber });

    if (existingEmployer) {
      return res.status(400).json({
        success: false,
        message: "Number is already registered as employer.",
      });
    }

    if (existingCandidate) {
      return res
        .status(400)
        .json({ success: false, message: "Number is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newCandidate = new Candidate({
      phoneNumber,
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
