import React, { useState, useEffect } from "react";
import Navcontents from "../../components/Nav/Navcontents";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Slidebar from "./DashboardData/Slidebar";
import Userdashboard from "./DashboardData/Userdashboard";
import Profile from "./DashboardData/Profile";
import Myjobs from "./DashboardData/Myjobs";
import Submitjobs from "./DashboardData/Submitjobs";
import Applicantsjobs from "./DashboardData/Applicantsjobs";
import Shortlistcandidate from "./DashboardData/Shortlistcandidate";
import Candidatealerts from "./DashboardData/Candidatealerts";
import Packages from "./DashboardData/Packages";
import Messages from "./DashboardData/Messages";
import Meeting from "./DashboardData/Meeting";
import Changepassword from "./DashboardData/Changepassword";
import Deleteprofile from "./DashboardData/Deleteprofile";
import Logout from "./DashboardData/Logout";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaUserTieSolid } from "react-icons/lia";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { GoPencil } from "react-icons/go";
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
import { useUserContext } from "../../context/userContext";
import Footer from "./DashboardData/Footer";

const buttons = [
  {
    name: "User Dashboard",
    icon: <MdOutlineSpaceDashboard size={25} />,
    path: "", // Example path for User Dashboard
  },
  {
    name: "Profile",
    icon: <LiaUserTieSolid size={25} />,
    path: "/profile", // Example path for Profile
  },
  {
    name: "My Jobs",
    icon: <HiOutlineBriefcase size={25} />,
    path: "/myjobs", // Example path for My Jobs
  },
  {
    name: "Submit Jobs",
    icon: <GoPencil size={25} />,
    path: "/submitjobs", // Example path for Submit Jobs
  },
  {
    name: "Application Jobs",
    icon: <HiOutlineSpeakerphone size={25} />,
    path: "/applicantjobs", // Example path for Application Jobs
  },
  {
    name: "Shortlist Candidates",
    icon: <IoBookmarkOutline size={25} />,
    path: "/shortlistcandidates", // Example path for Shortlist Candidates
  },
  // {
  //   name: "Candidate Alerts",
  //   icon: <AiOutlineAlert size={25} />,
  //   path: "candidatealerts", // Example path for Candidate Alerts
  // },
  {
    name: "Packages",
    icon: <PiPackage size={25} />,
    path: "/packages", // Example path for Packages
  },
  {
    name: "Messages",
    icon: <PiWechatLogoLight size={25} />,
    path: "/messages", // Example path for Messages
  },
  {
    name: "Meetings",
    icon: <GiVideoConference size={25} />,
    path: "/meetings", // Example path for Meetings
  },
  {
    name: "Change Password",
    icon: <RiLockPasswordLine size={25} />,
    path: "/changepassword", // Example path for Change Password
  },
  {
    name: "Logout",
    icon: <TfiPowerOff size={25} />,
    path: "/logout", // Example path for Logout
  },
];

const Empdashboard = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { user } = useUserContext();

  // Function to check if the screen is mobile
  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 1039); //Adjust the breakpoint as needed
  };

  // Run the check on component mount and on window resize
  useEffect(() => {
    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);
    return () => {
      window.removeEventListener("resize", checkMobileScreen);
    };
  }, []);

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
          data={user}
          buttons={buttons}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      )}
      {isMobile && (
        <div className="bg-[#f5f7fc]">
          <div
            onClick={toggleSidebar}
            className="bg-[#f5f7fc] py-7 px-4 inline-flex  items-center gap-1 text-[#6ad61d] cursor-pointer"
          >
            <IoMenuSharp size={20} />
            <p>Show Sidebar</p>
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
                  data={user}
                  buttons={buttons}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  onClose={toggleSidebar}
                  isOpen={isSideBarOpen}
                  isMobile
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      <div className=" w-full h-full bg-[#f5f7fc] overflow-y-auto">
        {/* <RenderComponent index={isSelected} /> */}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Empdashboard;
