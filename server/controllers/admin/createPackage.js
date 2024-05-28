const Admin = require("../../models/admin/admin");
const Package = require("../../models/employer/package");

module.exports.createPackage = async (req, res) => {
  try {
    const {
      name,
      price,
      postJobCredits,
      featuredJobCredits,
      jobDisplayDuration,
      candidatePool,
      duration,
      description,
    } = req.body.packageInfo;

    const adminId = req.user.id;

    const admin = await Admin.findById(adminId);
    if (!admin?.isSuperAdmin)
      return res.status(300).send("Unauthorized access");

    const newPackage = await new Package({
      name,
      price,
      postJobCredits,
      featuredJobCredits,
      jobDisplayDuration,
      candidatePool,
      duration,
      description,
    }).save();

    const allPackages = await Package.find();

    res
      .status(201)
      .json({ success: true, message: "Package created!", allPackages });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating package." });
  }
};
