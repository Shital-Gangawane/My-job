import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import userDp from "../../../assets/user-dp.png";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";

function Slidebar({
  buttons,
  isSelected,
  setIsSelected,
  onClose,
  isMobile,
  data,
}) {
  const navigate = useNavigate(); // Access the navigate function from React Router DOM
  const { user } = useUserContext();
  const location = useLocation();
  const handleButtonClick = (index, path) => {
    setIsSelected(index); // Set the selected index
    navigate(`/employer/${path}`); // Navigate to the specified path
  };

  const handleClose = (e) => {
    if (!isMobile) return;
    // Prevent closing the sidebar if clicked inside it
    if (e.target.classList.contains("sidebar-content")) return;
    onClose();
  };

  return (
    <motion.div
      onClick={handleClose}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="w-full lg:w-auto h-full lg:h-auto lg:flex absolute left-0 top-0 bg-gray-800 bg-opacity-20 lg:left-0 lg:top-0 lg:relative z-50 lg:z-0 shadow-lg"
    >
      <div className="h-full overflow-y-auto flex flex-col pt-10 bg-white w-60 md:w-96 items-center sidebar-content">
        <div className="flex gap-3 mb-3 mt-4">
          <img
            className="h-14 cursor-pointer rounded-full p-1 border hover:border-[#6ad61d]"
            src={`${baseUrl}/uploads/${user?.logoImage}` || userDp}
          />
          <span className="gap-2 mt-2 font-bold">
            {user?.name || `User-${data?.phoneNumber}`}
          </span>{" "}
        </div>
        <div>
          <Link to={`/employer-profile/${user?._id}`}>
            <button className="w-full py-2 px-2 ms-auto bg-[#6ad61d] text-white rounded-lg transition duration-300 ease-in-out">
              View Profile
            </button>
          </Link>
        </div>

        <div className="w-full flex flex-1 mt-5 px-8 py-2 border-t flex-col gap-1">
          {buttons.map((button, index) => {
            return (
              <button
                key={index}
                type="button"
                // onClick={() => setIsSelected(index)} // Pass the index and path to handleButtonClick function
                onClick={() => navigate(`/employer/dashboard${button?.path}`)}
                className={`w-full py-3 ps-4 text-left ${
                  location.pathname === `/employer/dashboard${button?.path}`
                    ? "bg-[#6ad61d23] text-[#6ad61d] "
                    : "hover:bg-[#6ad61d23] hover:text-[#6ad61d] text-gray-500 "
                }  rounded-lg text-sm `}
              >
                <div className="  flex gap-3">
                  {button.icon}
                  {button.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Slidebar;
