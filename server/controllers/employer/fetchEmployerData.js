const Employer = require("../../models/employer/employer");

module.exports.fetchEmployerData = async (req, res) => {
  try {
    const { userId } = req.query;
    // console.log(userId);
    const employer = await Employer.findById(userId);

    return res
      .status(200)
      .json({ success: true, message: "Fetched data", employer });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
