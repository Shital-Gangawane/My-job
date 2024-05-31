const Candidate = require("../../models/candidate/candidate");

module.exports.setJobAlert = async (req, res) => {
  try {
    const userId = req.query;
    let alertData = req.body;
    if (typeof alertData === "string") {
      alertData = JSON.parse(alertData);
    }

    const candidate = await Candidate.findById(userId);
    if (!candidate) {
      return res
        .status(404)
        .send({ success: false, message: "Candidate not found" });
    }

    candidate["jobAlert"] = alertData;

    const updatedCandidate = await candidate.save();
    res.status(200).json({
      success: true,
      message: "Set job alert successfully",
      candidate: updatedCandidate,
    });
  } catch (error) {
    console.error("Error setting job alert:", error);
    res.status(500).send({
      success: false,
      message: "Error setting job alert",
      error,
    });
  }
};
