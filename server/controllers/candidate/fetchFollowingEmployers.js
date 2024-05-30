const Candidate = require("../../models/candidate/candidate");

module.exports.fetchFollowingEmployers = async (req, res) => {
  try {
    const { candidateId } = req.query;
    // console.log(candidateId);

    const candidate = await Candidate.findById(candidateId).populate({
      path: "following",
      select: "_id logoImage companyName",
    });

    if (!candidate) {
      return res
        .status(404)
        .json({ success: false, message: "Candidate not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Following successfully", candidate });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
