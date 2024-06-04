import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { navigationLinks } from "./navData";
import { GoPerson } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { useUserContext } from "../../context/userContext";

const Sidebar = ({ isOpen, onClose, isMobile }) => {
  const navigate = useNavigate();
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
          <GoPerson
            onClick={() => navigate("/login")}
            size={20}
            className="text-zinc-700 xl:hover:text-blue-700 hover:text-[#6ad61d]"
          />
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
                to={
                  link.url === "/employer/dashboard"
                    ? token
                      ? "/employer/dashboard"
                      : "/login"
                    : link.url
                }
                className="block hover:bg-gray-200 py-2 px-2 rounded-md"
              >
                {link.label}
              </Link>
              <MdArrowForwardIos size={20} />
            </div>
          ))}
        </div>
        <div className="  w-full  text-white p-3">
          <Link
            to="/post-job"
            className="block text-center bg-[#6ad61d] p-3 rounded-lg"
          >
            Post Job
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
