const Candidate = require("../../models/candidate/candidate");
const Employer = require("../../models/employer/employer");

module.exports.checkIfRegistered = async (req, res) => {
  try {
    const { phoneNumber } = req.query;

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

    res.status(200).json({
      success: true,
      message: "Number is not registered yet",
    });
  } catch (error) {}
};
