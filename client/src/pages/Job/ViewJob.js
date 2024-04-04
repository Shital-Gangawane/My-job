import React from "react";
import { useLocation } from "react-router-dom";

export default function ViewJob() {
  const location = useLocation();
  const job = location.state; // Access job details from location state

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="bg-white h-full p-8 rounded-md shadow-lg">
        <h2 className="font-bold text-lg">{job.jobTitle}</h2>
        <p>{job.keySkills}</p>
        <p>{job.jobLocation}</p>
        <p>{job.salaryRange}</p>
        <p>{job.isRemote ? "Remote" : "Onsite"}</p>
        <p>{job.jobDescription}</p>
        <div className=" w-full text-end pe-10">
          <button className=" bg-purple-600 text-white font-bold p-2 px-10 rounded-lg ">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
