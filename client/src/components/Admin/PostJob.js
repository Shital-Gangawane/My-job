import React, { useState } from "react";

const PostJob = ({ setIsAddJobOn }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [experienceRequired, setExperienceRequired] = useState("");
  const [isRemoteOrHybrid, setIsRemoteOrHybrid] = useState(false);
  const [salaryRange, setSalaryRange] = useState("");
  const [keySkills, setKeySkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send job details to backend for processing
    const jobData = {
      title: jobTitle,
      description: jobDescription,
      location: jobLocation,
      experienceRequired: experienceRequired,
      isRemoteOrHybrid: isRemoteOrHybrid,
      salaryRange: salaryRange,
      keySkills: keySkills,
    };
    console.log(jobData);
    // Reset form fields after submission
    setJobTitle("");
    setJobDescription("");
    setJobLocation("");
    setExperienceRequired("");
    setIsRemoteOrHybrid(false);
    setSalaryRange("");
    setKeySkills("");
  };

  return (
    <div className="absolute top-0 w-full h-full bg-black bg-opacity-45 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-700 rounded-md space-y-4 w-1/2 p-6 px-11 overflow-y-auto"
      >
        <h2 className="text-2xl mb-4 font-bold">Post a Job</h2>
        <div>
          <label htmlFor="jobTitle" className="block font-medium">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
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
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
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
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
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
            value={experienceRequired}
            onChange={(e) => setExperienceRequired(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="salaryRange" className="block font-medium">
            Salary Range
          </label>
          <input
            type="text"
            id="salaryRange"
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
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
            value={keySkills}
            onChange={(e) => setKeySkills(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="isRemoteOrHybrid" className="flex items-center">
            <input
              type="checkbox"
              id="isRemoteOrHybrid"
              checked={isRemoteOrHybrid}
              onChange={(e) => setIsRemoteOrHybrid(e.target.checked)}
              className="mr-2"
            />
            Remote or Hybrid
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
