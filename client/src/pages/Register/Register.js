import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";

const Register = () => {
  const [identity, setIdentity] = useState("candidate");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement register logic here
    console.log("Register submitted!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black bg-opacity-40  px-2 sm:px-10">
      <motion.form
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
        className="bg-white w-full md:max-w-xl p-8 rounded-lg shadow-md z-50"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setIdentity("candidate")}
            className={`w-full ${
              identity === "candidate"
                ? "bg-green-500 text-white"
                : "bg-green-200 text-green-400"
            }   flex items-center justify-center gap-2 overflow-hidden   py-4 rounded-lg transition duration-300 ease-in-out`}
          >
            <BsPerson size={20} />
            Candidate
          </button>
          <button
            onClick={() => setIdentity("employer")}
            className={`w-full ${
              identity === "employer"
                ? "bg-green-500 text-white"
                : "bg-green-200 text-green-400"
            }   flex items-center justify-center gap-2 overflow-hidden  py-4 rounded-lg transition duration-300 ease-in-out`}
          >
            <BiShoppingBag size={20} />
            Employer
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email <span className=" text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
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
            className="w-full px-4 py-4 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Confirm Password <span className=" text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-4 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg transition duration-300 ease-in-out"
        >
          Register
        </button>
        <p className=" text-center mt-4">
          Already have an account?{" "}
          <span className=" font-bold text-blue-500">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
