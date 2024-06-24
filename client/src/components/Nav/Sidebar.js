import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigationLinks } from "./navData";
import { GoPerson } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import userDp from "../../assets/user-dp.png";
import { useUserContext } from "../../context/userContext";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";

const Sidebar = ({ isOpen, onClose, isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, user } = useUserContext();
  const handleClose = (e) => {
    // Prevent closing the sidebar if clicked inside it
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className={`fixed inset-0 z-40 flex lg:relative lg:z-auto ${
        isMobile ? !isOpen && "hidden" : " w-1/2 max-w-96 h-full"
      }`}
      onClick={isMobile ? handleClose : null} // Close sidebar when clicking outside
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: isOpen ? 0 : "-100%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div className="absolute flex flex-col items-center top-0 left-0 me-10 w-full max-w-72 h-full bg-zinc-800 shadow sidebar-content">
        <div className="flex w-full justify-end items-center p-4 gap-2 bg-white">
          {!token && !sessionStorage.getItem("userType") ? (
            <GoPerson
              onClick={() => navigate("/login")}
              size={20}
              className="text-zinc-700 xl:hover:text-blue-700 hover:text-[#6ad61d]"
            />
          ) : (
            <img
              onClick={() => {
                navigate(
                  `${
                    sessionStorage.getItem("userType") === "candidate"
                      ? "/candidate/dashboard"
                      : "/employer/dashboard"
                  }`
                );
                onClose();
              }}
              className="h-8 w-8 border rounded-full p-1 hover:border-[#6ad61d]"
              src={user?.logoImage ? `${baseUrl}/${user?.logoImage}` : userDp}
              alt="User"
            />
          )}
          <RiCloseLine
            size={26}
            className="text-xl cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col justify-center w-full py-9 px-7 text-sm gap-5">
          {navigationLinks.map((link, index) => (
            <div
              className="flex justify-between items-center text-zinc-400"
              key={index}
            >
              <Link
                onClick={() => onClose()}
                to={
                  link.url === "/employer/dashboard"
                    ? token
                      ? "/employer/dashboard"
                      : "/login"
                    : link.url
                }
                className="block w-full hover:bg-gray-50 hover:text-slate-800 py-2 px-2 rounded-md"
              >
                {link.label}
              </Link>
              <MdArrowForwardIos size={20} />
            </div>
          ))}
        </div>
        <div className="  w-full  text-white p-3 space-y-3">
          <Link
            onClick={() => onClose()}
            to={token ? "/employer/dashboard/submitjobs" : "/login"}
            className="block text-center bg-[#6ad61d] p-3 rounded-lg"
          >
            Post Job
          </Link>
          {!token &&
            !sessionStorage.getItem("userType") &&
            location.pathname !== "/login" && (
              <Link
                to={"/login"}
                className="block text-center bg-red-800 p-3 rounded-lg"
              >
                Login
              </Link>
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
