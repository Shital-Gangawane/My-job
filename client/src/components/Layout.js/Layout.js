import React from "react";
import Nav from "../Nav/Nav";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      {!location.pathname.startsWith("/admin") && <Nav />}{" "}
      {/* Render Nav component if the path doesn't start with "/admin/" */}
      <Outlet />
    </div>
  );
}
