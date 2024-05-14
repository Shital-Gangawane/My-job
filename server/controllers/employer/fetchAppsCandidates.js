const Candidate = require("../../models/candidate/candidate.js");

module.exports.fetchAppsCandidates = async (req, res) => {
  try {
    const { ids } = req.params;
    // console.log(userId);

    const idsArr = ids.split(",");
    console.log(idsArr);
    const allCandidates = await Candidate.find({ _id: { $in: idsArr } });

    // if(!allCandidates)return res.status(400).json({ success: false, message: "Can" });
    return res
      .status(200)
      .json({ success: true, message: "Fetched Candidates", allCandidates });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
