import React, { useEffect, useState } from "react";
import PostJob from "../../components/Admin/PostJob";
import JobList from "../../components/Admin/JobList";
import { fetchPostedJobs } from "../../api/admin/axios";
import { useAdminContext } from "../../context/adminContext";

export default function Jobs() {
  const [isAddJobOn, setIsAddJobOn] = useState(false);
  const { adminToken, adminData, jobs, setJobs } = useAdminContext();
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      if (adminToken) {
        const res = await fetchPostedJobs(adminToken);
        console.log(res);
        if (res && res.data && res.data.allJobs) {
          setJobs(res.data.allJobs);
          setFilteredJobs(res.data.allJobs);
        }
      }
    };
    fetchJobs();
  }, [setFilteredJobs, adminToken]);

  const filterAllJob = () => {
    setFilteredJobs(jobs);
  };

  const filterMyJob = () => {
    const myJobs = jobs.filter((job) => job.createdBy === adminData._id);
    setFilteredJobs(myJobs);
  };

  return (
    <div className="flex flex-col w-full bg-gray-400">
      <div className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Jobs</h1>
      </div>

      <div className="px-6 py-2 flex justify-between">
        <div>
          <button
            onClick={filterAllJob}
            className={`bg-blue-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md mr-4 ${
              filteredJobs.length === jobs.length ? "bg-purple-600" : ""
            }`}
          >
            All Jobs
          </button>
          <button
            onClick={filterMyJob}
            className={`bg-blue-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md ${
              filteredJobs.length !== jobs.length ? "bg-purple-600" : ""
            }`}
          >
            My Jobs
          </button>
        </div>
        <button
          onClick={() => setIsAddJobOn(true)}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md "
        >
          + Post Job
        </button>
      </div>

      {isAddJobOn && <PostJob setIsAddJobOn={setIsAddJobOn} />}

      <div className="flex-grow p-6 border">
        <JobList jobs={filteredJobs} />
      </div>
    </div>
  );
}
