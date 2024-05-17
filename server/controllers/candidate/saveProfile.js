const Candidate = require("../../models/candidate/candidate");
const fs = require("fs");
const path = require("path");

module.exports.saveProfile = async (req, res) => {
  const { id } = req.params;
  let updates = req.body;

  try {
    // Fetch the existing candidate to check for existing files
    const existingCandidate = await Candidate.findById(id);
    if (!existingCandidate) {
      return res
        .status(404)
        .json({ success: false, message: "Candidate not found" });
    }

    // Handle file uploads for logoImage
    if (req.files && req.files["logoImage"]) {
      const newPath = req.files["logoImage"][0].filename;
      if (
        existingCandidate.logoImage &&
        fs.existsSync(
          path.join(__dirname, "..", "uploads", existingCandidate.logoImage)
        )
      ) {
        fs.unlinkSync(
          path.join(__dirname, "..", "uploads", existingCandidate.logoImage)
        ); // Delete the old file
      }
      updates.logoImage = newPath; // Set new path to updates
    }

    // Handle file uploads for coverImage
    if (req.files && req.files["coverImage"]) {
      const newPath = req.files["coverImage"][0].filename;
      if (
        existingCandidate.coverImage &&
        fs.existsSync(
          path.join(__dirname, "..", "uploads", existingCandidate.coverImage)
        )
      ) {
        fs.unlinkSync(
          path.join(__dirname, "..", "uploads", existingCandidate.coverImage)
        ); // Delete the old file
      }
      updates.coverImage = newPath; // Set new path to updates
    }

    // Convert JSON strings to objects if needed
    if (updates.socialNetworks) {
      updates.socialNetworks = JSON.parse(updates.socialNetworks);
    }
    if (updates.location) {
      updates.location = JSON.parse(updates.location);
    }

    // Update the candidate with the new information
    const updatedCandidate = await Candidate.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      candidate: updatedCandidate,
    });
  } catch (error) {
    console.error("Error updating candidate:", error);
    res.status(500).json({
      success: false,
      message: "Error updating candidate profile",
      error,
    });
  }
};
