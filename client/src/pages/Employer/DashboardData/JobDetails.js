import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneJob } from "../../../api/employer/axios";
import Nav from "../../../components/Nav/Nav";
import JobEditor from "../../../components/Employer/DashboardData/JobEditor";
import ViewApplications from "../../../components/Employer/DashboardData/ViewApplications";

function JobDetails() {
  const { jobTitle, id } = useParams();
  const [job, setJob] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewApplicationOn, setIsViewApplicationOn] = useState(false);
  const [isDeleteOn, setIsDeleteOn] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      console.log(jobTitle, id);
      const response = await fetchOneJob(id);
      if (response?.data?.success) {
        setJob(response?.data?.job);
      }
    };

    fetchJobDetails();
  }, [id, isEditing]); // Should depend on ID only if jobTitle is not used

  return (
    <div className="w-full  min-h-screen bg-gray-50 relative">
      <Nav bgColor="bg-white  top-0 left-0 w-full z-10 shadow-md" />
      {isEditing && (
        <JobEditor jobId={id} data={job} setIsEditing={setIsEditing} />
      )}
      {isViewApplicationOn && (
        <ViewApplications
          idArray={job?.applications}
          setIsViewApplicationOn={setIsViewApplicationOn}
        />
      )}

      {isDeleteOn && (
        <div className=" absolute top-0 left-0 h-full w-full bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-10  border shadow-lg rounded-lg">
            <p>Do you want to delete?</p>
            <div className=" flex justify-around mt-5">
              <button
                onClick={() => setIsDeleteOn(!isDeleteOn)}
                className=" bg-black text-white py-2 px-4 rounded-lg"
              >
                No
              </button>
              <button className=" bg-black text-white py-2 px-4 rounded-lg">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      <div className=" h-auto pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <div className=" space-x-2 mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-2 inline-block">
            Job Details
          </h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className=" bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg py-2  px-4"
          >
            Edit
          </button>
          <button
            onClick={() => setIsDeleteOn(!isDeleteOn)}
            className=" bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 py-2 px-4"
          >
            Delete
          </button>
        </div>
        {job ? (
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className=" flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                {job?.jobTitle}
              </h2>
              <button
                onClick={() => setIsViewApplicationOn(!isViewApplicationOn)}
                className="bg-[#6ad61d] text-white py-2 px-4 rounded-lg hover:bg-blue-800"
              >
                View Applications
              </button>
            </div>

            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Applications: {job?.applications?.length}</li>
              <li>Location: {job?.isRemote ? "Remote" : job.jobLocation}</li>
              <li>
                Experience Required: {job?.minExperience} - {job?.maxExperience}{" "}
                years
              </li>
              <li>
                Salary Range: ${job?.minSalary} - ${job?.maxSalary} per annum
              </li>
            </ul>

            <div className=" mt-6">
              Job Description
              <p className="text-gray-600 mt-2 mb-4">{job?.jobDescription}</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default JobDetails;
