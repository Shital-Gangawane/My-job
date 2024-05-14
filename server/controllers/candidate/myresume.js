const Candidate = require("../../models/candidate/candidate");

module.exports.myresume = async (req, res) => {
  const { id } = req.params; // Extract the ID from the URL
  const updates = req.body;

  // Handle file paths if images were uploaded
  if (req.file) {
    updates.resume = req.file.filename;
  }

  // Convert fields that might be JSON strings to objects
  //   if (updates.members) {
  //     updates.members = JSON.parse(updates.members);
  //   }
  //   if (updates.socialNetworks) {
  //     updates.socialNetworks = JSON.parse(updates.socialNetworks);
  //   }
  //   if (updates.location) {
  //     updates.location = JSON.parse(updates.location);
  //   }

  // console.log(req.files);

  // Use findByIdAndUpdate to update the employer
  try {
    const candidate = await Candidate.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated object
      runValidators: true, // Ensure validations defined in the schema are applied
    });

    if (!candidate) {
      return res
        .status(404)
        .send({ success: false, message: "Candidate not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Saved successfully", candidate });
  } catch (error) {
    console.error("Error updating candidate:", error);
    res.status(500).send({
      success: false,
      message: "Error updating candidate profile",
      error,
    });
  }
};
