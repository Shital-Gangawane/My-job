import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useAdminContext } from "../../context/adminContext";
import Login from "../../components/Admin/Login";

export default function Admin() {
  const { adminData, adminToken } = useAdminContext();

  return (
    <>
      {!adminToken ? (
        <Login />
      ) : (
        <div className="flex  h-screen overflow-hidden">
          <Sidebar />
          <Outlet />
        </div>
      )}
    </>
  );
}
