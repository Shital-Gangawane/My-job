import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUser } from "../api/employer/axios";

const userContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState("");
  const [postJobData, setPostJobData] = useState(null);
  const [packages, setPackages] = useState([]);

  const jwt = sessionStorage.getItem("token");
  const data = sessionStorage.getItem("user");
  useEffect(() => {
    if (jwt) {
      setToken(jwt);

      if (data) setUser(JSON.parse(data));
      // fetchData();
    }
  }, [token]);

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        postJobData,
        setPostJobData,
        packages,
        setPackages,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(userContext);
};
