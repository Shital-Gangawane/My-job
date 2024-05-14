import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/projob-logo1.png";
import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { TfiBell } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { navigationLinks } from "./navData";
import userDp from "../../assets/user-dp.png";
import Sidebar from "./Sidebar";
import { useUserContext } from "../../context/userContext";

const Nav = ({ bgColor, employer }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, token } = useUserContext();

  const handleMouseOver = (index) => {
    setActiveDropdown(index);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={` ${
        location.pathname === "/" ? ` xl:${bgColor} bg-white` : bgColor
      } w-full xl:py-8 z-50  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-2 ">
        <div className="flex items-center justify-between h-16  ">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-black text-3xl ">
              {/* Employ<span className=" text-green-600 font-bold">Ease</span> */}
              <img
                className=" h-5 xl:h-12 cursor-pointer"
                src={logo}
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
                      }  px-3 py-5 rounded-md text-md`}
                    >
                      {link.label}{" "}
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
                        className={`absolute left-0 mt-2 ${
                          activeDropdown === index ? "block" : "hidden"
                        }  bg-white border-t-2 whitespace-nowrap ${
                          location.pathname === "/"
                            ? "border-t-blue-600"
                            : "border-t-[#6ad61d]"
                        }  rounded-b-md shadow-lg`}
                      >
                        {link.dropdownOptions.map((option, optionIndex) => (
                          <Link
                            key={optionIndex}
                            to={option.url}
                            className="block px-8 py-2 text-sm text-gray-700 hover:bg-blue-100 z-40"
                          >
                            {option.label}
                          </Link>
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
              {user && token ? (
                <div className=" hidden xl:flex items-center gap-4">
                  <div className=" flex items-center cursor-pointer hover:text-[#6ad61d] gap-3">
                    <img
                      className=" h-12"
                      src={user?.logo ? user?.logo : userDp}
                    />
                    <p>{user?.email?.split("@")[0]}</p>
                    <IoIosArrowDown className=" inline-block" />
                  </div>
                  <button className="bg-[#6ad61d] text-white text-sm py-3 px-7 rounded-lg">
                    Job Post
                  </button>
                </div>
              ) : (
                <motion.button
                  onClick={() => navigate("/login")}
                  className="bg-stone-900 hidden xl:block  md:max-w-60 rounded-full  hover:bg-stone-500 text-white px-10 whitespace-nowrap py-3 text-sm md:text-sm shadow-md transition duration-300 ease-in-out transform "
                >
                  Login
                </motion.button>
              )}
              <div className=" flex xl:hidden gap-4 pe-2 md:pe-10 items-center">
                <GoPerson
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
              {/* {employer && (
                <button className="ml-4 bg-[#6ad61d] hover:bg-blue-600 text-white px-7 py-3 rounded-md text-sm font-medium">
                  Job Post
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </motion.nav>
  );
};

export default Nav;
