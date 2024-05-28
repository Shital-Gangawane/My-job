import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneJob } from "../../../api/employer/axios";
import Nav from "../../../components/Nav/Nav";
import JobEditor from "../../../components/Employer/DashboardData/JobEditor";
import ViewApplications from "../../../components/Employer/DashboardData/ViewApplications";
import { useUserContext } from "../../../context/userContext";
import { applyJob } from "../../../api/candidate/axios";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { TiSocialFacebook, TiSocialPinterest } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import Loader from "../../../components/Utility/Loader";

function JobDetails() {
  const { jobTitle, id } = useParams();
  const [job, setJob] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewApplicationOn, setIsViewApplicationOn] = useState(false);
  const [isDeleteOn, setIsDeleteOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token, user, setUser } = useUserContext();

  const userType = sessionStorage.getItem("userType");

  const dateFormatter = (str) => {
    const date = new Date(str);

    const year = date.getFullYear(); // 2024
    const month = date.toLocaleString("en-US", { month: "long" }); // "May"
    const day = date.getDate(); // 6

    // Ensuring two digits for the day
    const formattedDay = day.toString().padStart(2, "0");

    return `${month} ${formattedDay}, ${year}`; // "May 06, 2024"
  };

  const applyClickHandler = async (jobId) => {
    setIsLoading(true);
    try {
      if (user?._id && userType && userType === "candidate") {
        const res = await applyJob(user?._id, jobId);
        console.log(res);
        if (res?.data?.success) {
          sessionStorage.setItem("user", JSON.stringify(res?.data?.candidate));
          setUser(res?.data?.candidate);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setIsLoading(true);
        console.log(jobTitle, id);
        const response = await fetchOneJob(id);
        if (response?.data?.success) {
          setJob(response?.data?.job);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [id, isEditing, user]); // Should depend on ID only if jobTitle is not used

  return (
    <div
      className={`bg-gray-100 w-full   min-h-screen ${
        isViewApplicationOn
          ? "h-full overflow-hidden"
          : "h-auto overflow-y-auto"
      } relative`}
    >
      <Nav bgColor="bg-white  top-0 left-0 w-full z-10 shadow-md" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isEditing && (
            <JobEditor jobId={id} data={job} setIsEditing={setIsEditing} />
          )}
          {isViewApplicationOn && (
            <ViewApplications
              idArray={job?.applications?.map((app) => app.candidate)}
              setIsViewApplicationOn={setIsViewApplicationOn}
              jobId={id}
            />
          )}
          <div className="bg-[#f5f6fb] w-full min-h-56 flex flex-col xl:flex-row justify-center items-center xl:items-center xl:justify-between md:px-10 py-8 xl:px-20">
            <div className=" whitespace-nowrap flex flex-col justify-center items-center xl:block">
              <h2 className="font-medium text-2xl mb-2 ps-1">
                {job?.jobTitle}
              </h2>
              <div className="flex items-center justify-center xl:gap-3 flex-wrap">
                <p className=" text-zinc-500 text-sm mr-2 xl:mr-0">
                  <CiLocationOn className=" inline align-top mr-2" size={20} />
                  {job?.isRemote ? "Remote" : "Onsite"}
                </p>
                <p className=" text-zinc-500 text-sm">
                  <CiClock2 className=" inline align-top mr-2" size={20} />
                  {dateFormatter(job?.createdAt)}
                </p>
                <p className=" text-zinc-500 text-sm">
                  <GiMoneyStack className=" inline align-top mr-2" size={20} />
                  &#8377;{job?.minSalary} - &#8377;{job?.maxSalary} / month
                </p>
              </div>
            </div>

            <div className=" xl:pe-10">
              {userType === "candidate" || !sessionStorage.getItem("user") ? (
                <button
                  onClick={() => applyClickHandler(job?._id)}
                  className=" bg-[#6ad61d] rounded-lg p-3 px-20 text-white hover:bg-blue-800"
                >
                  {job?.applications.find((el) => el?.candidate === user?._id)
                    ? "Applied"
                    : "Apply Now"}
                </button>
              ) : (
                <div className=" flex flex-wrap">
                  <button
                    disabled={!job?.applications?.length}
                    onClick={() => setIsViewApplicationOn(!isViewApplicationOn)}
                    className={`${
                      job?.applications?.length
                        ? "bg-[#6ad61d] hover:bg-blue-800"
                        : "bg-[#6ad61d92]"
                    } text-white py-2 px-4 rounded-lg me-2 `}
                  >
                    {!job?.applications?.length ? (
                      "No Applications"
                    ) : (
                      <p>
                        View Applications{" "}
                        <span className=" h-4 w-6  aspect-square text-xs p-1 rounded-full bg-red-700">
                          {job?.applications?.length}
                        </span>
                      </p>
                    )}
                  </button>
                  {sessionStorage.getItem("userType") === "employer" && (
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className=" bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg py-2 px-4 "
                    >
                      Edit
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

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
          <div className=" h-screen pt-10 px-4 sm:px-6 lg:px-8 pb-10 w-full mx-auto bg-white">
            <div className=" flex justify-between w-full h-auto bg-white pb-10 p-5 md:px-10 xl:py-14 xl:px-20 gap-10">
              <div>
                <h1 className=" text-lg font-medium mb-1">
                  Company: {job?.company}
                </h1>
                <h2 className=" text-lg font-medium mb-1">Job Description</h2>

                {job?.jobDescription.split("\n").map((line, i) => (
                  <p key={i} className=" text-zinc-500 text-sm mb-1">
                    {line}
                  </p>
                ))}

                <div className=" flex items-center gap-1 xl:gap-3 flex-wrap mt-5">
                  <h2 className=" font-medium">Share this post</h2>
                  <button className=" bg-[#1967D2] text-white py-2 px-6 rounded-lg text-sm">
                    <TiSocialFacebook className=" inline" size={20} />
                    Facebook
                  </button>
                  <button className=" bg-[#BC91E8] text-white py-2 px-6 rounded-lg text-sm">
                    <AiOutlineTwitter className=" inline" size={20} />
                    Twitter
                  </button>
                  <button className=" bg-[#D93025] text-white py-2 px-6 rounded-lg text-sm">
                    <TiSocialPinterest className=" inline" size={20} />
                    Pinterest
                  </button>
                </div>
              </div>
              <div className="bg-[#f5f6fb] max-h-96 rounded-lg p-8 min-w-96 hidden xl:block">
                <h2 className=" text-lg font-medium mb-6">Job Overview</h2>

                <div className=" flex mb-6">
                  <CiClock2 className=" mr-4 text-[#6ad61d]" size={30} />
                  <div>
                    <h3 className=" font-medium">Date Posted</h3>
                    <p className=" text-zinc-500 text-sm">
                      {dateFormatter(job?.createdAt)}
                    </p>
                  </div>
                </div>
                <div className=" flex mb-6">
                  <CiLocationOn className=" mr-4 text-[#6ad61d]" size={30} />
                  <div>
                    <h3 className=" font-medium">Location</h3>
                    <p className=" text-zinc-500 text-sm">
                      {job?.isRemote ? "Remote" : "Onsite"}
                    </p>
                  </div>
                </div>

                <div className=" flex mb-6">
                  <GiMoneyStack className=" mr-4 text-[#6ad61d]" size={30} />
                  <div>
                    <h3 className=" font-medium">Offered Salary:</h3>
                    <p className=" text-zinc-500 text-sm">
                      &#8377;{job?.minSalary} - &#8377;{job?.maxSalary} / month
                    </p>
                  </div>
                </div>

                <div className=" flex mb-6">
                  <CgSandClock className=" mr-4 text-[#6ad61d]" size={30} />
                  <div>
                    <h3 className=" font-medium">Expiration date</h3>
                    <p className=" text-zinc-500 text-sm">
                      {job?.deadlinedate
                        ? dateFormatter(job?.deadlinedate)
                        : "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default JobDetails;
