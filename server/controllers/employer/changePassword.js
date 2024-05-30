const Candidate = require("../../models/candidate/candidate");
const Employer = require("../../models/employer/employer");
const bcrypt = require("bcryptjs");

module.exports.changePassword = async (req, res) => {
  try {
    const { newPass, oldPass } = req.body;
    const userId = req.user.id;

    const existingEmployer = await Employer.findById(userId);
    const existingCandidate = await Candidate.findById(userId);

    let user;
    if (existingCandidate) {
      user = existingCandidate;
    } else if (existingEmployer) {
      user = existingEmployer;
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const verifiedPassword = await bcrypt.compare(oldPass, user.password);
    if (!verifiedPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Provided incorrect password." });
    }

    const hashedPassword = await bcrypt.hash(newPass, 10);
    user.password = hashedPassword;

    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Password changed successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error. Try again." });
  }
};
