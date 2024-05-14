import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import { fetchAppliedCandidates } from "../../../api/employer/axios";

function ShortlistCandidate() {
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      if (user?.shortlistedCandidates?.length) {
        const response = await fetchAppliedCandidates(
          user.shortlistedCandidates.join(",")
        );
        setShortlistedCandidates(response?.data?.allCandidates);
      }
    };
    fetchData();
  }, [user?.shortlistedCandidates]);

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
              placeholder="Search ..."
            />
          </div>
          <div>
            <label>Sort by:</label>
            <select className="bg-[#f0f5f7] rounded-lg p-3 px-4 text-start">
              <option>Default</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
        {shortlistedCandidates.length > 0 ? (
          <table className="min-w-full leading-normal mt-4">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {shortlistedCandidates.map((candidate) => (
                <tr key={candidate._id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {candidate.email}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button className="text-blue-500 hover:text-blue-800">
                      View Profile
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
