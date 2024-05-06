import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { registerEmployer } from "../../api/employer/axios";
import Loader from "../../components/Utility/Loader";
import Nav from "../../components/Nav/Nav";
import { registerCandidate } from "../../api/candidate/axios";
import Success from "../../components/Register/Success";

const Register = () => {
  const [identity, setIdentity] = useState("candidate");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [isSuccessOn, setIsSuccessOn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    } else {
      setError("");
    }

    setLoading(true); // Set loading to true when submitting

    if (identity === "employer") {
      try {
        const res = await registerEmployer(email, password);
        if (!res?.data?.success) setError(res?.data?.message);
        console.log(res); // Handle success response
      } catch (error) {
        console.error(error); // Handle error response
      } finally {
        setLoading(false); // Set loading to false after request completes
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsSuccessOn(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } else {
      console.log("Candidate Register submitted!");
      // Handle candidate registration
      try {
        const res = await registerCandidate(email, password);
        if (!res?.data?.success) setError(res?.data?.message);
        console.log(res); // Handle success response
      } catch (error) {
        console.error(error); // Handle error response
      } finally {
        setLoading(false); // Set loading to false after request completes
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsSuccessOn(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <div className="h-full w-full relative flex justify-center items-center   px-2 sm:px-10">
      {loading && <Loader />}
      <Nav bgColor={" fixed top-0"} />
      {isSuccessOn ? (
        <Success />
      ) : (
        <motion.form
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-white w-full md:max-w-xl p-8 rounded-lg shadow-md "
        >
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={(e) => {
                setError("");
                setIdentity("candidate");
              }}
              className={`w-full ${
                identity === "candidate"
                  ? "bg-[#6ad61d] text-white"
                  : "bg-[#6ad61d46] text-[#6ad61d]"
              }   flex items-center justify-center gap-2 overflow-hidden py-4 rounded-lg transition duration-300 ease-in-out`}
            >
              <BsPerson size={20} />
              Candidate
            </button>
            <button
              type="button"
              onClick={() => {
                setError("");
                setIdentity("employer");
              }}
              className={`w-full ${
                identity === "employer"
                  ? "bg-[#6ad61d] text-white"
                  : "bg-[#6ad61d46] text-[#6ad61d]"
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password <span className=" text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-4 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <button
            type="submit"
            className="  w-full bg-[#6ad61d] hover:bg-blue-600 text-white py-4 rounded-lg transition duration-300 ease-in-out"
            disabled={loading} // Disable button when loading
          >
            Register Now
          </button>
          <p className=" text-center mt-4">
            Already have an account?{" "}
            <span className=" font-bold text-blue-500">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </motion.form>
      )}
    </div>
  );
};

export default Register;
