const Employer = require("../../models/employer/employer.js");

module.exports.approveEmployer = async (req, res) => {
  try {
    const { employerId } = req.body;

    // Retrieve the employer document
    const employer = await Employer.findById(employerId);
    if (!employer)
      return res
        .status(400)
        .json({ success: false, message: "Employer doesn't exist" });

    // Toggle the isApproved status
    employer.isApproved = !employer.isApproved;

    // Save the updated employer document
    await employer.save();

    // Retrieve all employers after the update
    const allEmployers = await Employer.find();

    return res.status(200).json({
      success: true,
      message: "Updated isApproved status",
      allEmployers,
    });
  } catch (error) {
    console.error("Error approving employer:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
