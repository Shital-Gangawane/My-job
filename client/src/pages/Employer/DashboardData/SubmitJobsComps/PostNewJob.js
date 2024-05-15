import React, { useState, useEffect } from "react";
import PostJobSection from "./PostJobSection";
import GoogleMap from "../GoogleMap";
import {
  genderoption,
  joboptions,
  options,
  salaryoptions,
  experienceoptions,
  careerleveloptions,
  qualificationoptions,
  categoriesoptions,
} from "./SelectOption";
import {
  postJobByEmployer,
  updateJobByEmployer,
} from "../../../../api/employer/axios";
import { useUserContext } from "../../../../context/userContext";

function PostNewJob({ toggleForm, employer, data, jobId, setIsEditing }) {
  const { token, setUser, user, setPostJobData, postJobData } =
    useUserContext();
  const [jobDetails, setJobDetails] = useState({
    companyName: user?.companyName,
    deadlinedate: "",
    jobLocation: "",
    latitude: "",
    longitude: "",
    jobTitle: "",
    jobDescription: "",
    selectedCategory: null,
    jobType: null,
    jobApplyType: null,
    gender: null,
    salaryType: null,
    workMode: null,
    minSalary: "",
    maxSalary: "",
    minExperience: "",
    maxExperience: "",
    careerLevel: null,
    qualificationRequired: null,
    videoUrl: "",
    externalUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setJobDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmitHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Job details at submission:", jobDetails);

    if (employer) {
      const res = await updateJobByEmployer(jobDetails, jobId, token);
      console.log("Update response:", res);
      if (res?.data?.success) {
        sessionStorage.setItem("user", JSON.stringify(res?.data?.employer));
        setUser(res?.data?.employer);
      }
    } else {
      const res = await postJobByEmployer(jobDetails, token);
      console.log("Post job response:", res);
      if (res?.data?.success) {
        sessionStorage.setItem("user", JSON.stringify(res?.data?.employer));
        setUser(res?.data?.employer);
      }
    }
  };

  const fetchEditData = () => {
    if (employer && data) {
      setJobDetails({
        deadlinedate: data.deadlinedate || "",
        jobLocation: data.jobLocation || "",
        latitude: data.latitude || "",
        longitude: data.longitude || "",
        jobTitle: data.jobTitle || "",
        jobDescription: data.jobDescription || "",
        selectedCategory: data.selectedCategory || null,
        jobType: data.jobType || null,
        jobApplyType: data.jobApplyType || null,
        gender: data.gender || null,
        salaryType: data.salaryType || null,
        workMode: data.workMode || null,
        minSalary: data.minSalary || "",
        maxSalary: data.maxSalary || "",
        minExperience: data.minExperience || "",
        maxExperience: data.maxExperience || "",
        careerLevel: data.careerLevel || null,
        qualificationRequired: data.qualificationRequired || null,
        videoUrl: data.videoUrl || "",
        externalUrl: data.externalUrl || "",
      });
    }
  };

  // UseEffect to fetch data on component mount
  useEffect(() => {
    fetchEditData();
  }, [data]); // Ensure this runs only once on mount

  return (
    <div
      className={` w-full h-auto  overflow-y-auto ${
        employer ? "" : "lg:mt-14"
      } px-4 lg:px-14 py-7  pb-14 `}
    >
      {!employer && (
        <h2 className=" w-full text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
          Post New Job{" "}
          <span className=" text-sm ms-5 text-end">
            Credits left:
            <span className=" text-green-600">{user?.postJobCredits}</span>
          </span>
        </h2>
      )}
      <div className="bg-white p-6 mt-5 px-10 rounded-lg">
        <PostJobSection
          jobDetails={jobDetails}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
          options={options}
          genderoption={genderoption}
          joboptions={joboptions}
          salaryoptions={salaryoptions}
          experienceoptions={experienceoptions}
          careerleveloptions={careerleveloptions}
          qualificationoptions={qualificationoptions}
          categoriesoptions={categoriesoptions}
          employer
        />

        {/*  Deadline Date Experience */}
        <div className="mb-5 w-full ">
          <label
            htmlFor="deadlinedate"
            className="block text-sm font-bold text-gray-900"
          >
            Application Deadline Date
          </label>
          <input
            type="date"
            name="deadlinedate"
            value={jobDetails.deadlinedate}
            onChange={handleInputChange}
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>

        <div className="mb-5 w-full">
          <label
            htmlFor="jobLocation"
            className="block  text-sm font-bold text-gray-900 pt-2 px-5 py-2"
          >
            Location
          </label>

          <input
            type="text"
            name="jobLocation"
            value={jobDetails.jobLocation}
            onChange={handleInputChange}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          />
        </div>

        {/* <div className="flex flex-wrap mx-2">
        <div className="w-full mb-5">
          <GoogleMap />
        </div>
      </div> */}

        <div className="flex flex-wrap -mx-2">
          <div className="mb-5 w-full md:w-1/2 px-2">
            <input
              placeholder="Latitude"
              type="text"
              name="latitude"
              value={jobDetails.latitude}
              onChange={handleInputChange}
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            />
          </div>
          <div className="mb-5 w-full md:w-1/2 px-2">
            <input
              placeholder="longitude"
              type="text"
              name="longitude"
              value={jobDetails.longitude}
              onChange={handleInputChange}
              className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            />
          </div>
        </div>
        <button
          onClick={handelSubmitHandler}
          className="lg:w-auto mt-5 py-3 px-8 bg-[#6ad61d] hover:bg-blue-600 text-white  rounded-lg transition duration-300 ease-in-out"
        >
          {employer ? "Save" : "Post Job"}
        </button>
        {employer && (
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="lg:w-auto ms-2 mt-5 py-3 px-8 bg-gray-700 hover:bg-gray-600 text-white  rounded-lg transition duration-300 ease-in-out"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}

export default PostNewJob;
