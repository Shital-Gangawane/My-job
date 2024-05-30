const Candidate = require("../../models/candidate/candidate");
const Employer = require("../../models/employer/employer");

module.exports.fetchFollowingEmployers = async (req, res) => {
  try {
    const { candidateId } = req.body;

    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res
        .status(404)
        .json({ success: false, message: "Candidate not found" });
    }

    // if (!candidate.following.includes(employerId))
    //   candidate.following.push(employerId);

    await candidate.save();

    return res
      .status(200)
      .json({ success: true, message: "Following successfully", candidate });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
