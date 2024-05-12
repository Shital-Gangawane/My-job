import React, { useState } from "react";
import { postJobByAdmin } from "../../api/admin/axios";
import { useAdminContext } from "../../context/adminContext";

const PostJob = ({ setIsAddJobOn }) => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    company: "",
    jobDescription: "",
    jobLocation: "",
    minExperience: "",
    maxExperience: "",
    isRemote: false,
    minSalary: "",
    maxSalary: "",
    keySkills: "",
  });
  const { adminToken, allEmployers } = useAdminContext();

  const approvedEmployers = allEmployers?.filter((emp) => emp?.isApproved);
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
      minExperience: "",
      maxExperience: "",
      isRemote: false,
      minSalary: "",
      maxSalary: "",
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
          <select
            type="text"
            id="company"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select company</option>
            {approvedEmployers?.map((employer) => (
              <option key={employer?._id} value={employer?.companyName}>
                {employer?.companyName}
              </option>
            ))}
          </select>
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
            Experience
          </label>
          <div className="flex w-full gap-4">
            <input
              type="text"
              id="minExperience"
              placeholder="min"
              name="minExperience"
              value={jobData.minExperience}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              id="maxExperience"
              name="maxExperience"
              placeholder="max"
              value={jobData.maxExperience}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="salaryRange" className="block font-medium">
            Salary
          </label>
          <div className=" flex w-full gap-4">
            <input
              type="text"
              id="minSalary"
              name="minSalary"
              placeholder="min"
              value={jobData.minSalary}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              id="maxSalary"
              name="maxSalary"
              placeholder="max"
              value={jobData.maxSalary}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
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
