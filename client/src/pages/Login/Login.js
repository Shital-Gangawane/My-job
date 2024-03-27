import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log("Login submitted!");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black bg-opacity-40 px-2 sm:px-10 pt-10 ">
      <motion.form
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
        className=" w-full md:max-w-xl bg-white p-8 py-10 rounded-lg shadow-md z-50"
      >
        <h2 className="text-2xl font-bold mb-4">Login to JobPortal</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email <span className=" text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
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
            className="w-full px-4 py-4 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <p className=" text-xs text-end mb-6">Forgot Password?</p>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg transition duration-300 ease-in-out"
        >
          Login
        </button>
        <p className=" text-center mt-4">
          Dont have an account?{" "}
          <span className=" font-bold text-blue-500">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
