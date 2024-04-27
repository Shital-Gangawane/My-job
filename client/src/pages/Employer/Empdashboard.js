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

const buttons = [
  {
    name: "User Dashboard",
    icon: <MdOutlineSpaceDashboard size={25} />,
  },
  {
    name: "Profile",
    icon: <LiaUserTieSolid size={25} />,
  },
  {
    name: "My Jobs",
    icon: <HiOutlineBriefcase size={25} />,
  },
  {
    name: "Submit Jobs",
    icon: <GoPencil size={25} />,
  },
  {
    name: "Application Jobs",
    icon: <HiOutlineSpeakerphone size={25} />,
  },
  {
    name: "Shortlist Candidates",
    icon: <IoBookmarkOutline size={25} />,
  },
  {
    name: "Candidate Alerts",
    icon: <AiOutlineAlert size={25} />,
  },
  {
    name: "Packages",
    icon: <PiPackage size={25} />,
  },
  {
    name: "Messages",
    icon: <PiWechatLogoLight size={25} />,
  },
  {
    name: "Meetings",
    icon: <GiVideoConference size={25} />,
  },
  {
    name: "Change Password",
    icon: <RiLockPasswordLine size={25} />,
  },
  {
    name: "Delete Profile",
    icon: <RiDeleteBin5Line size={25} />,
  },
  {
    name: "Logout",
    icon: <TfiPowerOff size={25} />,
  },
];

const Empdashboard = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

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
        return <Myjobs />;
      case 3:
        return <Submitjobs />;
      case 4:
        return <Applicantsjobs />;
      case 5:
        return <Shortlistcandidate />;
      case 6:
        return <Candidatealerts />;
      case 7:
        return <Packages />;
      case 8:
        return <Messages />;
      case 9:
        return <Meeting />;
      case 10:
        return <Changepassword />;
      case 11:
        return <Deleteprofile />;
      case 12:
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
      } h-screen w-screen overflow-hidden pt-16 lg:pt-28`}
    >
      {!isMobile && (
        <Slidebar
          buttons={buttons}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      )}
      {isMobile && (
        <>
          <div
            onClick={toggleSidebar}
            className="bg-[#f5f7fc] py-7 px-4 flex items-center gap-1 text-[#6ad61d] cursor-pointer"
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
                  buttons={buttons}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
      <div className=" w-full h-full bg-[#f5f7fc] overflow-y-auto">
        <RenderComponent index={isSelected} />
      </div>
    </div>
  );
};

export default Empdashboard;
