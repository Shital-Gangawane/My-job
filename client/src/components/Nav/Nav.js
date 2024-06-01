import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { TfiBell, TfiPowerOff } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { navigationLinks } from "./navData";
import userDp from "../../assets/user-dp.png";
import Sidebar from "./Sidebar";
import { useUserContext } from "../../context/userContext";
import logo from "../../assets/projob-logo1.png";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
const candidateCardContent = [
  { comp: "Profile", url: "/candidate/dashboard/profile" },
  { comp: "Applied Jobs", url: "/candidate/dashboard/appliedjobs" },
];
const employerCardContent = [
  { comp: "Profile", url: "/employer/dashboard/profile" },
  { comp: "Applications", url: "/employer/dashboard/applicantjobs" },
  { comp: "Jobs", url: "/employer/dashboard/myjobs" },
];

const Nav = ({ bgColor }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHoveringLogin, setIsHoveringLogin] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [employerCard, setEmployerCard] = useState(false);
  const [candidateCard, setCandidateCard] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, token } = useUserContext();
  const userType = sessionStorage.getItem("userType");

  const handleMouseOver = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 1039); // Adjust breakpoint as needed
  };

  useEffect(() => {
    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);
    return () => window.removeEventListener("resize", checkMobileScreen);
  }, []);

  const handleUserDropdownMouseOver = () => {
    if (userType === "employer") {
      setEmployerCard(true);
    } else {
      setCandidateCard(true);
    }
  };

  const handleUserDropdownMouseLeave = () => {
    if (userType === "employer") {
      setEmployerCard(false);
    } else {
      setCandidateCard(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={`${
        location.pathname === "/" ? ` xl:${bgColor} bg-white` : bgColor
      } w-full xl:py-8 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-black text-3xl">
              <img
                className="h-5 xl:h-12 cursor-pointer"
                src={logo}
                alt="Logo"
                onClick={() => navigate("/")}
              />
            </div>
            <div className="hidden xl:block">
              <div className="ml-5 flex items-center space-x-1">
                {navigationLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`relative h-auto ${
                      location.pathname !== "/"
                        ? location.pathname === link.url
                          ? "text-[#6ad61d]"
                          : "text-zinc-700"
                        : "text-zinc-700"
                    }`}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.url}
                      className={`hover:scale-110 transition-all ${
                        location.pathname === "/"
                          ? "hover:text-blue-600"
                          : "hover:text-[#6ad61d]"
                      } px-3 py-5 rounded-md text-md`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <span className="inline-block align-middle font-extralight">
                          <IoIosArrowDown />
                        </span>
                      )}
                    </Link>
                    {link.hasDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={
                          activeDropdown === index
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -10 }
                        }
                        transition={{ duration: 0.3 }}
                        className={`absolute left-0 mt-2 min-w-40 ${
                          activeDropdown === index ? "flex" : "hidden"
                        } bg-white border-t-2 whitespace-nowrap ${
                          location.pathname === "/"
                            ? "border-t-blue-600"
                            : "border-t-[#6ad61d]"
                        } rounded-b-md shadow-lg py-4`}
                        onMouseEnter={() => handleMouseOver(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.dropdownOptions.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className="flex gap-4 px-8 py-2 text-gray-700 z-40"
                          >
                            <div>
                              <h2 className="font-medium mb-4">
                                {option?.label}
                              </h2>
                              <ul className="space-y-4">
                                {option?.options?.map((el, i) => (
                                  <li
                                    className="text-zinc-500 hover:text-[#6ad61d]"
                                    key={i}
                                  >
                                    <Link to={el?.url}>{el?.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="ml-4 flex items-center md:ml-6">
              {token ? (
                <div className="hidden xl:flex items-center gap-4">
                  <div
                    onMouseEnter={handleUserDropdownMouseOver}
                    onMouseLeave={handleUserDropdownMouseLeave}
                    onClick={() => navigate(`/${userType}/dashboard`)}
                    className="flex items-center cursor-pointer hover:text-[#6ad61d] gap-3 relative"
                  >
                    <img
                      className="h-12 w-12 border rounded-full p-1 hover:border-[#6ad61d]"
                      src={
                        user?.logoImage
                          ? `${baseUrl}/uploads/${user?.logoImage}`
                          : userDp
                      }
                      alt="User"
                    />
                    <p>
                      {user?.name?.split(" ")[0] || user?.email?.split("@")[0]}
                    </p>
                    <IoIosArrowDown className="inline-block" />
                  </div>
                  {candidateCard && (
                    <div
                      className="absolute -bottom-10  space-y-2"
                      onMouseEnter={() => setCandidateCard(true)}
                      onMouseLeave={() => setCandidateCard(false)}
                    >
                      <ul className="bg-white p-2 z-50 rounded-md shadow-md">
                        {candidateCardContent.map((content, i) => (
                          <li
                            className=" hover:text-green-400 px-4 py-2"
                            key={i}
                          >
                            <Link to={content.url}>{content.comp}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {employerCard && (
                    <div
                      className="absolute -bottom-16  space-y-2"
                      onMouseEnter={() => setEmployerCard(true)}
                      onMouseLeave={() => setEmployerCard(false)}
                    >
                      <ul className="bg-white p-2 z-50 rounded-md shadow-md">
                        {employerCardContent.map((content, i) => (
                          <li
                            className=" hover:text-green-400 px-4 py-2"
                            key={i}
                          >
                            <Link to={content.url}>{content.comp}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {userType === "employer" && (
                    <Link to="/employer/dashboard/submitjobs">
                      <button className="bg-[#6ad61d] text-white text-sm py-3 px-7 hover:bg-[#6ad61db7] rounded-lg">
                        Job Post
                      </button>
                    </Link>
                  )}
                </div>
              ) : (
                <motion.button
                  onClick={() => navigate("/login")}
                  onMouseOver={() => setIsHoveringLogin(true)}
                  onMouseLeave={() => setIsHoveringLogin(false)}
                  className="bg-red-600 hidden xl:block relative md:max-w-60 rounded-full hover:bg-stone-500 text-white px-10 whitespace-nowrap py-3 text-sm md:text-sm shadow-md transition duration-300 ease-in-out transform"
                >
                  Login
                  {isHoveringLogin && (
                    <ul className="absolute top-10 left-0 w-36 border-t-[#6ad61d] border-2 bg-white space-y-2 text-black rounded-md text-center mx-auto">
                      <li
                        onClick={() => navigate("/login")}
                        className="hover:bg-gray-100 hover:text-green-500 p-3"
                      >
                        Employer
                      </li>
                      <li
                        onClick={() => navigate("/login")}
                        className="hover:bg-gray-100 hover:text-green-500 p-3"
                      >
                        Candidate
                      </li>
                    </ul>
                  )}
                </motion.button>
              )}
              <div className="flex xl:hidden gap-4 pe-2 md:pe-10 items-center">
                <GoPerson
                  onClick={() => navigate("/login")}
                  size={27}
                  className="text-zinc-700 xl:hover:text-blue-700 hover:text-[#6ad61d]"
                />
                <TfiBell
                  size={23}
                  className="text-zinc-700 xl:hover:text-blue-700 hover:text-[#6ad61d]"
                />
                <CiMenuFries
                  size={27}
                  className="text-zinc-700 xl:hover:text-blue-700 hover:text-[#6ad61d]"
                  onClick={toggleSidebar}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        isMobile={isMobile}
      />
    </motion.nav>
  );
};

export default Nav;
