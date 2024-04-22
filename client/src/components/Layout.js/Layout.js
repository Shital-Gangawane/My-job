import React from "react";
import Nav from "../Nav/Nav";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      {/* {!location.pathname.startsWith("/admin") && location.pathname !== "/" && (
        <Nav bgColor={"bg-white"} />
      )}{" "} */}
      <div
        className={` h-screen w-screen overflow-x-hidden ${
          location.pathname.startsWith("/admin") ? "" : ""
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
