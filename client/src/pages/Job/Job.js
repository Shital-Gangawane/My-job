import React from "react";
import { Outlet } from "react-router-dom";
import JobContextProvider from "../../context/jobContext";

export default function Job() {
  return (
    <JobContextProvider>
      <Outlet />
    </JobContextProvider>
  );
}
