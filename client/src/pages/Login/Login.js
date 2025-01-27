import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { login } from "../../api/employer/axios";
import Loader from "../../components/Utility/Loader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Nav from "../../components/Nav/Nav";
import { useUserContext } from "../../context/userContext";

const Login = ({ jobApply, setIsRegistered, setIsLoggedIn }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const { setUser, setToken, setPackages } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      const res = await login(phone, password);
      console.log(res); // Handle success response
      if (res?.data?.success) {
        // Store token and user type in sessionStorage
        sessionStorage.setItem("token", res?.data?.token);
        sessionStorage.setItem(
          "userType",
          res?.data?.isEmployer ? "employer" : "candidate"
        );
        const userData = JSON.stringify(res?.data?.user);
        sessionStorage.setItem("user", userData);
        // localStorage.setItem("user", userData);

        // Redirect based on user type
        if (res?.data?.isEmployer) {
          setUser(res?.data?.user);
          setPackages(res?.data?.packages);
          setToken(res?.data?.token);
          jobApply && setIsLoggedIn(true);
          if (!jobApply) navigate("/employer/dashboard");
        } else {
          setUser(res?.data?.user);
          setToken(res?.data?.token);
          setPackages(res?.data?.packages);
          jobApply && setIsLoggedIn(true);
          if (!jobApply) navigate("/candidate/dashboard");
        }
      } else {
        setError(res?.data?.message);
      }
    } catch (error) {
      console.error(error); // Handle error response
      setError("Invalid phone or password.");
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userType = sessionStorage.getItem("userType");
    if (token && userType) {
      navigate(`/${userType}`);
    }
  }, []);

  return (
    <div
      className={`${
        jobApply
          ? " fixed inset-0 w-screen h-screen bg-black bg-opacity-50"
          : " w-full h-full"
      } flex justify-center items-center  px-2 sm:px-10 pt-10 `}
    >
      {loading && <Loader />}
      {!jobApply && <Nav bgColor={" fixed top-0"} />}
      <motion.form
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
        className=" w-full md:max-w-xl bg-white p-8 py-10 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Login to JobPortal</h2>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone <span className=" text-red-500">*</span>
          </label>
          <PhoneInput
            required
            inputStyle={{
              backgroundColor: "transparent",
              border: "none",
              height: "100%",
              width: "100%",
            }}
            buttonStyle={{ border: "none" }}
            country={"in"}
            value={phone}
            onChange={setPhone}
            className="w-full px-4 py-4 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password <span className=" text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-4 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <p className=" text-xs text-end mb-6">Forgot Password?</p>
        <button
          type="submit"
          className="w-full bg-[#6ad61d] hover:bg-blue-600 text-white py-4 rounded-lg transition duration-300 ease-in-out"
          disabled={loading} // Disable button when loading
        >
          Login
        </button>
        <p className=" text-center mt-4">
          Don't have an account?{" "}
          <span className=" font-bold text-blue-500">
            {!jobApply ? (
              <Link to={"/register"}>Register</Link>
            ) : (
              <span
                className=" cursor-pointer"
                onClick={() => {
                  setIsRegistered(false);
                  setIsLoggedIn(true);
                }}
              >
                Register
              </span>
            )}
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
