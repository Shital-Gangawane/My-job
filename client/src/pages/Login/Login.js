import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { login } from "../../api/employer/axios";
import Loader from "../../components/Utility/Loader";
import Nav from "../../components/Nav/Nav";
import Navcontents from "../../components/Nav/Navcontents";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      const res = await login(email, password);
      console.log(res); // Handle success response
      if (res?.data?.success) {
        if (res?.data?.isEmployer) {
          navigate("/employer");
        } else {
          navigate("/candidate");
        }
      } else {
        setError(res?.data?.message);
      }
    } catch (error) {
      console.error(error); // Handle error response
      setError("Invalid email or password.");
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <div className=" w-full h-full flex justify-center items-center  px-2 sm:px-10 pt-10 ">
      {loading && <Loader />}
      <Navcontents bgColor={" fixed top-0"} />
      <motion.form
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
        className=" w-full md:max-w-xl bg-white p-8 py-10 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Login to JobPortal</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email <span className=" text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-4 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            required
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
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;