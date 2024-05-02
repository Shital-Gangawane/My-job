import React, { useState } from "react";
import JobModal from "./JobModal";

export default function JobList({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  const handleSave = (updatedJob) => {
    // Implement logic to save the updated job details
    console.log("Updated job:", updatedJob);
    // Close the modal
    handleCloseDetails();
  };

  const dateFormatter = (str) => {
    const date = new Date(str);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      {jobs ? (
        jobs?.reverse().map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md rounded-md p-4 mb-2 text-xs"
          >
            <div className=" flex items-center justify-between">
              <h2
                className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-600 hover:underline"
                onClick={() => handleJobClick(job)}
              >
                {job.jobTitle}
              </h2>
              <p>{dateFormatter(job.createdAt)}</p>
            </div>
            <div className=" flex justify-between">
              <p className="text-gray-500">Location: {job.jobLocation}</p>
              <p className="text-gray-500">
                Exp: {job.experienceRequired} years
              </p>
              <p className="text-gray-500">Skills: {job.keySkills}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No posted jobs. Let's post some new roles!</p>
      )}
      {selectedJob && (
        <JobModal
          job={selectedJob}
          onClose={handleCloseDetails}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
