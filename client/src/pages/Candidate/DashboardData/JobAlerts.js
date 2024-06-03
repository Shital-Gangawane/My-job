import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";

export default function JobAlerts() {
  const [jobAlerts, setJobAlerts] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    if (user && user.jobAlert) {
      setJobAlerts(user?.jobAlert);
    }
  }, [user]);

  return (
    <div className="w-full h-auto lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className="text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Job Alerts
      </h1>
      <div className="w-full bg-white rounded-lg shadow-lg p-7 pb-14">
        <div className="flex flex-col lg:flex-row gap-3 lg:justify-between">
          <div className="bg-[#f0f5f7] rounded-lg ps-4 flex items-center gap-2">
            <IoIosSearch color="gray" size={20} />
            <input
              className="bg-[#f0f5f7] rounded-lg p-2 focus:outline-none"
              placeholder="Search ..."
            />
          </div>
          <div>
            <label>Sort by:</label>
            <select className="bg-[#f0f5f7] rounded-lg p-3 px-4 text-start">
              <option>Default</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
        <div className="p-4 rounded-lg mt-7">
          {jobAlerts.length ? (
            jobAlerts.map((alert, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg mb-4 shadow-md flex flex-col lg:flex-row justify-between items-start lg:items-center"
              >
                <div className="flex-1 mb-4 lg:mb-0">
                  <h2 className="text-xl font-bold mb-2">{alert.title}</h2>
                  <p className="text-gray-700">
                    <strong>Keyword:</strong> {alert.keyword}
                  </p>
                  <p className="text-gray-700">
                    <strong>Experience:</strong> {alert.experience} years
                  </p>
                </div>
                <div className="flex-1 mb-4 lg:mb-0">
                  <p className="text-gray-700">
                    <strong>Frequency:</strong> {alert.frequency}
                  </p>
                  <p className="text-gray-700">
                    <strong>Location:</strong> {alert.jobLocation}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">
                    <strong>Salary:</strong> ₹{alert.minSalary} - ₹
                    {alert.maxSalary}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm">No job alerts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
