const bcrypt = require("bcryptjs");
const Employer = require("../../models/employer/employer.js");
const Candidate = require("../../models/candidate/candidate.js");

module.exports.registerEmployer = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingEmployer = await Employer.findOne({ email });
    const existingCandidate = await Candidate.findOne({ email });

    if (existingCandidate) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Email is already registered as candidate",
        });
    }
    if (existingEmployer) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newEmployer = new Employer({
      email,
      password: hashedPassword,
    });

    // Save the admin to the database
    await newEmployer.save();

    const allEmployer = await Employer.find();

    res.status(201).json({
      success: true,
      message: "Employer registered successfully",
      allEmployer,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
