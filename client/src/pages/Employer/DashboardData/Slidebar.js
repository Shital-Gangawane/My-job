import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Slidebar({ buttons, isSelected, setIsSelected }) {
  const navigate = useNavigate(); // Access the navigate function from React Router DOM

  const handleButtonClick = (index, path) => {
    setIsSelected(index); // Set the selected index
    navigate(`/employer/${path}`); // Navigate to the specified path
  };

  return (
    <motion.div
<<<<<<< HEAD
      initial={{ x: -300 }} // Off-screen to the left
      animate={{ x: 0 }} // Sliding animation to the left edge of the screen
      className="h-full   lg:h-auto lg:flex absolute left-0 top-0 lg:left-0 lg:top-0 lg:relative z-50 lg:z-0 shadow-lg"
=======
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="h-full lg:h-auto lg:flex absolute left-0 top-0 lg:left-0 lg:top-0 lg:relative z-50 lg:z-0 shadow-lg"
>>>>>>> fa409242698a4f1a712c0949421441beef547860
    >
      <div className="h-full overflow-y-auto flex flex-col pt-10 bg-white w-96 items-center">
        <div className="flex gap-3 mb-3 mt-4">
          <FaRegUserCircle size={40} />
          <span className="gap-2 mt-2 font-bold">User Name</span>{" "}
        </div>
        <div>
          {" "}
          <button className="w-full py-2 px-2 ms-auto bg-[#6ad61d] text-white rounded-lg transition duration-300 ease-in-out">
            View Profile
          </button>
        </div>

        <div className="w-full flex flex-1 mt-5 px-8 py-2 border-t flex-col gap-1">
          {buttons.map((button, index) => {
            return (
              <button
                key={index}
                type="button"
                onClick={() => setIsSelected(index)} // Pass the index and path to handleButtonClick function
                className={`w-full py-3 ps-4 text-left ${
                  isSelected === index
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