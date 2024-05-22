const Employer = require("../../models/employer/employer");

// Route to get all applications with detailed candidate and job information
module.exports.fetchShortlisted = async (req, res) => {
  try {
    const employerId = req.query.employerId; // Or however you're passing the employer's ID

    // Find the employer and populate the candidate and job details within each application
    const employer = await Employer.findById(employerId).populate({
      path: "shortlistedCandidates",
      populate: [
        { path: "candidate", model: "Candidate" }, // Use the exact name of the candidate model
        { path: "job", model: "Job" }, // Use the exact name of the job model
      ],
    });

    if (!employer) {
      return res
        .status(404)
        .json({ success: false, message: "Employer not found" });
    }

    res
      .status(200)
      .json({
        success: true,
        shortlistedCandidates: employer.shortlistedCandidates,
      });
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
