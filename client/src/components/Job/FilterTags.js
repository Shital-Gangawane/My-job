import React, { useContext } from "react";
import { JobContext } from "../../context/jobContext";

export default function FilterTags() {
  const { keyword, city, datePosted, experienceLevel, salaryRange } =
    useContext(JobContext);

  // Helper to return a human-readable label for the 'datePosted' filter
  const getDatePostedLabel = (key) => {
    const labels = {
      lastHour: "Last Hour",
      last24Hours: "Last 24 Hours",
      last7Days: "Last 7 Days",
    };
    return labels[key] || "";
  };

  return (
    <div className=" w-full mb-8">
      <p className="text-xl font-medium">Your Selected</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {keyword && (
          <div className="bg-gray-200 px-3 py-1 rounded-full">{keyword}</div>
        )}
        {city && (
          <div className="bg-gray-200 px-3 py-1 rounded-full">{city}</div>
        )}
        {datePosted && (
          <div className="bg-gray-200 px-3 py-1 rounded-full">
            {getDatePostedLabel(datePosted)}
          </div>
        )}
        {experienceLevel !== "" && (
          <div className="bg-gray-200 px-3 py-1 rounded-full">
            {experienceLevel}+ Years
          </div>
        )}
        {salaryRange && (
          <div className="bg-gray-200 px-3 py-1 rounded-full">
            ₹{salaryRange[0].toLocaleString()} - ₹
            {salaryRange[1].toLocaleString()}
          </div>
        )}
      </div>
    </div>
  );
}
