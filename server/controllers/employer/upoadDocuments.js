const Employer = require("../../models/employer/employer");
const fs = require("fs");

module.exports.upoadDocuments = async (req, res) => {
  try {
    const files = req.files;
    const documentPaths = {};

    // Fetch the current employer data from the database
    const employer = await Employer.findById(req.params.employerId);
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, message: "Employer not found" });
    }

    // Delete previous documents if they exist
    if (employer.companyKYC) {
      deleteFiles(employer.companyKYC);
    }

    // Save new document paths
    for (const key in files) {
      if (files[key]) {
        documentPaths[key] = files[key][0].path.replace(/\\/g, "/"); // Normalize path to use forward slashes
      }
    }

    // Update the employer document paths in the database
    employer.companyKYC = documentPaths;
    await employer.save();

    res.status(200).json({ success: true, documentPaths });
  } catch (error) {
    console.error("Error uploading documents:", error);
    res
      .status(500)
      .json({ success: false, message: "Error uploading documents" });
  }
};

const deleteFiles = (files) => {
  for (const key in files) {
    if (fs.existsSync(files[key])) {
      fs.unlinkSync(files[key]);
    }
  }
};
