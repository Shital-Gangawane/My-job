import React, { useState, useEffect, useMemo } from "react";
import {
  fetchAppliedCandidates,
  shortlistCandidates,
  updateCandidateStatus,
} from "../../../api/employer/axios";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import Loader from "../../Utility/Loader";

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
export default function ViewApplications({
  idArray,
  setIsViewApplicationOn,
  jobId,
}) {
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Default");
  const [allCandidates, setAllCandidates] = useState([]);
  const [note, setNote] = useState("");
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (idArray) {
          console.log(idArray);
          const ids = idArray.join(",");
          const res = await fetchAppliedCandidates(ids);
          console.log(res);
          if (res?.data?.success) {
            setAllCandidates(res?.data?.allCandidates);
            setIsLoading(false);
          }
        }
      } catch (error) {
        setError("Error fetching candidates.");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [idArray]);

  const filteredApplications = useMemo(() => {
    const lowerSearchTerm = searchTerm?.toLowerCase();
    let filtered = allCandidates?.filter(
      (candidate) =>
        candidate.email.toLowerCase().includes(lowerSearchTerm) ||
        candidate.name.toLowerCase().includes(lowerSearchTerm) ||
        candidate.qualification?.toLowerCase().includes(lowerSearchTerm) ||
        candidate.experience
          ?.toString()
          .toLowerCase()
          .includes(lowerSearchTerm) ||
        candidate?.location?.city?.toLowerCase().includes(lowerSearchTerm)
    );

    switch (sortType) {
      case "Newest":
        filtered.sort((a, b) => {
          return b - a;
        });
        break;
      case "Oldest":
        filtered.sort((a, b) => {
          return a - b;
        });
        break;

      default:
        break;
    }

    return filtered;
  }, [allCandidates, searchTerm, sortType]);

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
      }
    } catch (error) {
      console.error("Error updating status", error);
    }
  };
  return (
    <div className=" absolute top-0 left-0 h-full w-full  bg-black bg-opacity-65 p-14 flex justify-center">
      <div className=" bg-white max-h-full w-full rounded-md p-10 relative text-center">
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
          {/* <div>
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
          </div> */}
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
                  <th className="py-3 px-2 ">Location</th>
                  <th className="py-3 px-2 text-center">Resume</th>
                  <th className="py-3 px-2 text-center">Shortlist</th>
                  <th className="py-3 px-2 text-center">Status</th>
                  {/* <th className="py-3 px-2 text-center">Action</th> */}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {filteredApplications?.map((candidate) => (
                  <tr
                    key={candidate._id}
                    className="border-b border-gray-200 hover:bg-gray-100 text-center"
                  >
                    <td className="py-3 px-2 ">{candidate?.name}</td>
                    <td className="py-3 px-2 ">{candidate?.email}</td>
                    <td className="py-3 px-2 ">{candidate?.qualification}</td>
                    <td className="py-3 px-2 ">{candidate?.experience}</td>

                    <td className="py-3 px-2 ">{candidate?.location.city}</td>
                    <td className="py-3 px-2 text-center">
                      <a
                        href={`${baseUrl}/uploads/resumes/${candidate?.resume}`}
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
                            el.candidate === candidate._id && el.job === jobId
                        )}
                        onClick={() =>
                          handleShortlistCandidate(candidate._id, jobId)
                        }
                        className={`${
                          user?.shortlistedCandidates?.some(
                            (el) =>
                              el.candidate === candidate._id && el.job === jobId
                          )
                            ? "bg-green-300"
                            : "bg-green-500 hover:bg-green-700"
                        } text-white font-bold py-2 px-4 rounded`}
                      >
                        {user?.shortlistedCandidates?.some(
                          (el) =>
                            el.candidate === candidate._id && el.job === jobId
                        )
                          ? "Shortlisted"
                          : "Shortlist"}
                      </button>
                    </td>

                    <td className="py-3 px-2 text-center">
                      <select
                        value={
                          user?.applications?.find(
                            (el) =>
                              el.candidate === candidate._id && el.job === jobId
                          )?.status || ""
                        }
                        onChange={(e) =>
                          handleStatusChange(e, candidate._id, jobId)
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
            <p className="text-sm">{error || "No applicants found."}</p>
          )}
        </div>

        <button
          className=" bg-gray-800 text-white px-6 py-2 rounded-lg absolute bottom-2 "
          onClick={() => setIsViewApplicationOn(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
