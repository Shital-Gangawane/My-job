import React, { useContext, useState } from "react";
import { JobContext } from "../../context/jobContext";
import { searchJobs } from "../../api/candidate/axios";

const experienceArr = [0, 1, 2, 3, 4, 5, 6];

export default function SearchPanel() {
  const {
    keyword,
    city,
    datePosted,
    setSearchResults,
    experienceLevel,
    handleKeywordChange,
    handleCityChange,
    handleDatePostedChange,
    handleExperienceLevelChange,
  } = useContext(JobContext);

  const searchButtonHandler = async () => {
    const res = await searchJobs(keyword, city);
    setSearchResults(res?.data?.jobs);
  };
  return (
    <div className="hidden w-1/2 max-w-96 h-full md:flex flex-col gap-8 bg-white p-4 py-8 overflow-y-auto">
      <div>
        <label className="font-bold mb-2" htmlFor="keyword">
          Keyword
        </label>
        <input
          type="text"
          defaultValue={keyword}
          onChange={(e) => handleKeywordChange(e.target.value)}
          name="keyword"
          placeholder="Enter keyword"
          className="bg-gray-200 w-full mb-4 p-2 rounded-md focus:outline-none capitalize focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="font-bold mb-2" htmlFor="city">
          City
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) =>
            handleCityChange(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
          name="city"
          placeholder="Enter city"
          className="bg-gray-200 w-full mb-4 p-2 rounded-md capitalize focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <fieldset className="mb-4">
        <legend className="font-bold mb-2">Date Posted</legend>
        <div className="space-y-2">
          <div>
            <input
              type="radio"
              id="lastHour"
              name="datePosted"
              value="lastHour"
              checked={datePosted === "lastHour"}
              onChange={() => handleDatePostedChange("lastHour")}
            />
            <label htmlFor="lastHour">Last Hour</label>
          </div>
          <div>
            <input
              type="radio"
              id="last24Hours"
              name="datePosted"
              value="last24Hours"
              checked={datePosted === "last24Hours"}
              onChange={() => handleDatePostedChange("last24Hours")}
            />
            <label htmlFor="last24Hours">24 Hours</label>
          </div>
          <div>
            <input
              type="radio"
              id="last7Days"
              name="datePosted"
              value="last7Days"
              checked={datePosted === "last7Days"}
              onChange={() => handleDatePostedChange("last7Days")}
            />
            <label htmlFor="last7Days">7 days</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-bold mb-2">Experience Level</legend>
        <div className="space-y-2">
          {experienceArr.map((exp) => (
            <div key={exp}>
              <input
                type="radio"
                id={exp}
                name="experienceLevel"
                value={exp}
                checked={experienceLevel === exp}
                onChange={() => handleExperienceLevelChange(exp)}
              />
              <label htmlFor="oneYear">{exp ? `${exp} Year` : "Fresher"}</label>
            </div>
          ))}
        </div>
      </fieldset>
      <button
        onClick={searchButtonHandler}
        className=" bg-purple-500 rounded-lg p-2 px-5"
      >
        Find Job
      </button>
    </div>
  );
}
