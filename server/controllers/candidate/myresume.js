const Candidate = require("../../models/candidate/candidate");
const fs = require("fs");
const path = require("path");

module.exports.myresume = async (req, res) => {
  const { id } = req.params; // Extract the ID from the URL

  try {
    const candidate = await Candidate.findById(id);
    if (!candidate) {
      return res
        .status(404)
        .send({ success: false, message: "Candidate not found" });
    }

    // Check if a new resume file was uploaded
    if (req.file) {
      // Delete the existing resume file if it exists
      if (
        candidate.resume &&
        fs.existsSync(
          path.join(__dirname, "../../uploads/resumes/", candidate.resume)
        )
      ) {
        fs.unlinkSync(
          path.join(__dirname, "../../uploads/resumes/", candidate.resume)
        );
      }

      // Update the candidate record with the new file path
      candidate.resume = req.file.filename;
    }

    const updatedCandidate = await candidate.save(); // Save the updated candidate record
    res
      .status(200)
      .json({
        success: true,
        message: "Resume updated successfully",
        candidate: updatedCandidate,
      });
  } catch (error) {
    console.error("Error updating candidate:", error);
    res.status(500).send({
      success: false,
      message: "Error updating candidate profile",
      error,
    });
  }
};
