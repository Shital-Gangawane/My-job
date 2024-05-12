const Candidate = require("../../models/candidate/candidate.js");

module.exports.deleteCandidate = async (req, res) => {
  try {
    const { candidateId } = req.params; // Corrected to req.params
    const candidate = await Candidate.findByIdAndDelete(candidateId);

    if (!candidate)
      return res
        .status(400)
        .json({ success: false, message: "Candidate not found." });

    const allCandidates = await Candidate.find();

    return res
      .status(200)
      .json({ success: true, message: "Deleted successfully", allCandidates });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
