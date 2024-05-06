import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";

function Logout() {
  const navigate = useNavigate();
  const { setToken, setUser } = useUserContext();

  useEffect(() => {
    sessionStorage.removeItem("userType");
    sessionStorage.removeItem("token");
    setToken("");
    setUser("");
    navigate("/login");
  }, []);
  return (
    <div className=" flex items-center justify-center">Logging Out...</div>
  );
}

export default Logout;
