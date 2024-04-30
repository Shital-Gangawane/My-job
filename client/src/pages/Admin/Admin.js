import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useAdminContext } from "../../context/adminContext";
import Login from "../../components/Admin/Login";
import { IoMenuSharp } from "react-icons/io5";

const Admin = () => {
  const { adminData, adminToken } = useAdminContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {!adminToken ? (
        <Login />
      ) : (
        <div className="flex h-full w-full ">
          <button
            className=" md:hidden fixed top-5 left-3 z-20   p-2 rounded-full"
            onClick={toggleSidebar}
          >
            <IoMenuSharp
              color="white"
              size={25}
              className=" active:bg-orange-600"
            />
          </button>
          <div
            className={`${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transform transition-transform duration-300 md:static fixed md:translate-x-0 top-0 left-0 bottom-0 z-10`}
          >
            <Sidebar />
          </div>
          <div className="flex-1 md:w-screen overflow-x-auto">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

<<<<<<< HEAD
export default Admin;
=======
export default Admin;
>>>>>>> fa409242698a4f1a712c0949421441beef547860
