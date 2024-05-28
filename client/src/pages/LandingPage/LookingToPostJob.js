import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import sideK from "../../assets/sideK.png"

function LookingToPostJob() {
    const sideImg=[
        {
            img:sideK
        }
    ]
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto  px-10 pb-10 md:px-10 bg-[#F5F2EA] ">
      <div className=" w-full mt-16">
      {sideImg?.map((image, i) => (
        
         <img src= {image.img}/>
        
      ))}
       
    </div>
    <div className=" w-full md:pt-52 md:ps-20  mx-auto lg:px-24 sm:px-1 sm:ps-1 mt-16">
        <div className='mx-auto items-center'>
       <h1 className="font-medium text-3xl sm:text-4xl lg:text-4xl mb-6 sm:mb-8">Looking to Post a Job</h1>
       <h2 className='text-left text-sm sm:text-base '>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</h2>
       
       <div className=" w-full lg:max-w-60 py-5">
       <motion.button
                type="submit"
                className="bg-stone-900 px-8 py-5 sm:px-8 sm:py-4  items-center flex text-center rounded-full  hover:bg-white hover:text-black text-white whitespace-nowrap text-sm md:text-sm shadow-md transition duration-300 ease-in-out transform "
              >
                Post a Jobs 
                 <Link to={"/login"} className="ms-auto float-end flex gap-2" > 
                 <MdOutlineArrowOutward size={20} className="ms-2" />
                 </Link>
              </motion.button>
              </div>
       </div>
      
             
           
    </div>
    </motion.div>
  )
}

export default LookingToPostJob
