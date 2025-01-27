import React, { useState, useEffect, useRef } from "react";
import Loader from "../../../components/Utility/Loader";
import { useUserContext } from "../../../context/userContext";
import EditResume from "./MyResume/EditResume";
import { myResume } from "../../../api/candidate/axios";
import Education from "./MyResume/Education/Education";
import Experience from "./MyResume/Experience/Experience";
import Awards from "./MyResume/Awards/Awards";
import { fetchUser } from "../../../api/employer/axios";
import PageLoader from "../../../components/Utility/PageLoader";

function MyResume() {
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const [resumeInfo, setResumeInfo] = useState({
    resume: null,
    portfolio: "",
    github: "",
    linkedin: "",
  });

  const [educations, setEducations] = useState([
    {
      degree: "",
      institute: "",
      year: "",
      specialization: "",
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

  // Function to fetch profile data
  const fetchProfileData = async () => {
    if (user?._id) {
      setIsLoading(true);
      try {
        const res = await fetchUser("candidate", user?._id);
        // console.log(res);

        if (res?.data?.success) {
          const data = res?.data?.candidate;
          setResumeInfo({
            resume: data.resume || null,
            portfolio: data.portfolio || "",
            github: data.github || "",
            linkedin: data.linkedin || "",
          });
          setEducations(data.educations || []);
          setExperiences(data.experiences || []);
          setAwards(data.awards || []);
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
  }, [user]); // Ensure this runs only once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(resumeInfo).forEach((key) => {
      formData.append(key, resumeInfo[key]);
    });
    console.log(educations, experiences, awards);
    formData.append("educations", JSON.stringify(educations));
    formData.append("experiences", JSON.stringify(experiences));
    formData.append("awards", JSON.stringify(awards));

    const res = await myResume(formData, user?._id);
    console.log(res);
    if (res?.data?.success) {
      sessionStorage.setItem("user", JSON.stringify(res?.data?.candidate));
      setUser(res?.data?.candidate);
    }
    setIsLoading(false);
  };

  const handleResumeChange = (e, resumeType) => {
    console.log(e.target.files[0]);
    setResumeInfo((prev) => ({
      ...prev,
      [resumeType]: e.target.files[0],
    }));
  };
  return (
    <div className=" w-full min-h-full relative h-auto  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14">
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
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
            <Experience
              experiences={experiences}
              setExperiences={setExperiences}
            />
          </div>

          <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
            <h2 className="text-lg text-[#202124] mb-6 font-bold">Portfolio</h2>
            <div className="mt-4">
              <label className="font-medium">Portfolio link</label>
              <input
                name="portfolio"
                value={resumeInfo.portfolio}
                onChange={(e) =>
                  setResumeInfo((prev) => ({
                    ...prev,
                    ["portfolio"]: e.target.value,
                  }))
                }
                className="block w-2/3 p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              />
            </div>
            <div className="mt-4">
              <label className="font-medium">LinkedIn link</label>
              <input
                name="linkedin"
                value={resumeInfo.linkedin}
                onChange={(e) =>
                  setResumeInfo((prev) => ({
                    ...prev,
                    ["linkedin"]: e.target.value,
                  }))
                }
                className="block w-2/3 p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              />
            </div>
            <div className="mt-4">
              <label className="font-medium">Github link</label>
              <input
                name="github"
                value={resumeInfo.github}
                onChange={(e) =>
                  setResumeInfo((prev) => ({
                    ...prev,
                    ["github"]: e.target.value,
                  }))
                }
                className="block w-2/3 p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              />
            </div>
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
        </>
      )}
    </div>
  );
}

export default MyResume;
