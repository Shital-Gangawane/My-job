import React, { useState, useEffect, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import {
  declineCandidates,
  fetchApplications,
  fetchAppliedCandidates,
  fetchJobs,
  shortlistCandidates,
  updateCandidateStatus,
} from "../../../api/employer/axios";
import Loader from "../../../components/Utility/Loader";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
const statusOptions = [
  "Shortlisted",
  "Interviewing",
  "1st round",
  "2nd round",
  "Final round",
  "Offered",
  "Placed",
  "Declined",
];
function Applicantsjobs() {
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Default");
  const { user, setUser } = useUserContext();
  const [appStatus, setAppStatus] = useState("");
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.applications?.length) {
        try {
          const res = await fetchApplications(user?._id);
          if (res?.data?.success) {
            setApplications(res?.data?.applications);
          } else {
            setError("Failed to fetch jobs");
          }
        } catch (err) {
          setError("Error fetching jobs");
          console.error(err);
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user?.applications]);

  const filteredApplications = useMemo(() => {
    const lowerSearchTerm = searchTerm?.toLowerCase();
    let filtered = applications?.filter(
      (app) =>
        app.candidate.email.toLowerCase().includes(lowerSearchTerm) ||
        app.candidate.name.toLowerCase().includes(lowerSearchTerm) ||
        app.candidate.qualification?.toLowerCase().includes(lowerSearchTerm) ||
        app.candidate.experience
          ?.toString()
          .toLowerCase()
          .includes(lowerSearchTerm) ||
        app.candidate.city?.toLowerCase().includes(lowerSearchTerm) ||
        app.job.jobTitle?.toLowerCase().includes(lowerSearchTerm) ||
        app.status?.toLowerCase().includes(lowerSearchTerm)
    );

    switch (sortType) {
      case "Newest":
        filtered.sort((a, b) => {
          return new Date(b.job.updatedAt) - new Date(a.job.updatedAt);
        });
        break;
      case "Oldest":
        filtered.sort((a, b) => {
          return new Date(a.job.updatedAt) - new Date(b.job.updatedAt);
        });
        break;

      default:
        break;
    }

    return filtered;
  }, [applications, searchTerm, sortType, jobs]);

  const handleShortlistCandidate = async (candidateId, jobId) => {
    console.log("Shortlisting candidate:", candidateId);
    // Implement the logic or API call to shortlist the candidate

    const res = await shortlistCandidates(user?._id, candidateId, jobId);
    console.log(res);
    if (res?.status === 200) {
      sessionStorage.setItem("user", JSON.stringify(res?.data?.employer));
      setUser(res?.data?.employer);
    }
  };

  const handleStatusChange = async (event, candidateId, jobId) => {
    const newStatus = event.target.value;
    try {
      const response = await updateCandidateStatus(
        user._id,
        candidateId,
        jobId,
        newStatus,
        note
      );
      if (response.status === 200) {
        setUser((prevUser) => {
          // Update only the specific application in the user's applications array
          const updatedApplications = prevUser.applications.map((app) =>
            app.candidate === candidateId && app.job === jobId
              ? { ...app, status: newStatus }
              : app
          );
          return { ...prevUser, applications: updatedApplications };
        });
        // This local state might be redundant if it's not used elsewhere
        setAppStatus(newStatus);
      }
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  const handleDeclineCandidate = async (candidateId, jobId) => {
    try {
      const res = await declineCandidates(user._id, candidateId, jobId);
      console.log(res);
      if (res?.status === 200) {
        sessionStorage.setItem("user", JSON.stringify(res?.data?.employer));
        setUser(res?.data?.employer);
      }
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  return (
    <div className="w-full  h-auto lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className="text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        All Applicants
      </h1>
      <div className="w-full relative bg-white rounded-lg shadow-lg p-7">
        {isLoading && <Loader />}
        <div className="flex flex-col lg:flex-row gap-3 lg:justify-between">
          <div className="bg-[#f0f5f7] rounded-lg ps-4 flex items-center gap-2">
            <IoIosSearch color="gray" size={20} />
            <input
              className="bg-[#f0f5f7] rounded-lg p-2 w-full focus:outline-none lg:min-w-96"
              placeholder="Search by any field..."
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
        <div className="p-1 rounded-lg mt-7 overflow-x-auto">
          {filteredApplications?.length > 0 ? (
            <table className="min-w-full leading-normal">
              <thead>
                <tr className=" text-center">
                  <th className="py-3 px-2 ">Name</th>
                  <th className="py-3 px-2 ">Email</th>
                  <th className="py-3 px-2 ">Education</th>
                  <th className="py-3 px-2 ">Experience</th>
                  <th className="py-3 px-2 ">Job Applied</th>
                  <th className="py-3 px-2 ">Location</th>
                  <th className="py-3 px-2 text-center">Resume</th>
                  <th className="py-3 px-2 text-center">Shortlist</th>
                  {/* <th className="py-3 px-2 text-center">Status</th> */}
                  <th className="py-3 px-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {filteredApplications?.map((app) => (
                  <tr
                    key={`${app.candidate._id}-${app.job._id}`}
                    className="border-b border-gray-200 hover:bg-gray-100 text-center"
                  >
                    <td className="py-3 px-2 ">{app.candidate.name}</td>
                    <td className="py-3 px-2 ">{app.candidate.email}</td>
                    <td className="py-3 px-2 ">
                      {app.candidate.qualification}
                    </td>
                    <td className="py-3 px-2 ">{app.candidate.experience}</td>
                    <td className="py-3 px-2 ">{app.job.jobTitle}</td>
                    <td className="py-3 px-2 ">
                      {app.candidate.location.city}
                    </td>
                    <td className="py-3 px-2 text-center">
                      <a
                        href={`${baseUrl}/uploads/resumes/${app.candidate.resume}`}
                        className="bg-blue-500 whitespace-nowrap hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <button
                        disabled={user?.shortlistedCandidates?.some(
                          (el) =>
                            el.candidate === app.candidate._id &&
                            el.job === app.job._id
                        )}
                        onClick={() =>
                          handleShortlistCandidate(
                            app.candidate._id,
                            app.job._id
                          )
                        }
                        className={`${
                          user?.shortlistedCandidates?.some(
                            (el) =>
                              el.candidate === app.candidate._id &&
                              el.job === app.job._id
                          )
                            ? "bg-green-300"
                            : "bg-green-500 hover:bg-green-700"
                        } text-white font-bold py-2 px-4 rounded`}
                      >
                        {user?.shortlistedCandidates?.some(
                          (el) =>
                            el.candidate === app.candidate._id &&
                            el.job === app.job._id
                        )
                          ? "Shortlisted"
                          : "Shortlist"}
                      </button>
                    </td>

                    <td className="py-3 px-2 text-center">
                      <button
                        onClick={() =>
                          handleDeclineCandidate(app.candidate._id, app.job._id)
                        }
                        className={`
                            bg-red-500 hover:bg-red-700
                        text-white font-bold py-2 px-4 rounded`}
                      >
                        Decline
                      </button>
                    </td>
                    {/* <td className="py-3 px-2 text-center">
                      <select
                        value={
                          user?.applications?.find(
                            (el) =>
                              el.candidate === app.candidate._id &&
                              el.job === app.job._id
                          )?.status || ""
                        }
                        onChange={(e) =>
                          handleStatusChange(e, app.candidate._id, app.job._id)
                        }
                      >
                        {statusOptions.map((status, i) => (
                          <option key={i} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td> */}
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
