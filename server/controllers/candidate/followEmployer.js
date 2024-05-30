const Candidate = require("../../models/candidate/candidate");
const Employer = require("../../models/employer/employer");

module.exports.followEmployer = async (req, res) => {
  try {
    const { candidateId, employerId } = req.body;

    const candidate = await Candidate.findById(candidateId);
    const employer = await Employer.findById(employerId);
    if (!candidate) {
      return res
        .status(404)
        .json({ success: false, message: "Candidate not found" });
    }
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, message: "Employer not found" });
    }

    if (!candidate.following.includes(employerId)) {
      candidate.following.push(employerId);
    } else {
      candidate.following = candidate.following.filter(
        (el) => !el.equals(employerId)
      );
    }

    if (!employer.followers.includes(candidateId)) {
      employer.followers.push(candidateId);
    } else {
      employer.followers = employer.followers.filter(
        (el) => !el.equals(candidateId)
      );
    }

    await candidate.save();
    await employer.save();

    return res
      .status(200)
      .json({ success: true, message: "Following successfully", candidate });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
