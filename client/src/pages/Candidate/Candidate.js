import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

export default function Candidate() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/candidate") navigate("/candidate/dashboard");
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
