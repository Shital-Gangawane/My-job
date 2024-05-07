import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useAdminContext } from "../../context/adminContext";
import Login from "../../components/Admin/Login";
import { IoMenuSharp } from "react-icons/io5";

const Admin = () => {
  const { adminData, adminToken } = useAdminContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Run the check on component mount and on window resize
  useEffect(() => {
    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);
    return () => {
      window.removeEventListener("resize", checkMobileScreen);
    };
  }, []);

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
            className=" md:hidden fixed top-5 left-5 z-20   p-2 rounded-full"
            onClick={toggleSidebar}
          >
            <IoMenuSharp
              color="white"
              size={25}
              className=" active:bg-orange-600"
            />
          </button>

          <Sidebar
            isMobile={isMobile}
            onClose={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />

          <div className="flex-1 md:w-screen overflow-x-auto">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
