import React from "react";
import Nav from "../Nav/Nav";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      {!location.pathname.startsWith("/admin") && <Nav />}{" "}
      <div
        className={` h-screen w-screen ${
          location.pathname.startsWith("/admin") ? "" : "pt-24"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
