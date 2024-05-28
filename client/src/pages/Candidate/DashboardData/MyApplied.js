import React, { useState, useEffect, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import { fetchUser } from "../../../api/employer/axios";
import { Link } from "react-router-dom";
import Loader from "../../../components/Utility/Loader";

function MyApplied() {
  const [myApplied, setMyApplied] = useState([]);
  const { user, setUser } = useUserContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Default");
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch profile data
  const fetchProfileData = async () => {
    if (user?._id) {
      setIsLoading(true);
      try {
        const res = await fetchUser("candidate", user?._id);
        console.log(res);

        if (res?.data?.success) {
          const data = res?.data?.candidate;
          setUser(data);
          setMyApplied(data?.appliedJobs || []);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
        setIsLoading(false);
      }
    }
  };

  // UseEffect to fetch data on component mount
  useEffect(() => {
    fetchProfileData();
  }, []); // Ensure this runs only once on mount

  const filteredJobs = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    let filtered = myApplied?.filter(
      (job) =>
        job.company.toLowerCase().includes(lowerSearchTerm) ||
        job.workMode.toLowerCase().includes(lowerSearchTerm) ||
        job.jobTitle.toLowerCase().includes(lowerSearchTerm) ||
        job.jobLocation.toLowerCase().includes(lowerSearchTerm) ||
        job.applications
          .find((el) => el.candidate === user?._id)
          .status.toLowerCase()
          .includes(lowerSearchTerm)
    );

    const getAppliedAt = (job) => {
      const application = job.applications.find(
        (el) => el.candidate.toString() === user?._id
      );
      return application ? new Date(application.appliedAt) : new Date(0); // Default to epoch if not found
    };

    switch (sortType) {
      case "Newest":
        filtered?.sort((a, b) => getAppliedAt(b) - getAppliedAt(a));
        break;
      case "Oldest":
        filtered?.sort((a, b) => getAppliedAt(a) - getAppliedAt(b));
        break;
      default:
        // No sorting or additional default sorting logic can be added here
        break;
    }
    return filtered;
  }, [myApplied, searchTerm, sortType]);

  return (
    <div className="w-full h-auto lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className="text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Applied Jobs
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
            <label className="mr-2">Sort by:</label>
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
        <div className="p-4 rounded-lg mt-7 overflow-x-auto">
          {filteredJobs?.length ? (
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr className="bg-gray-200 text-sm text-center ">
                  <th className="py-2 px-4 border font-medium">Job Title</th>
                  <th className="py-2 px-4 border font-medium">Company</th>
                  <th className="py-2 px-4 border font-medium">Location</th>
                  <th className="py-2 px-4 border font-medium">Experience</th>
                  <th className="py-2 px-4 border font-medium">Status</th>
                  {/* <th className="py-2 px-4 border font-medium">Remote</th> */}
                  <th className="py-2 px-4 border font-medium">Work Mode</th>
                  <th className="py-2 px-4 border font-medium">Applied on</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs?.map((job) => (
                  <tr
                    key={job._id}
                    className="hover:bg-gray-50 text-sm text-center"
                  >
                    <td className="py-2 px-4 border ">
                      {" "}
                      <Link
                        to={`/jobs/${encodeURIComponent(
                          job.jobTitle.replace(/\s+/g, "-").toLowerCase()
                        )}/${job?._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {job.jobTitle}
                      </Link>
                    </td>
                    <td className="py-2 px-4 border">
                      <Link to={`/employer-profile/${job?.createdByEmp}`}>
                        <button className="text-blue-500 hover:underline">
                          {job?.company}
                        </button>
                      </Link>
                    </td>
                    <td className="py-2 px-4 border">{job.jobLocation}</td>
                    <td className="py-2 px-4 border">
                      {job.minExperience} - {job.maxExperience} years
                    </td>
                    <td
                      className={`py-2 px-4 border ${
                        job?.applications.find(
                          (el) => el.candidate === user?._id
                        ).status === "Declined"
                          ? " text-red-500"
                          : " text-green-400"
                      }`}
                    >
                      {job?.applications.find(
                        (el) => el.candidate === user?._id
                      ).status || "Pending"}
                    </td>
                    {/* <td className="py-2 px-4 border">
                      {job.isRemote ? "Yes" : "No"}
                    </td> */}
                    <td className="py-2 px-4 border">{job.workMode}</td>
                    <td className="py-2 px-4 border">
                      {new Date(
                        job.applications.find(
                          (el) => el.candidate === user?._id
                        ).appliedAt
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-sm">No application found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyApplied;
