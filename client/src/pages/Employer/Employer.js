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
<<<<<<< HEAD
      <Navcontents bgColor="bg-white fixed shadow-md" />
      <div className=" ">
=======
      <Nav bgColor="bg-white fixed shadow-md" employer />
      <div className="">
>>>>>>> fa409242698a4f1a712c0949421441beef547860
        <Outlet />
      </div>
    </div>
  );
}