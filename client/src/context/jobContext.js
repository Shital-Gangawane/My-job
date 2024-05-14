import React, { createContext, useEffect, useState, useCallback } from "react";
import { searchJobs } from "../api/candidate/axios";
import debounce from "lodash.debounce";

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
<<<<<<< HEAD

=======
>>>>>>> 85ababe153b00fb6efe1940024e9f1bde224a4e4
  // Functions to update state
  const handleKeywordChange = (value) => setKeyword(value);
  const handleCityChange = (value) => setCity(value);
  const handleDatePostedChange = (value) => setDatePosted(value);
  const handleExperienceLevelChange = (value) => setExperienceLevel(value);
<<<<<<< HEAD

  const debouncedFetchResults = useCallback(
    debounce(
      async (keyword, city, datePosted, experienceLevel, salaryRange) => {
        setIsLoading(true);
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
      },
      1000
    ),
    []
  );
=======
>>>>>>> 85ababe153b00fb6efe1940024e9f1bde224a4e4

  const debouncedFetchResults = useCallback(
    debounce(
      async (keyword, city, datePosted, experienceLevel, salaryRange) => {
        setIsLoading(true);
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
      },
      1000
    ),
    []
  );
  useEffect(() => {
    debouncedFetchResults(
      keyword,
      city,
      datePosted,
      experienceLevel,
      salaryRange
    );
  }, [
    keyword,
    city,
    datePosted,
    experienceLevel,
    salaryRange,
    debouncedFetchResults,
  ]);

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
  };

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
}

export { JobContext, JobContextProvider };
