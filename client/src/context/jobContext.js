import React, { createContext, useEffect, useState } from "react";
import { searchJobs } from "../api/candidate/axios";

// Create a context for the job state
const JobContext = createContext();

export default function JobContextProvider({ children }) {
  // State for all fields
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Functions to update state
  const handleKeywordChange = (value) => {
    setKeyword(value);
  };

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handleDatePostedChange = (value) => {
    setDatePosted(value);
  };

  const handleExperienceLevelChange = (value) => {
    setExperienceLevel(value);
  };

  useEffect(() => {
    const fetchResult = async () => {
      if (!keyword) return;
      const res = await searchJobs(keyword, city);
      if (res.data.success) {
        let filteredResults = res.data.jobs;

        // Filter results based on date posted
        if (datePosted) {
          const currentDate = new Date();
          if (datePosted === "lastHour") {
            const lastHour = new Date(currentDate.getTime() - 60 * 60 * 1000);
            filteredResults = filteredResults.filter(
              (job) => new Date(job.createdAt) >= lastHour
            );
          } else if (datePosted === "last24Hours") {
            const last24Hours = new Date(
              currentDate.getTime() - 24 * 60 * 60 * 1000
            );
            filteredResults = filteredResults.filter(
              (job) => new Date(job.createdAt) >= last24Hours
            );
          } else if (datePosted === "last7Days") {
            const last7Days = new Date(
              currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
            );
            filteredResults = filteredResults.filter(
              (job) => new Date(job.createdAt) >= last7Days
            );
          }
        }

        console.log(experienceLevel);
        // Filter results based on experience level
        if (experienceLevel) {
          filteredResults = filteredResults.filter(
            (job) => job.experienceRequired >= experienceLevel
          );
        }

        setSearchResults(filteredResults);
      }
    };
    fetchResult();
  }, [datePosted, experienceLevel]);

  // Context value containing state and functions
  const contextValue = {
    keyword,
    city,
    datePosted,
    experienceLevel,
    searchResults,
    setSearchResults,
    handleKeywordChange,
    handleCityChange,
    handleDatePostedChange,
    handleExperienceLevelChange,
  };

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
}

// Export context and custom hook for consuming it
export { JobContext, JobContextProvider };
