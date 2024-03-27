import React, { createContext, useContext, useEffect, useState } from "react";

const adminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [adminData, setAdminData] = useState("");
  const [adminToken, setAdminToken] = useState("");

  useEffect(() => {
    // Fetch token from sessionStorage
    const token = sessionStorage.getItem("adminToken");
    if (token) {
      setAdminToken(token);
    }
  }, [setAdminToken]);

  return (
    <adminContext.Provider
      value={{ adminData, setAdminData, adminToken, setAdminToken }}
    >
      {children}
    </adminContext.Provider>
  );
}

export const useAdminContext = () => {
  return useContext(adminContext);
};
