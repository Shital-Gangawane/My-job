import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Navcontents from "../../components/Nav/Navcontents";

export default function Employer() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/employer/dashboard");
  }, []);
  return (
    <div className=" w-full h-auto bg-white">
      <Navcontents bgColor="bg-white fixed shadow-md" />
      <div className=" ">
        <Outlet />
      </div>
    </div>
  );
}