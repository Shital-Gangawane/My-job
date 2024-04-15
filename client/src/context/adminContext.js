import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchAllAdmins, fetchPostedJobs } from "../api/admin/axios";

const adminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [adminData, setAdminData] = useState("");
  const [adminToken, setAdminToken] = useState("");
  const [jobs, setJobs] = useState([]);
  const [allAdmins, setAllAdmins] = useState([]);

  useEffect(() => {
    // Fetch token from sessionStorage
    const token = sessionStorage.getItem("adminToken");
    if (token) {
      setAdminToken(token);
      const data = sessionStorage.getItem("adminData");
      setAdminData(JSON.parse(data));
    }

    // Fetch all admins
    const fetchAllAdmin = async () => {
      try {
        const response = await fetchAllAdmins(token); // Assuming fetchAllAdmins is a function to fetch all admins
        setAllAdmins(response?.data?.allAdmins);
      } catch (error) {
        console.error("Error fetching all admins:", error);
      }
    };

    const fetchJobs = async () => {
      if (adminToken) {
        const res = await fetchPostedJobs(adminToken);
        if (res && res.data && res.data.allJobs) {
          setJobs(res.data.allJobs);
        }
      }
    };
    fetchJobs();

    fetchAllAdmin();
  }, [adminToken]);

  return (
    <adminContext.Provider
      value={{
        adminData,
        setAdminData,
        adminToken,
        setAdminToken,
        jobs,
        setJobs,
        allAdmins,
        setAllAdmins,
      }}
    >
      {children}
    </adminContext.Provider>
  );
}

export const useAdminContext = () => {
  return useContext(adminContext);
};
