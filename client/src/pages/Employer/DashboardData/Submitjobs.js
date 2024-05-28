import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import PostNewJob from "./SubmitJobsComps/PostNewJob";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import { fetchPackages } from "../../../api/employer/axios";
import PackageList from "../../../components/Employer/DashboardData/PackageList";

function Submitjobs() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const { user } = useUserContext();

  const handleButtonClick = () => {
    // setIsButtonVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => prevState === true && !prevState);
  };

  return (
    <div>
      {user?.postJobCredits ? (
        <PostNewJob toggleForm={toggleFormVisibility} />
      ) : (
        <PackageList submitJobs />
      )}
    </div>
  );
}

export default Submitjobs;
