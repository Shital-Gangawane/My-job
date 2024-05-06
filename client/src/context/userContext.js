import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUser } from "../api/employer/axios";

const userContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const jwt = sessionStorage.getItem("token");

    if (jwt) {
      setToken(token);
      const data = sessionStorage.getItem("user");
      setUser(JSON.parse(data));
      // fetchData();
    }
  }, [token]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const userType = sessionStorage.getItem("userType");
  //     try {
  //       if (userType && user?._id) {
  //         const res = await fetchUser(userType, user?._id);
  //         sessionStorage.setItem("user", JSON.stringify(res?.data?.employer));
  //         setUser(res?.data?.employer);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <userContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </userContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(userContext);
};
