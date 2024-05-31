import React, { useState, useEffect, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import {
  fetchJobs,
  fetchShortlisted,
  shortlistCandidates,
  updateCandidateStatus,
  updateShortlistCandidateStatus,
} from "../../../api/employer/axios";
import Loader from "../../../components/Utility/Loader";
import { Link } from "react-router-dom";
import PageLoader from "../../../components/Utility/PageLoader";

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

function ShortlistCandidate() {
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  const { user, setUser } = useUserContext();
  const [jobs, setJobs] = useState([]);
  const [appStatus, setAppStatus] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Default");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.shortlistedCandidates?.length) {
        setIsLoading(true);
        // const res = await fetchJobs(user._id);
        const res = await fetchShortlisted(user?._id);
        if (res?.data?.success) {
          setShortlistedCandidates(res.data.shortlistedCandidates);
        }
        // const response = await fetchAppliedCandidates(
        //   user.shortlistedCandidates?.map((el) => el.candidate)?.join(",")
        // );
        // setShortlistedCandidates(response?.data?.allCandidates);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [user?.shortlistedCandidates]);

  const filteredCandidates = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    let filtered = shortlistedCandidates?.filter(
      (app) =>
        app?.candidate?.email?.toLowerCase().includes(lowerSearchTerm) ||
        app?.candidate?.name?.toLowerCase().includes(lowerSearchTerm) ||
        app?.candidate?.qualification
          ?.toLowerCase()
          .includes(lowerSearchTerm) ||
        app?.candidate?.experience
          ?.toString()
          .toLowerCase()
          .includes(lowerSearchTerm) ||
        app?.candidate?.city?.toLowerCase().includes(lowerSearchTerm) ||
        app?.job?.jobTitle?.toLowerCase().includes(lowerSearchTerm) ||
        app?.status?.toLowerCase().includes(lowerSearchTerm)
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
        // filtered.sort((a, b) =>
        //   a.candidate.name.localeCompare(b.candidate.name)
        // );
        break;
    }
    return filtered;
  }, [shortlistedCandidates, searchTerm, sortType]);

  const handleShortlistCandidate = async (candidateId, jobId) => {
    console.log("Shortlisting candidate:", candidateId);
    setIsLoading(true);
    // Implement the logic or API call to shortlist the candidate

    const res = await shortlistCandidates(user?._id, candidateId, jobId);
    console.log(res);
    if (res?.status === 200) {
      sessionStorage.setItem("user", JSON.stringify(res?.data?.employer));
      setUser(res?.data?.employer);
      setShortlistedCandidates(res?.data?.allCandidates);
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (event, candidateId, jobId) => {
    const newStatus = event.target.value;
    try {
      const response = await updateShortlistCandidateStatus(
        user._id,
        candidateId,
        jobId,
        newStatus,
        note
      );
      if (response.status === 200) {
        setUser((prevUser) => {
          // Update only the specific application in the user's applications array
          const updatedApplications = prevUser?.shortlistedCandidates?.map(
            (app) =>
              app.candidate === candidateId && app.job === jobId
                ? { ...app, status: newStatus }
                : app
          );
          return { ...prevUser, shortlistedCandidates: updatedApplications };
        });
        // This local state might be redundant if it's not used elsewhere
        setAppStatus(newStatus);
      }
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  return (
    <div className="w-full h-auto lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className="text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Candidate Shortlist
      </h1>
      <div className="w-full relative bg-white rounded-lg shadow-lg p-7">
        {isLoading && <PageLoader />}
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
          {filteredCandidates?.length > 0 ? (
            <table className="min-w-full leading-normal mt-4">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Job Applied
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Resume
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCandidates.map((app) => (
                  <tr key={`${app.candidate._id}-${app.job._id}`}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Link
                        to={`/jobs/${encodeURIComponent(
                          app.job.jobTitle.replace(/\s+/g, "-").toLowerCase()
                        )}/${app.job?._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {app.job.jobTitle}
                      </Link>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {app.candidate?.email}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {app.candidate.phoneNumber}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Link to={`/candidate-profile/${app.candidate?._id}`}>
                        <button className="text-blue-500 hover:text-blue-800">
                          View Profile
                        </button>
                      </Link>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() =>
                          handleShortlistCandidate(
                            app.candidate._id,
                            app.job._id
                          )
                        }
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        {user?.shortlistedCandidates?.some(
                          (el) =>
                            el.candidate === app.candidate._id &&
                            el.job === app.job._id
                        ) && "Remove"}
                      </button>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <select
                        value={
                          user?.shortlistedCandidates?.find(
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-sm">Don't have any candidates in shortlist.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShortlistCandidate;
