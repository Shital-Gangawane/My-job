import React, { createContext, useEffect, useState } from "react";
import { searchJobs } from "../api/candidate/axios";

const JobContext = createContext();

export default function JobContextProvider({ children }) {
  // State for all fields
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [salaryRange, setSalaryRange] = useState([50000, 500000]);
  const [isLoading, setIsLoading] = useState(false);

  // Functions to update state
  const handleKeywordChange = (value) => setKeyword(value);
  const handleCityChange = (value) => setCity(value);
  const handleDatePostedChange = (value) => setDatePosted(value);
  const handleExperienceLevelChange = (value) => setExperienceLevel(value);
  const handleSalaryRangeChange = (range) => setSalaryRange(range);

  useEffect(() => {
    const fetchResult = async () => {
      setIsLoading(true);
      if (!keyword && !city) return;
      const res = await searchJobs(keyword, city);
      if (res.data.success) {
        let filteredResults = res.data.jobs.filter((job) => {
          return (
            (!datePosted ||
              new Date(job.createdAt) >=
                new Date(
                  new Date().getTime() -
                    {
                      lastHour: 60 * 60 * 1000,
                      last24Hours: 24 * 60 * 60 * 1000,
                      last7Days: 7 * 24 * 60 * 60 * 1000,
                    }[datePosted]
                )) &&
            (!experienceLevel ||
              (job.minExperience <= experienceLevel &&
                job.maxExperience >= experienceLevel)) &&
            job.maxSalary >= salaryRange[0] &&
            job.minSalary <= salaryRange[1]
          );
        });
        setSearchResults(filteredResults);
        setIsLoading(false);
      }
    };
    fetchResult();
  }, [keyword, city, datePosted, experienceLevel, salaryRange]);

  // Context value containing state and functions
  const contextValue = {
    keyword,
    city,
    datePosted,
    experienceLevel,
    searchResults,
    salaryRange,
    isLoading,
    setSalaryRange,
    setSearchResults,
    handleKeywordChange,
    handleCityChange,
    handleDatePostedChange,
    handleExperienceLevelChange,
    handleSalaryRangeChange,
  };

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
}

export { JobContext, JobContextProvider };
