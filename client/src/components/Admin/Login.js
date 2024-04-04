import React, { useState } from "react";
import Register from "./Register";
import { loginAdmin } from "../../api/admin/axios";
import { useAdminContext } from "../../context/adminContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  const { setAdminToken, setAdminData } = useAdminContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCandidateLoggedIn = localStorage.getItem("candidateToken");
    if (isCandidateLoggedIn) {
      return;
    }

    const res = await loginAdmin(email, password);
    console.log(res);
    if (res?.data?.success) {
      sessionStorage.setItem("adminToken", res?.data?.token);
      sessionStorage.setItem(
        "adminData",
        JSON.stringify(res?.data?.existingAdmin)
      );
      setAdminToken(res?.data?.token);
      setAdminData(res?.data?.existingAdmin);
    }
  };

  return (
    <>
      {!isRegisterOn ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Admin Login
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>
              <p className=" text-center mt-4">
                Dont have an account?{" "}
                <span
                  onClick={() => setIsRegisterOn(true)}
                  className=" font-bold text-blue-500 cursor-pointer"
                >
                  Register
                </span>
              </p>
            </form>
          </div>
        </div>
      ) : (
        <Register setIsRegisterOn={setIsRegisterOn} />
      )}
    </>
  );
};

export default Login;
