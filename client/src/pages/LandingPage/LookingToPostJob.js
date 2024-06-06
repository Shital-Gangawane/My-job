import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import sideK from "../../assets/sideK.png";
import{fadeIn} from "../../Variants";

function LookingToPostJob() {
  const sideImg = [
    {
      img: sideK,
    },
  ];
  return (
    <div 
    className="grid grid-cols-1 md:grid-cols-2 w-full h-auto  px-10 pb-10 md:px-10 bg-[#F5F2EA] ">
      <motion.div
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
      className=" w-full mt-16">
        {sideImg?.map((image, i) => (
          <img key={i} src={image.img} />
        ))}
      </motion.div>
      <motion.div 
       variants={fadeIn("left",0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false,amount:0.7}}className=" w-full md:pt-52 md:ps-20  mx-auto lg:px-24 sm:px-1 sm:ps-1 mt-16">
        <div className="mx-auto items-center">
          <h1 
           className="font-medium text-3xl sm:text-4xl lg:text-4xl mb-6 sm:mb-8">
            Looking to Post a Job
          </h1>
          <h2 className="text-left text-sm sm:text-base ">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </h2>

          <div className=" w-full lg:max-w-60 py-5">
            <motion.button
            initial={{  y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
             duration: 1,
            }} 
              type="submit"
              className="bg-stone-900 px-8 py-5 sm:px-8 sm:py-4  items-center flex text-center rounded-full  hover:bg-white hover:text-black text-white whitespace-nowrap text-sm md:text-sm shadow-md transition duration-300 ease-in-out transform "
            >
              Post a Jobs
              <Link to={"/login"} className="ms-auto float-end flex gap-2">
                <MdOutlineArrowOutward size={20} className="ms-2" />
              </Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LookingToPostJob;
