import React, { useState, useEffect, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import {
  fetchAppliedCandidates,
  fetchJobs,
  shortlistCandidates,
} from "../../../api/employer/axios";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
function Applicantsjobs() {
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Default");
  const { user, setUser } = useUserContext();

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

    switch (sortType) {
      case "Newest":
        filtered.sort((a, b) => {
          const lastUpdateA = jobs.find((job) =>
            job.applications.includes(a._id)
          )?.updatedAt;
          const lastUpdateB = jobs.find((job) =>
            job.applications.includes(b._id)
          )?.updatedAt;
          return new Date(lastUpdateB) - new Date(lastUpdateA);
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
          return new Date(lastUpdateA) - new Date(lastUpdateB);
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [candidates, searchTerm, sortType, jobs]);

  const handleShortlistCandidate = async (candidateId) => {
    console.log("Shortlisting candidate:", candidateId);
    // Implement the logic or API call to shortlist the candidate

    const res = await shortlistCandidates(user?._id, candidateId);
    console.log(res);
    if (res?.status === 200) {
      sessionStorage.setItem("user", JSON.stringify(res?.data));
      setUser(res?.data?.employer);
    }
  };

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
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Jobs Applied</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                  <th className="py-3 px-6 text-center">Shortlist</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {filteredCandidates.map((candidate) => (
                  <tr
                    key={candidate._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">{candidate.email}</td>
                    <td className="py-3 px-6 text-left">
                      {jobs
                        .filter((job) =>
                          job.applications.includes(candidate._id)
                        )
                        .map((job) => (
                          <p key={job._id}>{job.jobTitle}</p>
                        ))}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <a
                        href={`${baseUrl}/uploads/resumes/${candidate.resume}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleShortlistCandidate(candidate._id)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        {user?.shortlistedCandidates?.includes(candidate._id)
                          ? "Shortlisted"
                          : "Shortlist"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-sm">{error || "No applicants found."}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Applicantsjobs;
