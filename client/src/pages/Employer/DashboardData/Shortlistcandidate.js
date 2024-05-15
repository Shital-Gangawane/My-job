import React, { useState, useEffect, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import {
  fetchAppliedCandidates,
  shortlistCandidates,
} from "../../../api/employer/axios";

function ShortlistCandidate() {
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  const { user, setUser } = useUserContext();
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Default");

  useEffect(() => {
    const fetchData = async () => {
      if (user?.shortlistedCandidates?.length) {
        const response = await fetchAppliedCandidates(
          user.shortlistedCandidates?.map((el) => el.candidate)?.join(",")
        );
        setShortlistedCandidates(response?.data?.allCandidates);
      }
    };
    fetchData();
  }, [user?.shortlistedCandidates]);

  const filteredCandidates = useMemo(() => {
    let filtered = shortlistedCandidates.filter((candidate) =>
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // switch (sortType) {
    //   case "Newest":
    //     filtered.sort((a, b) => {
    //       const lastUpdateA = jobs.find((job) =>
    //         job.applications.includes(a._id)
    //       )?.updatedAt;
    //       const lastUpdateB = jobs.find((job) =>
    //         job.applications.includes(b._id)
    //       )?.updatedAt;
    //       return new Date(lastUpdateB) - new Date(lastUpdateA);
    //     });
    //     break;
    //   case "Oldest":
    //     filtered.sort((a, b) => {
    //       const lastUpdateA = jobs.find((job) =>
    //         job.applications.includes(a._id)
    //       )?.updatedAt;
    //       const lastUpdateB = jobs.find((job) =>
    //         job.applications.includes(b._id)
    //       )?.updatedAt;
    //       return new Date(lastUpdateA) - new Date(lastUpdateB);
    //     });
    //     break;
    //   default:
    //     break;
    // }

    return filtered;
  }, [shortlistedCandidates, searchTerm, sortType]);

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
        Candidate Shortlist
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
        {filteredCandidates?.length > 0 ? (
          <table className="min-w-full leading-normal mt-4">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Resume
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates?.map((candidate) => (
                <tr key={candidate._id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {candidate.email}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button className="text-blue-500 hover:text-blue-800">
                      View Profile
                    </button>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() => handleShortlistCandidate(candidate._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {user?.shortlistedCandidates?.some(
                        (el) => el.candidate === candidate._id
                      ) && "Remove"}
                    </button>
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
  );
}

export default ShortlistCandidate;
