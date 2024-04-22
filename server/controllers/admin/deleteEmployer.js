const Employer = require("../../models/employer/employer.js");

module.exports.deleteEmployer = async (req, res) => {
  try {
    const { employerId } = req.params; // Corrected to req.params
    const employer = await Employer.findByIdAndDelete(employerId);

    if (!employer)
      return res
        .status(400)
        .json({ success: false, message: "Employer not found." });

    const allEmployers = await Employer.find();

    return res
      .status(200)
      .json({ success: true, message: "Delete successfully", allEmployers });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
