import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

function ShortlistJobs() {
  const [shortlistJobs, setShortlistJobs] = useState([]);
  return (
    <div className=" w-full h-auto  lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Jobs Shortlist
      </h1>
      <div className=" w-full bg-white rounded-lg shadow-lg p-7">
        <div className=" flex flex-col lg:flex-row gap-3 lg:justify-between ">
          <div className=" bg-[#f0f5f7] rounded-lg  ps-4 flex items-center gap-2">
            <IoIosSearch color="gray" size={20} />
            <input
              className=" bg-[#f0f5f7] rounded-lg p-2  focus:outline-none"
              placeholder="Search ..."
            />
          </div>
          <div>
            <label>Sort by:</label>
            <select className="bg-[#f0f5f7] rounded-lg p-3 px-4 text-start">
              <option>Default</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
        <div className=" p-4 rounded-lg mt-7">
          <p className="  text-sm">
            {shortlistJobs?.length ? "JobList" : "No jobs found."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShortlistJobs;
