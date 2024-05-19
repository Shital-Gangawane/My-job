import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { registerEmployer } from "../../api/employer/axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Loader from "../../components/Utility/Loader";
import Nav from "../../components/Nav/Nav";
import {
  checkIfRegistered,
  registerCandidate,
} from "../../api/candidate/axios";
import Success from "../../components/Register/Success";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";

const Register = () => {
  const [identity, setIdentity] = useState("candidate");
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [isSuccessOn, setIsSuccessOn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved - allowing the user to get OTP
          console.log("Recaptcha verified", response);
        },
      }
    );
  }, []);

  const getOtp = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await checkIfRegistered(phone, identity);
      if (!res?.data?.success) {
        setError(res?.data?.message);
        setLoading(false);
        return;
      }
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+${phone}`,
        appVerifier
      );
      window.confirmationResult = confirmationResult; // This will help in global access for OTP verification
      setIsOtpSent(true);
    } catch (error) {
      setError("Failed to send OTP. Please try again.");
      console.error("OTP Error: ", error);
    }
    setLoading(false);
  };

  const verifyOtp = async () => {
    setLoading(true);
    try {
      const result = await window.confirmationResult.confirm(otp);
      setIsOtpVerified(true);
      // Process further as OTP is verified
    } catch (error) {
      setError("Invalid OTP. Please try again.");
      console.error("Verify OTP Error: ", error);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const registrationFunction =
        identity === "employer" ? registerEmployer : registerCandidate;
      const res = await registrationFunction(phone, password);
      if (res?.data?.success) {
        setIsSuccessOn(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(res?.data?.message);
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Registration Error: ", error);
    }
    setLoading(false);
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
          <div className="flex gap-4 mb-4">
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
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {!isOtpVerified ? (
            <>
              {isOtpSent && <p>OTP has been sent to {phone}</p>}

              <div className="mt-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone number <span className=" text-red-500">*</span>
                </label>
                <PhoneInput
                  required
                  disabled={isOtpSent}
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
              <button
                type="button"
                onClick={getOtp}
                className="  mt-1 bg-[#6ad61d] hover:bg-blue-600 text-white p-4 rounded-lg transition duration-300 ease-in-out"
                disabled={isOtpSent}
              >
                Get OTP
              </button>
              <div id="recaptcha-container"></div>
              <div className="mt-4">
                <input
                  type="otp"
                  id="otp"
                  required
                  value={otp}
                  disabled={!isOtpSent}
                  onChange={(e) => setOtp(e.target.value)}
                  className={`w-full px-4 py-4 rounded-lg border ${
                    isOtpSent
                      ? ""
                      : " bg-opacity-60 border-opacity-30 cursor-not-allowed"
                  } bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500`}
                />
              </div>
              <button
                type="button"
                onClick={verifyOtp}
                className={`mt-1 bg-[#6ad61d] ${
                  isOtpSent
                    ? " hover:bg-blue-600"
                    : "bg-opacity-35 cursor-not-allowed"
                } text-white p-4 rounded-lg transition duration-300 ease-in-out`}
                disabled={!isOtpSent}
              >
                Verify OTP
              </button>
            </>
          ) : (
            <>
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
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700"
                >
                  Confirm Password <span className=" text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-4 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="  w-full bg-[#6ad61d] hover:bg-blue-600 text-white py-4 rounded-lg transition duration-300 ease-in-out"
                disabled={loading} // Disable button when loading
              >
                Register Now
              </button>
            </>
          )}

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
