import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import Untitleddesign from "../../assets/Untitleddesign.png";

function FindJobWithEasySteps() {
  const sideImg = [
    {
      img: Untitleddesign,
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 py-16 w-full h-auto mx-auto px-7 pb-5 md:px-7 bg-white">
     
      <motion.div 
      variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
      className=" w-full mt-7 mb-5">
        {sideImg?.map((image, i) => (
          <img key={i} src={image.img} />
        ))}
      </motion.div>
      <motion.div
      variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
       className=" w-full  md:ps-14  mx-auto lg:px-24 sm:px-1 sm:ps-1 lg:py-14">
        <div className="items-start">
          <h1 className="font-medium pe-10 text-4xl sm:text-4xl lg:text-4xl mb-6 sm:mb-8">
            Find Jobs with 3 easy steps
          </h1>
          <h2 className="text-left text-sm text-gray-500 sm:text-base ">
            Search for job opportunities matching your skills, then customize
            and submit your applications. Follow up with employers to express
            interest and inquire about your application status.
          </h2>

          <div className=" w-full  lg:py-5 mx-auto">
            <h1 className=" font-medium lg:text-lg mx-auto sm:text-sm text-gray-800  py-5 sm:py-4  items-center flex text-center  whitespace-nowrap transition duration-300 ease-in-out transform ">
              <span className="font-semibold lg:text-4xl sm:text-3xl text-gray-200 lg:pe-5 lg:pb-3">
                {" "}
                01
              </span>
              Register an account to start
            </h1>

            <h1 className=" font-medium lg:text-lg  mx-auto sm:text-sm  text-gray-800  py-5 sm:py-4  items-center flex text-center  whitespace-nowrap transition duration-300 ease-in-out transform ">
              <span className="font-semibold  lg:text-4xl sm:text-3xl text-gray-200 lg:pe-5 lg:pb-3">
                {" "}
                02
              </span>
              Explore over thousands of resumes
            </h1>

            <h1 className=" font-medium lg:text-lg   mx-auto sm:text-sm  text-gray-800  py-5 sm:py-4  items-center flex text-center  whitespace-nowrap transition duration-300 ease-in-out transform ">
              <span className="font-semibold  lg:text-4xl sm:text-3xl text-gray-200 lg:pe-5 lg:pb-3">
                {" "}
                03
              </span>
              Find the most suitable candidate
            </h1>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FindJobWithEasySteps;
