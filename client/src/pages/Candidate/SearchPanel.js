import React, { useContext, useState } from "react";
import { JobContext } from "../../context/jobContext";
import { searchJobs } from "../../api/candidate/axios";
import { Range, getTrackBackground } from "react-range";
import { motion } from "framer-motion";

const experienceArr = [0, 1, 2, 3, 4, 5, 6];

export default function SearchPanel({ isSidebarVisible, isMobile, onClose }) {
  const {
    keyword,
    city,
    datePosted,
    setSearchResults,
    experienceLevel,
    salaryRange,
    setSalaryRange,
    handleKeywordChange,
    handleCityChange,
    handleDatePostedChange,
    handleExperienceLevelChange,
  } = useContext(JobContext);

  const STEP = 1000;
  const MIN = 30000;
  const MAX = 600000;

  const searchButtonHandler = async () => {
    const res = await searchJobs(keyword, city);
    if (res?.data?.success) {
      setSearchResults(res?.data?.jobs);
      console.log(res);
    }
  };

  const handleBackdropClick = (e) => {
    // Check if the click is on the backdrop; close sidebar if true
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <motion.div
      onClick={isMobile ? handleBackdropClick : null}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`fixed inset-0 z-40 flex lg:relative lg:z-auto ${
        isMobile ? !isSidebarVisible && "hidden" : " w-1/2 max-w-96 h-full"
      }`}
      style={{
        backgroundColor: isMobile ? "rgba(0, 0, 0, 0.5)" : "transparent",
      }}
    >
      <div className="flex h-auto flex-col gap-8 bg-[#F5F7FC] p-6 py-8 rounded-lg overflow-y-auto w-3/4 lg:w-full ">
        <div>
          <label className="font-medium text-lg" htmlFor="keyword">
            Search by Keywords
          </label>
          <input
            type="text"
            value={keyword}
            autoComplete="off"
            onChange={(e) => handleKeywordChange(e.target.value)}
            name="keyword"
            placeholder="Enter keyword"
            className="bg-white w-full my-4 p-4 rounded-md focus:outline-none capitalize focus:ring-1 focus:ring-[#6ad61d]"
          />
        </div>
        <div>
          <label className="font-medium text-lg" htmlFor="city">
            Location
          </label>
          <input
            type="text"
            value={city}
            autoComplete="off"
            onChange={(e) =>
              handleCityChange(
                e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
              )
            }
            name="city"
            placeholder="Enter city"
            className="bg-white w-full my-4 p-4 rounded-md capitalize focus:outline-none focus:ring-1 focus:ring-[#6ad61d]"
          />
        </div>

        <fieldset className="mb-4">
          <legend className="font-medium text-lg mb-4">Date Posted</legend>
          <div className=" flex flex-col gap-5 justify-center">
            <div>
              <input
                className="appearance-none h-4 w-4 border-2 border-gray-100 rounded-full bg-white checked:bg-[#6ad61d] checked:shadow-sm focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                id="lastHour"
                name="datePosted"
                value="lastHour"
                checked={datePosted === "lastHour"}
                onChange={() => handleDatePostedChange("lastHour")}
              />
              <label className=" text-zinc-500 align-top" htmlFor="lastHour">
                Last Hour
              </label>
            </div>
            <div>
              <input
                className="appearance-none h-4 w-4 border-2 border-gray-100 rounded-full bg-white checked:bg-[#6ad61d] checked:shadow-sm focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                id="last24Hours"
                name="datePosted"
                value="last24Hours"
                checked={datePosted === "last24Hours"}
                onChange={() => handleDatePostedChange("last24Hours")}
              />
              <label className=" text-zinc-500 align-top" htmlFor="last24Hours">
                24 Hours
              </label>
            </div>
            <div>
              <input
                className="appearance-none h-4 w-4 border-2 border-gray-100 rounded-full bg-white checked:bg-[#6ad61d] checked:shadow-sm focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                id="last7Days"
                name="datePosted"
                value="last7Days"
                checked={datePosted === "last7Days"}
                onChange={() => handleDatePostedChange("last7Days")}
              />
              <label className=" text-zinc-500 align-top" htmlFor="last7Days">
                7 days
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-medium mb-4 text-lg">Experience Level</legend>
          <div className=" flex flex-col gap-5 justify-center">
            {experienceArr.map((exp) => (
              <div key={exp}>
                <input
                  className="appearance-none h-4 w-4 border-2 border-gray-100 rounded-full bg-white checked:bg-[#6ad61d] checked:shadow-sm focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  id={exp}
                  name={exp}
                  value={exp}
                  checked={experienceLevel === exp}
                  onChange={() => handleExperienceLevelChange(exp)}
                />
                <label className=" text-zinc-500 align-top" htmlFor={exp}>
                  {exp ? `${exp} Year` : "Fresher"}
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <div className="mt-6">
          <label
            htmlFor="salary-range"
            className="block text-lg font-medium mb-2"
          >
            Salary Range:
          </label>
          <div className="text-center text-sm font-medium text-[#6ad61d] mb-2">
            &#8377;{salaryRange[0].toLocaleString()} - &#8377;
            {salaryRange[1].toLocaleString()}
          </div>

          <Range
            values={salaryRange}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => setSalaryRange(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                className="w-full h-2 bg-gray-300 rounded-md"
                style={{
                  background: getTrackBackground({
                    values: salaryRange,
                    colors: ["#ccc", "#6ad61d", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                }}
              >
                <div
                  ref={props.ref}
                  className=" relative max-h-full max-w-full"
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="h-4 w-4 bg-white border-2 border-[#6ad61d] rounded-full absolute top-1"
              />
            )}
          />
        </div>
        <div className=" w-full text-center mt-7 xl:mt-0">
          <button
            onClick={searchButtonHandler}
            className=" bg-[#6ad61d] w-full rounded-lg p-4 px-5 text-white"
          >
            Find Jobs
          </button>
        </div>
      </div>
    </motion.div>
  );
}
