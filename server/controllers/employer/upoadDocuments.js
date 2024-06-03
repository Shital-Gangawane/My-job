const Employer = require("../../models/employer/employer");
const fs = require("fs");

module.exports.uploadDocuments = async (req, res) => {
  try {
    const files = req.files;
    const documentPaths = {};
    // console.log(files);

    // Fetch the current employer data from the database
    const employer = await Employer.findById(req.params.employerId);
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, message: "Employer not found" });
    }

    // Iterate through each file and update only the ones that are re-uploaded
    for (const key in files) {
      if (files[key]) {
        // If the employer already has a file for this key, delete the old file
        if (employer.companyKYC && employer.companyKYC[key]) {
          const oldPath = employer.companyKYC[key];
          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        }

        // Save the new document path
        documentPaths[key] = files[key][0].path.replace(/\\/g, "/"); // Normalize path to use forward slashes
      }
    }

    // Update the employer document paths in the database
    employer.companyKYC = { ...employer.companyKYC, ...documentPaths };
    await employer.save();

    res.status(200).json({ success: true, documentPaths, employer });
  } catch (error) {
    console.error("Error uploading documents:", error);
    res
      .status(500)
      .json({ success: false, message: "Error uploading documents" });
  }
};
