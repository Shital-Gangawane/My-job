const Candidate = require("../../models/candidate/candidate.js");

module.exports.approveCandidate = async (req, res) => {
  try {
    const { candidateId } = req.body;

    // Retrieve the employer document
    const candidate = await Candidate.findById(candidateId);
    if (!candidate)
      return res
        .status(400)
        .json({ success: false, message: "Candidate doesn't exist" });

    // Toggle the isApproved status
    candidate.isApproved = !candidate.isApproved;

    // Save the updated employer document
    await candidate.save();

    // Retrieve all employers after the update
    const allCandidates = await Candidate.find();

    return res.status(200).json({
      success: true,
      message: "Updated isApproved status",
      allCandidates,
    });
  } catch (error) {
    console.error("Error approving employer:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
