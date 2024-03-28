import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed w-full p-3 z-20 border-b border-b-purple-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16  ">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white text-3xl">
              Job<span className=" text-green-600 font-bold">Portal</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to={"/"}
                  className="text-gray-300 hover:scale-110 transition-all hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:scale-110 transition-all hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find Jobs
                </Link>
                <Link
                  to={"/candidate"}
                  className="text-gray-300 hover:scale-110 transition-all hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Candidates
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:scale-110 transition-all hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Employers
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="ml-4 flex items-center md:ml-6">
              <motion.button
                onClick={() => navigate("/login")}
                whileHover={{ border: "2px gray solid", scale: 1.1 }}
                className=" border-2 border-gray-300 hover:border-gray-300  text-white px-6 py-3 rounded-full text-sm font-medium"
              >
                Login
              </motion.button>
              {/* <button className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Register
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
