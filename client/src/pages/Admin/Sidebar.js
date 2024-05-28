import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import NavLink from "./NavLink";
import dp from "../../assets/user.png";
import { useAdminContext } from "../../context/adminContext";
import { PiPackage } from "react-icons/pi";

const Sidebar = ({ onClose, isSidebarOpen, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setAdminToken, adminData } = useAdminContext();

  useEffect(() => {
    navigate("/admin/dashboard");
  }, []);

  const adminLogoutHandler = () => {
    sessionStorage.removeItem("adminToken");
    setAdminToken("");
    navigate("/admin");
  };

  const handleClose = (e) => {
    if (!isMobile) return;
    // Prevent closing the sidebar if clicked inside it
    if (e.target.classList.contains("sidebar-content")) return;
    onClose();
  };
  return (
    <div
      onClick={handleClose}
      className={`${
        isSidebarOpen
          ? "translate-x-0 w-full bg-black bg-opacity-20"
          : "-translate-x-full w-auto"
      } transform transition-transform duration-300 md:static fixed md:translate-x-0 top-0 left-0 bottom-0 z-10`}
    >
      <div className="bg-gray-800 text-white h-screen w-20 md:w-52 lg:w-80  flex flex-col items-center pt-14 md:pt-0 sidebar-content">
        <div className=" p-4 flex gap-1  w-full mb-3">
          <div className=" border-2 h-8 rounded-full aspect-square mx-auto md:mx-0 overflow-hidden p-1 cursor-pointer">
            <img className="w-full h-full" src={dp} />
          </div>
          <h2 className=" text-xl hidden md:block  font-bold cursor-pointer">
            {adminData.name}
          </h2>
        </div>
        <nav className="flex w-full flex-col items-center justify-center gap-3">
          <NavLink
            to="/admin/dashboard"
            icon={<RxDashboard size={25} />}
            label="Dashboard"
            location={location}
          />
          <NavLink
            to="/admin/candidates"
            icon={<BsPerson size={25} />}
            label="Candidates"
            location={location}
          />
          <NavLink
            to="/admin/employers"
            icon={<BiShoppingBag size={25} />}
            label="Employers"
            location={location}
          />
          <NavLink
            to="/admin/jobs"
            icon={<GrCertificate size={25} />}
            label="Jobs"
            location={location}
          />

          {adminData?.isSuperAdmin && (
            <NavLink
              to="/admin/admins"
              icon={<RiAdminFill size={25} />}
              label="Admins"
              location={location}
            />
          )}

          {adminData?.isSuperAdmin && (
            <NavLink
              to="/admin/packages"
              icon={<PiPackage size={25} />}
              label="Packages"
              location={location}
            />
          )}

          <button
            onClick={adminLogoutHandler}
            className={`w-full p-2 px-4 hover:bg-orange-700 transition duration-300 flex flex-col  md:flex-row items-center justify-center sm:justify-normal gap-1 
            `}
          >
            <RiLogoutCircleLine size={25} />
            <p
              className={` text-[8px] md:text-sm text-start
           "text-white" 
        `}
            >
              Logout
            </p>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
