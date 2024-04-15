import React, { useState } from "react";
import { postJobByAdmin } from "../../api/admin/axios";
import { useAdminContext } from "../../context/adminContext";

const PostJob = ({ setIsAddJobOn }) => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    company: "",
    jobDescription: "",
    jobLocation: "",
    experienceRequired: "",
    isRemote: false,
    salaryRange: "",
    keySkills: "",
  });
  const { adminToken } = useAdminContext();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setJobData((prevJobData) => ({
      ...prevJobData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(jobData);
    const res = await postJobByAdmin(jobData, adminToken);
    console.log(res);
    // Reset form fields after submission
    setJobData({
      jobTitle: "",
      company: "",
      jobDescription: "",
      jobLocation: "",
      experienceRequired: "",
      isRemote: false,
      salaryRange: "",
      keySkills: "",
    });
  };

  return (
    <div className="fixed inset-0 top-0 w-full h-full bg-black bg-opacity-45 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 rounded-md space-y-4 w-full md:w-1/2 p-6 px-11 overflow-y-auto"
      >
        <h2 className="text-2xl mb-4 font-bold">Post a Job</h2>
        <div>
          <label htmlFor="jobTitle" className="block font-medium">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block font-medium">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="jobDescription" className="block font-medium">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={jobData.jobDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="jobLocation" className="block font-medium">
            Job Location
          </label>
          <input
            type="text"
            id="jobLocation"
            name="jobLocation"
            value={jobData.jobLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="experienceRequired" className="block font-medium">
            Years of Experience Required
          </label>
          <input
            type="text"
            id="experienceRequired"
            name="experienceRequired"
            value={jobData.experienceRequired}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="salaryRange" className="block font-medium">
            Salary
          </label>
          <input
            type="text"
            id="salaryRange"
            name="salaryRange"
            value={jobData.salaryRange}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="keySkills" className="block font-medium">
            Key Skills
          </label>
          <input
            type="text"
            id="keySkills"
            name="keySkills"
            value={jobData.keySkills}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="isRemote" className="flex items-center">
            <input
              type="checkbox"
              id="isRemote"
              name="isRemote"
              checked={jobData.isRemoteOrHybrid}
              onChange={handleChange}
              className="mr-2"
            />
            Remote
          </label>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setIsAddJobOn(false)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out"
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
