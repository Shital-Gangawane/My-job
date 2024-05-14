const Employer = require("../../models/employer/employer");

module.exports.saveProfile = async (req, res) => {
  const { id } = req.params; // Extract the ID from the URL
  const updates = req.body;

  // Handle file paths if images were uploaded
  if (req.files) {
    if (req.files["logoImage"]) {
      updates.logoImage = req.files["logoImage"][0].filename;
    }
    if (req.files["coverImage"]) {
      updates.coverImage = req.files["coverImage"][0].filename;
    }
  }

  // Convert fields that might be JSON strings to objects
  if (updates.members) {
    updates.members = JSON.parse(updates.members);
  }
  if (updates.socialNetworks) {
    updates.socialNetworks = JSON.parse(updates.socialNetworks);
  }
  if (updates.location) {
    updates.location = JSON.parse(updates.location);
  }

  // console.log(req.files);

  // Use findByIdAndUpdate to update the employer
  try {
    const employer = await Employer.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated object
      runValidators: true, // Ensure validations defined in the schema are applied
    });

    if (!employer) {
      return res
        .status(404)
        .send({ success: false, message: "Employer not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Saved successfully", employer });
  } catch (error) {
    console.error("Error updating employer:", error);
    res
      .status(500)
      .send({
        success: false,
        message: "Error updating employer profile",
        error,
      });
  }
};
