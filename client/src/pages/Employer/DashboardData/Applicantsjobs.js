import React, { useState, useEffect, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import { fetchAppliedCandidates, fetchJobs } from "../../../api/employer/axios";

function Applicantsjobs() {
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Default");
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      if (user?.postedJobs) {
        try {
          const res = await fetchJobs(user._id);
          if (res?.data?.success) {
            setJobs(res.data.allJobs);
            const allCandidateIds = res.data.allJobs.reduce(
              (acc, job) => acc.concat(job.applications),
              []
            );
            try {
              const response = await fetchAppliedCandidates(
                allCandidateIds.join(",")
              );
              setCandidates(response?.data?.allCandidates);
            } catch (error) {
              setError("Failed to fetch candidates");
              console.error(error);
            }
          } else {
            setError("Failed to fetch jobs");
          }
        } catch (err) {
          setError("Error fetching jobs");
          console.error(err);
        }
      }
    };

    fetchData();
  }, [user?.postedJobs]);

  const filteredCandidates = useMemo(() => {
    let filtered = candidates.filter((candidate) =>
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort jobs by their last update timestamp
    switch (sortType) {
      case "Newest":
        filtered.sort((a, b) => {
          const lastUpdateA = jobs.find((job) =>
            job.applications.includes(a._id)
          )?.updatedAt;
          const lastUpdateB = jobs.find((job) =>
            job.applications.includes(b._id)
          )?.updatedAt;
          return new Date(lastUpdateB) - new Date(lastUpdateA); // Sort descending
        });
        break;
      case "Oldest":
        filtered.sort((a, b) => {
          const lastUpdateA = jobs.find((job) =>
            job.applications.includes(a._id)
          )?.updatedAt;
          const lastUpdateB = jobs.find((job) =>
            job.applications.includes(b._id)
          )?.updatedAt;
          return new Date(lastUpdateA) - new Date(lastUpdateB); // Sort ascending
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [candidates, searchTerm, sortType, jobs]);

  return (
    <div className="w-full h-auto lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className="text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        All Applicants
      </h1>
      <div className="w-full bg-white rounded-lg shadow-lg p-7">
        <div className="flex flex-col lg:flex-row gap-3 lg:justify-between">
          <div className="bg-[#f0f5f7] rounded-lg ps-4 flex items-center gap-2">
            <IoIosSearch color="gray" size={20} />
            <input
              className="bg-[#f0f5f7] rounded-lg p-2 focus:outline-none"
              placeholder="Search by email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label>Sort by:</label>
            <select
              className="bg-[#f0f5f7] rounded-lg p-3 px-4 text-start text-zinc-500 focus:outline-[#6ad61d]"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="Default">Default</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="p-4 rounded-lg mt-7">
          {filteredCandidates.length > 0 ? (
            <ul>
              {filteredCandidates.map((candidate) => (
                <li className="flex gap-2" key={candidate?._id}>
                  <p>{candidate?.email}</p>
                  {jobs.map((job) => (
                    <p key={job._id + candidate._id}>
                      {job.applications.includes(candidate._id) && job.jobTitle}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm">{error || "No applicants found."}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Applicantsjobs;
