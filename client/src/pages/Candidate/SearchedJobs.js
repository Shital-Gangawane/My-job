import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchPanel from "./SearchPanel";
import { GiMoneyStack } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { JobContext } from "../../context/jobContext";

export default function SearchedJobs() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    searchResults,
    setSearchResults,
    handleKeywordChange,
    handleCityChange,
  } = useContext(JobContext);

  // Function to navigate to job details page
  const handleJobClick = (job) => {
    navigate(`/job/${job.jobTitle}`, { state: job });
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Format date
  const dateFormatter = (str) => {
    const date = new Date(str);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Effect for initializing or updating data based on location changes
  useEffect(() => {
    setSearchResults(location?.state?.jobs);
    handleKeywordChange(location?.state?.keyword);
    handleCityChange(location?.state?.city);
  }, []);

  return (
    <div className="flex w-screen h-screen overflow-hidden scroll">
      <SearchPanel />
      <div className="w-full bg-slate-100 rounded-s overflow-y-auto ">
        <div className="flex flex-col gap-7 p-5">
          <p>
            {searchResults?.length
              ? `Showing all ${searchResults?.length} results`
              : "No Jobs Found."}
          </p>
          {searchResults?.map((job) => (
            <div
              className="bg-white p-8 rounded-md shadow-md cursor-pointer"
              key={job._id}
              onClick={() => handleJobClick(job)} // Handle click event
            >
              <h2 className="font-bold text-lg">{job.jobTitle}</h2>
              <p className=" text-gray-500 text-sm flex">{job.keySkills}</p>
              <div className=" flex gap-10">
                <p className=" text-gray-500 text-sm flex items-center gap-1">
                  <CiLocationOn />
                  {job.jobLocation}
                </p>
                <p className=" text-gray-500 text-sm flex items-center gap-1">
                  <GiMoneyStack />
                  {job.salaryRange}
                </p>
              </div>
              <p className=" text-gray-500 text-sm flex items-center gap-1">
                <CiClock2 />
                {dateFormatter(job.createdAt)}
              </p>
              <p className=" text-gray-500 text-sm flex">
                {job.isRemote ? "Remote" : "Onsite"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
