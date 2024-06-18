import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "./DashboardData/Footer";
import { useUserContext } from "../../context/userContext";

export default function Employer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, user } = useUserContext();
  const userType = sessionStorage.getItem("userType");

  useEffect(() => {
    if (!token && !userType) {
      navigate("/login");
    } else if (userType !== "employer") {
      navigate("/candidate/dashboard");
    }

    if (location.pathname === "/employer") {
      navigate("/employer/dashboard");
    }
  }, [user, location.pathname]);

  return (
    <div className="w-full h-auto bg-white">
      <Nav bgColor="bg-white fixed shadow-md" employer />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
