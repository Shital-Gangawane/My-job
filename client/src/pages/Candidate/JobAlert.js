import React, { useState } from 'react'
import { motion } from "framer-motion";


function JobAlert({ isSidebarVisible, isMobile , onClose , alertoptions, alertInfo,  onChange, onClick}) {

    const [showAlerts, setShowAlerts] = useState(false);

    const toggleAlerts = () => {
    setShowAlerts(!showAlerts);
    };

    const handleBackdropClick = (e) => {
        // Check if the click is on the backdrop; close sidebar if true
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
  return (
    <motion.div
    onClick={isMobile ? handleBackdropClick : null}
    initial={{ x: -300 }}
    animate={{ x: 0 }}
    exit={{ x: -300 }}
    transition={{ type: "spring", stiffness: 200, damping: 25 }}
    className={`fixed inset-0 z-40 flex lg:relative lg:z-auto ${
      isMobile ? !isSidebarVisible && "hidden" : " w-11/12 mt-8 max-w-96 h-full"
    }`}
    style={{
      backgroundColor: isMobile ? "rgba(0, 0, 0, 0.5)" : "transparent",
    }}
  >
     <div className="flex h-auto flex-col gap-8 bg-[#F5F7FC] p-6 py-8 rounded-lg overflow-y-auto mx-auto lg:w-full ">
     
     <div  className=''>
          <label className="font-medium text-lg" htmlFor="city">
            Job Alert
          </label>
         
          <label className="inline-flex items-center float-end cursor-pointer">
             <input type="checkbox" value="" className="sr-only peer"  />
             <div className="relative w-9 h-5 bg-gray-400 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#6ad61d] "></div>
             </label>
        </div>
          <input
            type="text"
            // value={}
            autoComplete="off"
            name="title"
            placeholder="Enter Job Title"
            className="bg-white w-full my-4 p-4 rounded-md capitalize focus:outline-none focus:ring-1 focus:ring-[#6ad61d]"
          />
         
         <label
              htmlFor="jobAlert"
              className="block text-md font-normal text-gray-900"
            >
              Email Frequency
            </label>
            <select
              name="jobAlert"
              value={alertInfo?.jobAlert || ""}
              onChange={onChange}
              onClick={onClick}
              className="block w-full p-5  bg-white border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-white dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            >
              <option value="">None</option>
              {alertoptions.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select> 
          <button
           type='button'
            className=" bg-[#6ad61d] w-full rounded-lg p-4 px-5 text-white"
          >
           Save Job Alert
          </button>
        </div>
    

    </motion.div>
  )
}

export default JobAlert
