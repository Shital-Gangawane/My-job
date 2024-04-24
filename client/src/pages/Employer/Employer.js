import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

export default function Employer() {
  return (
    <div className=" w-full h-full">
      <Nav bgColor="bg-white fixed" />
      <div className=" pt-24">
        <Outlet />
      </div>
    </div>
  );
}
