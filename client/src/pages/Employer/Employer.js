import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "./DashboardData/Footer";

export default function Employer() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/employer") navigate("/employer/dashboard");
  }, [location.pathname]);
  return (
    <div className=" w-full h-auto bg-white">
      <Nav bgColor="bg-white fixed shadow-md" employer />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
