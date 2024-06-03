const Candidate = require("../../models/candidate/candidate");

module.exports.setJobAlert = async (req, res) => {
  try {
    const { candidateId } = req.query;
    const alertData = req.body;

    console.log("Incoming alertData:", alertData);

    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res
        .status(404)
        .send({ success: false, message: "Candidate not found" });
    }

    // Initialize jobAlert array if it doesn't exist
    if (!Array.isArray(candidate.jobAlert)) {
      candidate.jobAlert = [];
    }

    // Check if jobAlert exists and has the necessary fields
    if (!alertData.jobAlert || !alertData.jobAlert.title) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid job alert data" });
    }

    // Map fields from alertData to jobAlert schema
    const newJobAlert = {
      title: alertData.jobAlert.title,
      frequency: alertData.jobAlert.frequency,
      minSalary: alertData.salaryRange[0],
      maxSalary: alertData.salaryRange[1],
      experience: alertData.experienceLevel,
      jobLocation: alertData.city,
      keyword: alertData.keyword,
    };

    // Log the new job alert before pushing
    console.log("New Job Alert:", newJobAlert);

    // Add the new job alert to the candidate's jobAlert array
    candidate.jobAlert.push(newJobAlert);

    // Save the updated candidate
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
