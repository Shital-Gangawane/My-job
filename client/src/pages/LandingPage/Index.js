import React, { useState, useEffect, useRef, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { citiesInIndia } from "./cityData";
import { Dropdown } from "./Dropdown";
import { IoIosSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import girl from "../../assets/girl.png";
import { searchJobs } from "../../api/candidate/axios";

const LandingPage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(".dropdown")) return;
    setIsDropdownOpen(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(searchText, selectedCity);
    const res = await searchJobs(searchText, selectedCity);
    if (res?.data?.success) {
      const state = {
        jobs: res?.data?.jobs,
        keyword: searchText,
        city: selectedCity,
      };
      setSearchResults(res?.data?.jobs);
      navigate("/job/search-results", { state });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className=" relative h-full flex flex-col justify-center items-center">
      <section className=" relative w-full h-full flex flex-col justify-center items-center">
        <motion.img
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" h-fit absolute -z-20 bottom-0 right-0 opacity-10"
          src={girl}
        />
        <div className="w-full flex justify-center  flex-col items-center px-4 sm:px-10 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-center text-white mb-8"
          >
            Welcome to EmployEase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-gray-200 text-center mb-8"
          >
            Find your dream job or recruit the perfect candidate.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onSubmit={submitHandler}
            className=" w-full lg:w-2/3 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 "
          >
            <div className=" w-full px-4 flex items-center bg-white border border-gray-300 shadow-md">
              <IoIosSearch size={20} />
              <motion.input
                type="text"
                placeholder="Enter job title or keyword"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full  px-4 py-7  focus:outline-none focus:border-blue-500 bg-transparent"
              />
            </div>
            <div className="relative flex flex-col  w-full md:max-w-60  ">
              <div className=" w-full px-4 flex items-center bg-white border border-gray-300 shadow-md">
                <IoLocationSharp size={20} />
                <p
                  className="cursor-pointer w-full  px-4 py-7 text-start text-gray-400  focus:outline-none focus:border-blue-500 "
                  onClick={toggleDropdown}
                >
                  {selectedCity || "Select City"}
                </p>
              </div>

              {isDropdownOpen && (
                <Dropdown
                  options={citiesInIndia}
                  onSelect={handleCitySelect}
                  landingpage
                />
              )}
            </div>
            <motion.button
              type="submit"
              className="bg-blue-500 w-full md:max-w-60  hover:bg-blue-600 text-white px-6 py-7 text-lg md:text-xl shadow-md transition duration-300 ease-in-out transform "
            >
              Search
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
