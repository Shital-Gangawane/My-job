const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Candidate = require("../models/candidate/candidate.js");
const Employer = require("../models/employer/employer.js");
const Package = require("../models/employer/package.js");

module.exports.login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    // Check if the phoneNumber is registered for a candidate
    const existingCandidate = await Candidate.findOne({ phoneNumber }).populate(
      "appliedJobs"
    ); // This populates all Job documents in appliedJobs array
    // Check if the phoneNumber is registered for an employer
    const existingEmployer = await Employer.findOne({ phoneNumber });

    if (!existingCandidate && !existingEmployer) {
      return res
        .status(400)
        .json({ success: false, message: "Number is not registered" });
    }

    // Verify the password and generate JWT token
    let user;
    let isEmployer = false;
    let isCandidate = false;
    if (existingCandidate) {
      user = existingCandidate;
      isCandidate = true;
    } else {
      user = existingEmployer;
      isEmployer = true;
    }

    const verifiedPassword = await bcrypt.compare(password, user.password);
    if (!verifiedPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect credentials" });
    }

    // Additional checks for candidate or employer can be added here

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "5h" } // Token expiration time
    );

    const packages = await Package.find();

    res.status(201).json({
      success: true,
      message: "Logged in successfully",
      user,
      token,
      isEmployer,
      isCandidate,
      packages: isEmployer ? packages : "Candidate Package",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
