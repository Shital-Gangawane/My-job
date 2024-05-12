import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUser } from "../api/employer/axios";

const userContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState("");

  const jwt = sessionStorage.getItem("token");
  useEffect(() => {
    if (jwt) {
      setToken(jwt);
      const data = sessionStorage.getItem("user");
      if (data) setUser(JSON.parse(data));
      // fetchData();
    }
  }, [token]);

  return (
    <userContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </userContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(userContext);
};
