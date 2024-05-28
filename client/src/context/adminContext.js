import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchAllAdmins, fetchPostedJobs } from "../api/admin/axios";

const adminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [adminData, setAdminData] = useState("");
  const [adminToken, setAdminToken] = useState("");
  const [jobs, setJobs] = useState([]);
  const [allAdmins, setAllAdmins] = useState([]);
  const [allEmployers, setAllEmployers] = useState([]);
  const [allCandidates, setAllCandidates] = useState([]);
  const [packages, setPackages] = useState([]);

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
        if (response?.data?.admin?.isSuperAdmin) {
          setAllAdmins(response?.data?.allAdmins);
          setPackages(response?.data?.allPackages);
        }
        setAdminData(response?.data?.admin);
        setAllEmployers(response?.data?.allEmployers);
        setAllCandidates(response?.data?.allCandidates);
        console.log(response);
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
  }, [adminToken, setAllEmployers, setAllCandidates]);

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
        allEmployers,
        setAllEmployers,
        allCandidates,
        setAllCandidates,
        packages,
        setPackages,
      }}
    >
      {children}
    </adminContext.Provider>
  );
}

export const useAdminContext = () => {
  return useContext(adminContext);
};
