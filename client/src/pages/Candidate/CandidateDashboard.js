import React, { useEffect, useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaUserTieSolid } from "react-icons/lia";
import { FiFileText } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineAlert } from "react-icons/ai";
import { PiPackage } from "react-icons/pi";
import { PiWechatLogoLight } from "react-icons/pi";
import { GiVideoConference } from "react-icons/gi";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TfiPowerOff } from "react-icons/tfi";
import { IoMenuSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Slidebar from "./DashboardData/Slidebar";
import Userdashboard from "./DashboardData/Userdashboard";
import Profile from "./DashboardData/Profile";
import MyResume from "./DashboardData/MyResume";
import MyApplied from "./DashboardData/MyApplied";
import ShortlistJobs from "./DashboardData/ShortlistJobs";
import FollowingEmployers from "./DashboardData/FollowingEmployers";
import JobAlerts from "./DashboardData/JobAlerts";
import Messages from "./DashboardData/Messages";
import Meeting from "./DashboardData/Meeting";
import Changepassword from "./DashboardData/Changepassword";
import Deleteprofile from "./DashboardData/Deleteprofile";
import Logout from "../Employer/DashboardData/Logout";
import { useUserContext } from "../../context/userContext";
const buttons = [
  {
    name: "User Dashboard",
    icon: <MdOutlineSpaceDashboard size={25} />,
    path: "dashboard", // Example path for User Dashboard
  },
  {
    name: "Profile",
    icon: <LiaUserTieSolid size={25} />,
    path: "profile", // Example path for Profile
  },
  {
    name: "My Resume",
    icon: <FiFileText size={25} />,
    path: "myresume", // Example path for My Jobs
  },
  {
    name: "My Applied",
    icon: <HiOutlineSpeakerphone size={25} />,
    path: "submitjobs", // Example path for Submit Jobs
  },
  {
    name: "Shortlist Jobs",
    icon: <IoBookmarkOutline size={25} />,
    path: "applicationjobs", // Example path for Application Jobs
  },
  {
    name: "Following Employers",
    icon: <BsPerson size={25} />,
    path: "shortlistcandidates", // Example path for Shortlist Candidates
  },
  {
    name: "Alert Jobs",
    icon: <AiOutlineAlert size={25} />,
    path: "candidatealerts", // Example path for Candidate Alerts
  },
  {
    name: "Messages",
    icon: <PiWechatLogoLight size={25} />,
    path: "messages", // Example path for Messages
  },
  {
    name: "Meetings",
    icon: <GiVideoConference size={25} />,
    path: "meetings", // Example path for Meetings
  },
  {
    name: "Change Password",
    icon: <RiLockPasswordLine size={25} />,
    path: "changepassword", // Example path for Change Password
  },
  {
    name: "Delete Profile",
    icon: <RiDeleteBin5Line size={25} />,
    path: "deleteprofile", // Example path for Delete Profile
  },
  {
    name: "Logout",
    icon: <TfiPowerOff size={25} />,
    path: "logout", // Example path for Logout
  },
];

const CandidateDashboard = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { user } = useUserContext();
  // Function to check if the screen is mobile
  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 1039); // Adjust the breakpoint as needed
  };

  // Run the check on component mount and on window resize
  useEffect(() => {
    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);
    return () => {
      window.removeEventListener("resize", checkMobileScreen);
    };
  }, []);

  const RenderComponent = ({ index }) => {
    switch (index) {
      case 0:
        return <Userdashboard />;
      case 1:
        return <Profile />;
      case 2:
        return <MyResume />;
      case 3:
        return <MyApplied />;
      case 4:
        return <ShortlistJobs />;
      case 5:
        return <FollowingEmployers />;
      case 6:
        return <JobAlerts />;
      case 7:
        return <Messages />;
      case 8:
        return <Meeting />;
      case 9:
        return <Changepassword />;
      case 10:
        return <Deleteprofile />;
      case 11:
        return <Logout />;
      default:
        return null;
    }
  };

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div
      className={`flex ${
        isMobile && "flex-col"
      } h-screen w-screen overflow-hidden pt-16 xl:pt-28`}
    >
      {!isMobile && (
        <Slidebar
          buttons={buttons}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          data={user}
        />
      )}
      {isMobile && (
        <div className="bg-[#f5f7fc]">
          <div
            onClick={toggleSidebar}
            className="bg-[#f5f7fc] py-7 px-4 inline-flex items-center gap-1 text-[#6ad61d] cursor-pointer"
          >
            <IoMenuSharp size={20} />
            <p className="inline">Show Sidebar</p>
          </div>
          <AnimatePresence>
            {isSideBarOpen && (
              <motion.div
                initial={{ x: -300 }} // Off-screen to the left
                animate={{ x: 0 }} // Sliding animation to the left edge of the screen
                exit={{ x: -300 }} // Sliding animation to go off-screen to the left
                transition={{ duration: 0.3 }} // Duration of the animation
                className="sidebar-mobile"
              >
                <Slidebar
                  buttons={buttons}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  onClose={toggleSidebar}
                  isOpen={isSideBarOpen}
                  data={user}
                  isMobile
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      <div className=" w-full h-full bg-[#f5f7fc] overflow-y-auto">
        <RenderComponent index={isSelected} />
      </div>
    </div>
  );
};

export default CandidateDashboard;
