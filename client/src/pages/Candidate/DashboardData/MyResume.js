import React, { useState, useEffect, useRef } from "react";
import Loader from "../../../components/Utility/Loader";
import { useUserContext } from "../../../context/userContext";
import EditResume from "./MyResume/EditResume";
import { myResume } from "../../../api/candidate/axios";
import Education from "./MyResume/Education/Education";
import Experience from "./MyResume/Experience/Experience";
import Awards from "./MyResume/Awards/Awards";
import { fetchUser } from "../../../api/employer/axios";

function MyResume() {
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const [resumeInfo, setResumeInfo] = useState({
    resume: null,
<<<<<<< HEAD
    portfolio:"",

=======
    portfolio: "",
>>>>>>> 22cb39fe47947ab88222f183182f32265aa6cff8
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
        <Loader />
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

<<<<<<< HEAD
      <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
    <h2 className="text-lg text-[#202124] mb-6 font-bold">Portfolio</h2>
    <div className="mb-5">
          <input
            type="text"
            name="portfolio"
            value={resumeInfo.portfolio || ""}
            onChange={handleResumeChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d] cursor-pointer focus:outline-[#6ad61d] text-gray-900 border text-base  dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          />
        </div>

    </div>
=======
          <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
            <h2 className="text-lg text-[#202124] mb-6 font-bold">Portfolio</h2>
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
>>>>>>> 22cb39fe47947ab88222f183182f32265aa6cff8

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
