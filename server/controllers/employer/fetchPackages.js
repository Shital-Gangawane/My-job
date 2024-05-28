const Employer = require("../../models/employer/employer");
const Package = require("../../models/employer/package");

module.exports.fetchPackages = async (req, res) => {
  try {
    const { employerId } = req.params;

    const employer = await Employer.findById(employerId);
    if (!employer)
      return res
        .status(400)
        .json({ success: false, message: "Employer not found." });

    const packages = await Package.find();
    return res
      .status(200)
      .json({ success: true, message: "Fetched packages", packages, employer });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error fetching packages" });
  }
};
