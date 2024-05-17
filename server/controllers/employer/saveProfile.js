const Employer = require("../../models/employer/employer");
const fs = require("fs");
const path = require("path");

module.exports.saveProfile = async (req, res) => {
  const { id } = req.params;
  let updates = req.body;

  try {
    // Fetch the existing employer to check for existing files
    const existingEmployer = await Employer.findById(id);
    if (!existingEmployer) {
      return res
        .status(404)
        .json({ success: false, message: "Employer not found" });
    }

    // Handle file uploads for logoImage
    if (req.files && req.files["logoImage"]) {
      const newPath = req.files["logoImage"][0].filename;
      if (
        existingEmployer.logoImage &&
        fs.existsSync(
          path.join(__dirname, "..", "uploads", existingEmployer.logoImage)
        )
      ) {
        fs.unlinkSync(
          path.join(__dirname, "..", "uploads", existingEmployer.logoImage)
        ); // Delete the old file
      }
      updates.logoImage = newPath; // Set new path to updates
    }

    // Handle file uploads for coverImage
    if (req.files && req.files["coverImage"]) {
      const newPath = req.files["coverImage"][0].filename;
      if (
        existingEmployer.coverImage &&
        fs.existsSync(
          path.join(__dirname, "..", "uploads", existingEmployer.coverImage)
        )
      ) {
        fs.unlinkSync(
          path.join(__dirname, "..", "uploads", existingEmployer.coverImage)
        ); // Delete the old file
      }
      updates.coverImage = newPath; // Set new path to updates
    }

    // Convert JSON strings to objects if needed
    if (updates.members) {
      updates.members = JSON.parse(updates.members);
    }
    if (updates.socialNetworks) {
      updates.socialNetworks = JSON.parse(updates.socialNetworks);
    }
    if (updates.location) {
      updates.location = JSON.parse(updates.location);
    }

    // Update the employer with the new information
    const updatedEmployer = await Employer.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      employer: updatedEmployer,
    });
  } catch (error) {
    console.error("Error updating employer:", error);
    res.status(500).json({
      success: false,
      message: "Error updating employer profile",
      error,
    });
  }
};
