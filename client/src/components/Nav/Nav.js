import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/projob-logo1.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { navigationLinks } from "./navData";

const Nav = ({ bgColor }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseOver = (index) => {
    setActiveDropdown(index);
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
        location.pathname === "/" ? "" : bgColor
      } w-full lg:py-8 z-50 opacity-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16  ">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-black text-3xl ">
              {/* Employ<span className=" text-green-600 font-bold">Ease</span> */}
              <img className=" h-5 lg:h-14" src={logo} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationLinks.map((link, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.url}
                      className="text-black hover:scale-110 transition-all hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {link.label}{" "}
                      {link.hasDropdown && (
                        <span className="inline-block align-bottom">
                          <RiArrowDropDownLine size={20} />
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
                        className="absolute left-0 mt-2  bg-white border-t-2 whitespace-nowrap border-t-blue-600 rounded-b-md shadow-lg"
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
              <motion.button
                onClick={() => navigate("/login")}
                className="bg-stone-900  md:max-w-60 rounded-full  hover:bg-stone-500 text-white px-10 whitespace-nowrap py-3 text-sm md:text-sm shadow-md transition duration-300 ease-in-out transform "
              >
                Login
              </motion.button>
              {/* <button className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Register
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
