import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchPanel from "./SearchPanel";
import { GiMoneyStack } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import JobContextProvider, { JobContext } from "../../context/jobContext";
import FilterTags from "../../components/Job/FilterTags";
import { IoMenuSharp } from "react-icons/io5";
import JobAlert from "./JobAlert";
import { alertoptions } from "./DashboardData/ProfileComps/SelectOptions";
import { useUserContext } from "../../context/userContext";
import { fetchUser } from "../../api/employer/axios";
import { myJobAlert } from "../../api/candidate/axios";

export default function SearchedJobs() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useUserContext();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {
    keyword,
    city,
    experienceLevel,
    salaryRange,
    searchResults,
    setSearchResults,
    handleKeywordChange,
    handleCityChange,
  } = useContext(JobContext);

  const [alertInfo, setAlertInfo] = useState({
    jobAlert: null,
  });
  const [jobAlert, setJobAlert] = useState({
    title: "",
    frequency: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let formData = {
      jobAlert,
      keyword,
      city,
      experienceLevel,
      salaryRange,
    };

    try {
      const res = await myJobAlert(user?._id, JSON.stringify(formData));
      console.log(res);
      if (res?.data?.success) {
        sessionStorage.setItem("user", JSON.stringify(res?.data?.candidate));
        setUser(res?.data?.candidate);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAlertChange = (e) => {
    const { name, value } = e.target;
    setAlertInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to navigate to job details page
  const handleJobClick = (job) => {
    navigate(
      `/jobs/${encodeURIComponent(
        job.jobTitle.replace(/\s+/g, "-").toLowerCase()
      )}/${job?._id}`
    );
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Format date
  const dateFormatter = (str) => {
    const date = new Date(str);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Effect for initializing or updating data based on location changes
  useEffect(() => {
    if (location?.state?.jobs) {
      setSearchResults(location?.state?.jobs);
      handleKeywordChange(location?.state?.keyword);
      handleCityChange(location?.state?.city);
    }
  }, []);

  // Adjust the UI based on screen size
  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth <= 1039); // Adjust breakpoint as needed
    };
    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);
    return () => window.removeEventListener("resize", checkMobileScreen);
  }, []);

  return (
    <div className="flex flex-col w-screen bg-white h-auto min-h-full overflow-y-auto">
      <div className="bg-[#F5F7FC] h-32 w-full flex items-center justify-center">
        <p className="text-3xl font-medium">Job List</p>
      </div>
      <div className="flex w-full bg-white h-full xl:ps-20 py-2 xl:py-14">
        <SearchPanel
          isSidebarVisible={isSidebarVisible}
          isMobile={isMobile}
          onClose={toggleSidebar}
          onClick={handleSubmit}
          setJobAlert={setJobAlert}
          jobAlert={jobAlert}
          alertoptions={alertoptions}
        />

        <div className="w-full lg:w-2/3 relative bg-white rounded-lg px-10">
          {isLoading && (
            <div className=" absolute w-full h-full z-10 bg-white bg-opacity-60" />
          )}
          <div
            onClick={toggleSidebar}
            className="py-7 xl:hidden inline-flex items-center gap-1 text-[#6ad61d] cursor-pointer"
          >
            <IoMenuSharp size={20} />
            <p>Show Sidebar</p>
          </div>
          <FilterTags />
          <div className="flex flex-col gap-7">
            <p>
              {searchResults?.length
                ? `Showing all ${searchResults?.length} results`
                : "No Jobs Found."}
            </p>
            {searchResults?.map((job) => (
              <div
                className="bg-white p-8 rounded-md border cursor-pointer"
                key={job._id}
                onClick={() => handleJobClick(job)}
              >
                <h2 className="font-medium text-lg hover:text-[#6ad61d] inline">
                  {job.jobTitle}
                </h2>
                <p className=" text-gray-500 text-sm flex">{job.keySkills}</p>
                <div className=" flex gap-10">
                  <p className=" text-gray-500 text-sm flex items-center gap-1">
                    <CiLocationOn />
                    {job.jobLocation}
                  </p>
                  <p className=" text-gray-500 text-sm flex items-center gap-1">
                    <GiMoneyStack />
                    &#8377;{job.minSalary}-&#8377;{job.maxSalary}
                  </p>
                </div>
                <p className=" text-gray-500 text-sm flex items-center gap-1">
                  <CiClock2 />
                  {dateFormatter(job.createdAt)}
                </p>
                <p className=" text-gray-500 text-sm flex">
                  {job.isRemote ? "Remote" : "Onsite"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
