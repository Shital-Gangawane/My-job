import Job from "../../models/admin/job.js";

export const searchJobs = async (req, res) => {
  try {
    const { searchText, city } = req.query;

    // Constructing the query
    const query = {};
    if (searchText) {
      query.$or = [
        { jobTitle: { $regex: searchText, $options: "i" } },
        { jobDescription: { $regex: searchText, $options: "i" } },
        { keySkills: { $regex: searchText, $options: "i" } },
      ];
    }
    if (city) {
      query.jobLocation = city;
    }

    // Fetching jobs based on the constructed query
    const jobs = await Job.find(query);

    return res.status(200).json({ success: true, jobs });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
