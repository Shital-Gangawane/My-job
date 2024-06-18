import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import { fetchJobs } from "../../../api/employer/axios";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import Loader from "../../../components/Utility/Loader";
import PageLoader from "../../../components/Utility/PageLoader";
import ViewApplications from "../../../components/Employer/DashboardData/ViewApplications";

function Myjobs() {
  const [myJobs, setMyJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("newest");
  const [isLoading, setIsLoading] = useState(true);
  const [isViewApplicationOn, setIsViewApplicationOn] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      if (user?.postedJobs) {
        const res = await fetchJobs(user?._id);
        if (res?.data?.success) {
          let jobs = res?.data?.allJobs;
          // Sort jobs when fetched or apply other transformations
          jobs = sortJobs(jobs, sortType);
          setMyJobs(jobs);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [user?._id, sortType]);

  const dateFormatter = (str) => {
    const date = new Date(str);
    return `${date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const sortJobs = (jobs, sortType) => {
    switch (sortType) {
      case "newest":
        return jobs.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "oldest":
        return jobs.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      default:
        return jobs; // or apply a default sort
    }
  };

  const filteredJobs = myJobs.filter((job) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      job.jobTitle.toLowerCase().includes(searchTermLower) ||
      (searchTermLower.startsWith("ons") && !job.isRemote) ||
      (searchTermLower.startsWith("rem") && job.isRemote)
    );
  });

  return (
    <div className="w-full h-auto overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7 pb-14">
      <h1 className="text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Manage Jobs
      </h1>
      <div className="w-full relative bg-white rounded-lg shadow-lg p-7 pb-14">
        {isLoading && <PageLoader />}
        {isViewApplicationOn && (
          <ViewApplications
            idArray={selectedJob?.applications?.map((app) => app.candidate)}
            setIsViewApplicationOn={setIsViewApplicationOn}
            jobId={selectedJob?._id}
            myjobs
          />
        )}
        <div className="flex flex-col lg:flex-row gap-3 lg:justify-between">
          <div className="bg-[#f0f5f7] rounded-lg p-4 flex items-center gap-2">
            <IoIosSearch color="gray" size={20} />
            <input
              className="bg-[#f0f5f7] rounded-lg p-2 focus:outline-none"
              placeholder="Search ..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div>
            <label className="mr-2">Sort by:</label>
            <select
              className="bg-[#f0f5f7] rounded-lg p-3 px-4 text-start"
              value={sortType}
              onChange={handleSortChange}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="w-full mt-5 overflow-x-auto">
          {filteredJobs.length ? (
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 px-6 text-center">
                    S.no.
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Job Title
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Applications
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Location
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Posted Date
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Salary
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, i) => (
                  <tr
                    key={job._id}
                    className="bg-white border-b cursor-pointer text-center"
                  >
                    <td className="py-4 px-6">{i + 1}</td>
                    <td className="py-4 px-6">
                      <Link
                        to={`/jobs/${encodeURIComponent(
                          job.jobTitle.replace(/\s+/g, "-").toLowerCase()
                        )}/${job?._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {job.jobTitle}
                      </Link>
                    </td>
                    <td
                      className="py-4 px-6 text-blue-600 underline hover:text-blue-500"
                      onClick={() => {
                        setSelectedJob(job);
                        setIsViewApplicationOn(true);
                      }}
                    >
                      {job?.applications?.length}
                    </td>
                    <td className="py-4 px-6">
                      {job.isRemote ? "Remote" : "Onsite"}
                    </td>
                    <td className="py-4 px-6">
                      {dateFormatter(job.createdAt)}
                    </td>
                    <td className="py-4 px-6">
                      &#8377;{job.minSalary} - &#8377;{job.maxSalary} / month
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="bg-[#fcf8e3] border border-[#faebcc] p-4 rounded-lg mt-7">
              <p className="text-[#8a6d3b] text-sm">
                No jobs found matching the criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Myjobs;
