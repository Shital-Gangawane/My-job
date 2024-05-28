import React,{useState} from 'react'
import { motion } from "framer-motion";
import Col from "react-bootstrap/Col";

function TrendingJobs() {
    const [isColHovered, setIsColHovered] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
  
    const handleColMouseEnter = (i) => {
      setIsColHovered(true);
      setSelectedCard(i);
    };
  
    const handleColMouseLeave = (i) => {
      setIsColHovered(false);
      setSelectedCard(i);
    };
  
    const buttonData=[
        {
            btn: "Marketing",
            url: "#",
           
          },
          {
            btn: "Sales Job",
            url: "#",
           
          },
          {
            btn: "Design",
            url: "#",
           
          },
          {
            btn: "human Resource",
            url: "#",
           
          },
          {
            btn: "Customer Servise",
            url: "#",
           
          },
          {
            btn: "Automotive Jobs",
            url: "#",
           
          },
          {
            btn: "IT Jobs",
            url: "#",
           
          },
          {
            btn: "Engineering",
            url: "#",
           
          },
          {
            btn: "BPO Jobs",
            url: "#",
           
          },
          {
            btn: "Manufacturing Jobs",
            url: "#",
           
          },
          {
            btn: "Real Estate Jobs",
            url: "#",
           
          },
          {
            btn: "Health and Care",
            url: "#",
           
          },
        ]

  return (
    <motion.div className="w-full h-auto mx-auto lg:px-10 lg:py-5 sm:py-2 lg:pb-5 sm:pb-2 md:px-5 sm:px-5 bg-white flex flex-col items-center">
    <div className="text-start w-full px-4 mt-12 mb-8 md:px-32 sm:px-4 sm:mt-16 sm:mb-10">
    <h1 className="font-medium text-4xl text-center text-gray-800  sm:text-3xl lg:text-4xl mb-4 sm:mb-5">Trending Jobs</h1>
    <p className='md:px-48 sm:mb-10 text-md text-center sm:px-4 text-gray-700 sm:text-md'>Explore trending job searches in the India</p>
   
    <div className="relative w-full h-full lg:py-16 sm:py-10">
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 ">
          {buttonData?.map((data, i) => (
            // <Col
            //   key={i}
            //   className={`py-16  flex-1 rounded-xl bg-white`}
             
            // >
                 <motion.button
                  key={i}
                 type="submit"
                  className="bg-white border py-4 sm:py-4 items-center text-center rounded-full hover:bg-[#F5F2EA] whitespace-nowrap text-sm md:text-sm font-medium transition duration-300 ease-in-out transform "
                >
                  {data.btn}
                 {/* <Link to={"/login"} className="ms-auto float-end flex gap-2" > 
                 <MdOutlineArrowOutward size={20} className="ms-2" />
                 </Link> */}
              </motion.button>

            // </Col>
          ))}
        </div>    
        
    </div>    
    
</div>
      
    </motion.div>
  )
}

export default TrendingJobs
