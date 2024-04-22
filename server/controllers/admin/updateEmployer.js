const Employer = require("../../models/employer/employer.js");

module.exports.updateEmployer = async (req, res) => {
  try {
    const { employerId } = req.params; // Corrected spelling from req.param to req.params
    const {
      companyName,
      aboutCompany,
      industries,
      phoneNumber,
      email,
      website,
      isApproved,
    } = req.body;

    // Check if the admin exists
    const employer = await Employer.findByIdAndUpdate(employerId, {
      companyName,
      aboutCompany,
      industries,
      phoneNumber,
      email,
      website,
      isApproved,
    });

    // If admin is not found, return an error
    if (!employer) {
      return res.status(400).json({ message: "Employer not found" });
    }

    const allEmployer = await Employer.find();

    res.status(201).json({
      success: true,
      message: "Employer updated successfully",
      allEmployer,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
