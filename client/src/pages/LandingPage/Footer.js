import React, { useRef } from "react";
import logo from "../../assets/projob-logo1.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

    const scrollToTop = () => {
      navigate('/index#scrollIntoView');
    };

  return (
    <footer className="w-full dark:bg-[#202124]">
  <div className="mx-auto w-full p-4 lg:py-2 md:py-2 sm:py-2">
    <div className="md:flex gap-6 lg:py-14 px-4 md:py-5 sm:py-5">
      <div className="mb-6 md:mb-10 lg:w-1/4 md:w-full md:py-10">
            <img
                className=" h-4 lg:h-10 md:h-16 sm:h-16 cursor-pointer"
                src={logo}
                onClick={() => navigate("/")}
              />
              <h1 className="font-medium text-xl lg:text-xl text-white mt-3">Call us<br/>: +91 88502 31081</h1>
              <p className="leading-5 font-normal text-sm lg:text-sm text-white mt-3 w-auto">Raheja Platinum, off Andheri – Kurla Road, Sag Baug, Marol, Andheri East, Mumbai, Maharashtra 400059
info@projob.co.in</p>
      </div>
      <div className="lg:ps-8 grid lg:grid-cols-4 md:grid-cols-1 md:py-5  sm:py-5 sm:grid-cols-1 mx-auto ">
        <div className=" w-full mx-auto  sm:py-5 md:py-5">
          <h2 className="mb-6 text-sm block font-semibold text-gray-900 uppercase dark:text-white">
            For Candidate
          </h2>
          <ul className="w-full grid grid-col text-white dark:text-white font-normal text-sm">
            
            <li className="mb-4 relative group inline-flex flex-col-2 items-center  gap-3">
            <div className="absolute h-0.5 w-0  bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/job/search-results"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
                Browse Jobs
              </Link>
              </li>
              <li className="mb-4 relative group inline-flex flex-col-2 items-center  gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/candidate"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
                Browse Candidate
              </Link>
              </li>
              <li className="mb-4 relative group inline-flex flex-col-2 items-center gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/candidate/dashboard"} className="block group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
              Candidate Dashboard
              </Link>
              </li>
              <li className="mb-4 relative  inline-flex flex-col-2 items-center gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/job/search-results"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
                Job Alert
              </Link>
              </li>
              <li className="w-full mb-4 relative group inline-flex flex-col-2 items-center gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/job/search-results"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
                My Bookmark
              </Link>
              </li>
              <li className="mb-4 relative group inline-grid grid-cols-2 items-center gap-3">
           
              </li>
          </ul>
        </div>

        <div className=" w-full mx-auto  sm:py-5 md:py-5">
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            For Employers
          </h2>
          <ul className=" grid grid-rows-1 text-white dark:text-white font-normal text-sm">
            <li className="mb-4 relative group inline-flex flex-col-2 items-center gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/employer"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
                All employers
              </Link>
              </li>
              <li className="mb-4 relative group inline-flex flex-col-2 items-center gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/employer/dashboard"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
                Employer Dashboard
              </Link>
              </li>
              <li className="mb-4 relative group inline-flex flex-col-2 items-center gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/submitjobs"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
              Submit Jobs
              </Link>
              </li>
              <li className="mb-4 relative group  inline-flex flex-col-2 items-center gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/job/search-results"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
                Job Pakages
              </Link>
              </li>
              
          </ul>
        </div>
        
        <div className=" w-full mx-auto sm:py-5 md:py-5">
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
           About Us
          </h2>
          <ul className=" grid grid-rows-1 text-white dark:text-white font-normal text-sm">
            <li className="mb-4 relative group  inline-flex flex-col-2 items-center  gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/job/search-results"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
                Contact Us
              </Link>
              </li>
              <li className="mb-4 relative group  inline-flex flex-col-2 items-center  gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/job/search-results"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
               About Us
              </Link>
              </li>
              <li className="mb-4 relative group  inline-flex flex-col-2 items-center  gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/job/search-results"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
              Trems
              </Link>
              </li>
              <li className="mb-4 relative group  inline-flex flex-col-2 items-center  gap-8">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/job/search-results"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
               packages
              </Link>
              </li>
              <li className="mb-4 relative group  inline-flex flex-col-2 items-center  gap-3">
            <div className="absolute h-0.5 w-0 bg-white group-hover:w-3 transition-all duration-300 ease-in-out"></div>
              <Link  to={"/job/search-results"} className=" group-hover:text-white hover:ms-2 hover:ps-1.5 hover:overflow-hidden transition-color duration-300 ease-in-out">
              FAQ
              </Link>
              </li>
          </ul>
        </div>

        <div className=" w-full mx-auto  sm:py-5 md:py-5">
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Mobile App
          </h2>
          <ul className=" grid grid-rows-1 text-white dark:text-white font-normal text-sm">
           
            <p>Chech and get Started in secends.</p>
              <li className="mb-4  grid-rows-2 inline-block items-center  gap-3">
              
              <button
                type="submit"
                className="bg-stone-700 w-auto flex flex-cols-2 px-5 py-2 mt-5  items-center text-center rounded-full   text-white whitespace-nowrap text-sm md:text-sm shadow-md transition duration-300 ease-in-out transform "
              >
               <div><FaApple size={30} className="me-3"/></div> 
             <div className="block pe-10"><span className="block"> Download On the </span>
             <h1 className="font-medium text-lg lg:text-lg text-white block">Apple Store</h1> 
                 <Link to={"/"} className="ms-auto float-end flex gap-2" > 
                 
                 </Link></div>
              </button>
              </li>
              <li className="mb-4  grid-rows-2 inline-block items-center  gap-3">
              <button
                type="submit"
                className="bg-stone-700 w-auto flex flex-cols-2 px-5 py-2 mt-5  items-center text-center rounded-full   text-white whitespace-nowrap text-sm md:text-sm shadow-md transition duration-300 ease-in-out transform "
              >
               <div><BiLogoPlayStore size={30} className="me-3"/></div> 
             <div className="block pe-10"><span className="block"> Download On the </span>
             <h1 className="font-medium text-lg lg:text-lg text-white block">Play Store</h1> 
                 <Link to={"/"} className="ms-auto float-end flex gap-2" > 
                 
                 </Link></div>
              </button>
              </li>
            
          </ul>
        </div>
      </div>
    </div>
    
    <div className="text-center py-4  border-t border-gray-600 w-full">
        <p className="text-white text-sm py-6 pt-8">
         &copy; 2024 <span className="text-white mx-auto">Fulcrum Resources.</span>{" "}
          All Right Reserved.
        </p>
      </div>
  </div>
</footer>

    // <div className="bg-[#202124] w-full">
       
    //   <div className="text-center py-10 my-6 border-t border-gray-600 w-full">
    //     <p className="text-white text-sm">
    //       &copy; 2024 <span className="text-white">Fulcrum Resources.</span>{" "}
    //       All Right Reserved.
    //     </p>
    //   </div>

    //   <div
    //     className="fixed bottom-0 right-0 m-9 me-10 px-3 py-3 bg-[#6ad61d23]  hover:bg-[#6ad61d] hover:text-white text-[#6ad61d] rounded-full cursor-pointer transition duration-300"
    //      onClick={scrollToTop}
    //   >
    //     <RiArrowUpSLine size={23} />
    //   </div>
    // </div>
  );
}

export default Footer;
