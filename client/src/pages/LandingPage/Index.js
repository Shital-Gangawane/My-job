import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { citiesInIndia } from "./cityData";
import { Dropdown } from "./Dropdown";
import { IoIosSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { searchJobs } from "../../api/candidate/axios";
import Nav from "../../components/Nav/Nav";
import Carousel from "./Carousel";
import FeaturedJobsCarousel from "./FeaturedJobsCarousel";
import BrowseByCategory from "./BrowseByCategory";

const LandingPage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoginOn, setIsLoginOn] = useState(false);
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
    <div className=" relativ min-h-screen  h-auto flex flex-col justify-center items-center overflow-y-auto">
      <section className=" relative w-full h-auto xl:h-[130%] flex flex-col justify-center bg-contain bg-left items-center section-one">
        {/* <motion.img
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" h-fit absolute -z-20 bottom-0 right-0 opacity-10"
          src={girl}
        /> */}
        <Nav bgColor=" bg-opacity-0 " />
        <div className="w-full h-auto lg:h-screen flex justify-cen flex-col items-center px-4 sm:px-10 py-8  overflow-hidden ">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-medium  text-center text-black mb-4 md:mb-8"
          >
            We find the best jobs for you
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-sm md:text-sm text-gray-800 text-center mb-8"
          >
            Search your career opportunity through 12,0800 jobs
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onSubmit={submitHandler}
            className=" w-full lg:w-2/3 lg:p-3 lg:px-4 rounded-lg lg:rounded-full shadow-xl bg-white border border-gray-100 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-0 "
          >
            <div className=" w-full px-4 flex items-center  ">
              <IoIosSearch size={30} className=" text-gray-400" />
              <motion.input
                type="text"
                placeholder="Enter job title or keyword"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full  px-4 py-6  focus:outline-none focus:border-blue-500 bg-transparent"
              />
            </div>
            <div className="relative flex flex-col  w-full lg:max-w-60 border-t border-b lg:border-l lg:border-t-0 lg:border-b-0  ">
              <div className=" w-full px-4 flex items-center ">
                <IoLocationSharp size={30} className=" text-gray-400" />
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
            <div className=" w-full lg:max-w-60 p-3">
              <motion.button
                type="submit"
                className="bg-stone-900 w-full   rounded-full  hover:bg-stone-500 text-white px-10 whitespace-nowrap py-5 text-sm md:text-sm shadow-md transition duration-300 ease-in-out transform "
              >
                Find Jobs
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
      <Carousel />
      <FeaturedJobsCarousel />
      <BrowseByCategory/>
    </div>
  );
};

export default LandingPage;
