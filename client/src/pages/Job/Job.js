import React from "react";
import { Outlet } from "react-router-dom";
import JobContextProvider from "../../context/jobContext";
import Nav from "../../components/Nav/Nav";

export default function Job() {
  return (
    <JobContextProvider>
      <Nav bgColor="bg-white shadow-md" />
      <Outlet />
    </JobContextProvider>
  );
}
