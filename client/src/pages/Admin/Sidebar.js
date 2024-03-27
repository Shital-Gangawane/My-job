import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import NavLink from "./NavLink";
import { useAdminContext } from "../../context/adminContext";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setAdminToken } = useAdminContext();

  useEffect(() => {
    navigate("/admin/dashboard");
  }, []);

  const adminLogoutHandler = () => {
    sessionStorage.removeItem("adminToken");
    setAdminToken("");
    navigate("/admin");
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-80 flex flex-col items-center">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav className="flex flex-col items-center justify-center">
        <NavLink
          to="/admin/dashboard"
          icon={<RxDashboard size={20} />}
          label="Dashboard"
          location={location}
        />
        <NavLink
          to="/admin/candidates"
          icon={<BsPerson size={20} />}
          label="Candidates"
          location={location}
        />
        <NavLink
          to="/admin/employers"
          icon={<BiShoppingBag size={20} />}
          label="Employers"
          location={location}
        />
        <NavLink
          to="/admin/jobs"
          icon={<BiShoppingBag size={20} />}
          label="Jobs"
          location={location}
        />

        <button onClick={adminLogoutHandler}>Logout</button>
      </nav>
    </div>
  );
};

export default Sidebar;
