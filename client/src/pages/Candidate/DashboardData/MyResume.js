import React, { useState, useEffect, useRef } from "react";
import Loader from "../../../components/Utility/Loader";
import { useUserContext } from "../../../context/userContext";
import EditResume from "./MyResume/EditResume";
import { myResume } from "../../../api/candidate/axios";
import Education from "./MyResume/Education/Education";
import Experience from "./MyResume/Experience/Experience";
import Awards from "./MyResume/Awards/Awards";

function MyResume() {
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const [resumeInfo, setResumeInfo] = useState({
    resume: null,
  });

  const [educations, setEducations] = useState([
    {
      title: "",
      academic: "",
      year: "",
      description: "",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      title: "",
      startDate: "",
      endDate: "",
      company: "",
      description: "",
    },
  ]);

  const [awards, setAwards] = useState([
    {
      title: "",
      year: "",
      description: "",
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(resumeInfo).forEach((key) => {
      formData.append(key, resumeInfo[key]);
    });
    console.log(educations, experiences, awards);

    const res = await myResume(formData, user?._id);
    console.log(res);
    sessionStorage.setItem("user", JSON.stringify(res?.data?.candidate));
    setUser(res?.data?.candidate);
  };

  const handleResumeChange = (e, resumeType) => {
    console.log(e.target.files[0]);
    setResumeInfo((prev) => ({
      ...prev,
      [resumeType]: e.target.files[0],
    }));
  };
  return (
    <div className=" w-full h-auto  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14">
      <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Edit Resume
      </h2>
      <div>
        <EditResume onChange={handleResumeChange} resumeInfo={resumeInfo} />
      </div>

      <div>
        <Education educations={educations} setEducations={setEducations} />
      </div>

      <div>
        <Experience experiences={experiences} setExperiences={setExperiences} />
      </div>

      <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
        <h2 className="text-lg text-[#202124] mb-6 font-bold">Portfolio</h2>
      </div>

      <div>
        <Awards awards={awards} setAwards={setAwards} />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="lg:w-auto mt-5 py-3 px-8 bg-[#6ad61d] hover:bg-blue-600 text-white  rounded-lg transition duration-300 ease-in-out"
      >
        Save Resume
      </button>
    </div>
  );
}

export default MyResume;
