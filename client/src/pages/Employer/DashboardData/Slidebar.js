import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

function Slidebar({ buttons, isSelected, setIsSelected }) {
  return (
    <div className="flex">
      <div className="h-screen overflow-y-auto flex flex-col bg-white w-96 items-center">
        <div className="flex gap-3 mb-3 mt-4">
          <FaRegUserCircle size={40} />
          <span className="gap-2 mt-2 font-bold">User Name</span>{" "}
        </div>
        <div>
          {" "}
          <button className=" w-full py-2 px-2 ms-auto bg-[#6ad61d] text-white rounded-lg transition duration-300 ease-in-out">
            View Profile
          </button>
        </div>

        <div className=" w-full flex flex-1 mt-5 px-8 py-2 border-t flex-col gap-1">
          {buttons.map((button, index) => {
            // w-full  py-3 ps-4 text-gray-400 text-left hover:bg-blue-100 hover:text-[#6ad61d] rounded-lg transition duration-300 ease-in-out
            return (
              <button
                key={index}
                type="submit"
                onClick={() => setIsSelected(index)}
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
        {/* <div className=''>Logout</div> */}
      </div>
    </div>
  );
}

export default Slidebar;
