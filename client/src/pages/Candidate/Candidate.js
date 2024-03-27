import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Candidate() {
  return (
    <div className=" pt-32">
      <NavLink to={"/candidate/dashboard"}>Go to dashboard</NavLink>
      <Outlet />
    </div>
  );
}
