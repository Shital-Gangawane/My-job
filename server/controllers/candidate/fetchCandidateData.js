const Candidate = require("../../models/candidate/candidate");

module.exports.fetchCandidateData = async (req, res) => {
  try {
    const { userId } = req.query;
    // console.log(userId);
    const candidate = await Candidate.findById(userId).populate("appliedJobs");

    if (!candidate)
      return res
        .status(400)
        .json({ success: false, message: "Candidate not found." });

    return res
      .status(200)
      .json({ success: true, message: "Fetched data", candidate });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
