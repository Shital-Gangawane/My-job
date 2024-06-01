import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "./DashboardData/Footer";
import { useUserContext } from "../../context/userContext";

export default function Employer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useUserContext();
  const userType = sessionStorage.getItem("userType");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else if (userType !== "employer") {
      navigate("/candidate/dashboard");
    } else if (location.pathname === "/employer") {
      navigate("/employer/dashboard");
    }
  }, [token, userType, location.pathname, navigate]);

  return (
    <div className="w-full h-auto bg-white">
      <Nav bgColor="bg-white fixed shadow-md" employer />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
