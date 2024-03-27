import React from "react";
import AdminContextProvider from "../../context/adminContext";
import Admin from "./Admin";
export default function AdminApp() {
  return (
    <AdminContextProvider>
      <Admin />
    </AdminContextProvider>
  );
}
