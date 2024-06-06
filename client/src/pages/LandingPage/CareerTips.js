import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { MdOutlineArrowOutward } from "react-icons/md";
import careerTip from "../../assets/careerTip.jpg";
import careerTips from "../../assets/careerTips.jpg";


function CareerTips() {
  
    const cardData=[
        {
            name: "15 Essential Career Advacement Tips for Software Engineers",
            url: "#",
            img: careerTip,
             p: "March 3,2024 |",
            
          },
          {
            name: "Top 20 companies in India hiring full Stack Developers",
            url: "#",
            img: careerTips,
            p: "March 3,2024 |",
            
          },
          {
            name: "20 Essential Tips for Aspiring Full Stack Developers",
            url: "#",
            img: careerTip,
            p: "March 3,2024 |",
            
          },
    ]
  return (
    <div  className="w-full h-auto mx-auto px-2  lg:pb-24 sm:pb-3 md:pb-3 md:px-3 sm:px-3 bg-white flex flex-col items-center">
    <motion.div
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
     className="grid grid-cols-1 md:grid-cols-2 text-start w-full mt-16">
     <div>
      <h1 className="font-medium text-2xl lg:text-3xl">Caeer Tips</h1>
      <h2 className="mt-1">Fresh job related news content posted each day.</h2>
     </div>
     <div className=''>
     <Link
        to={"/job/search-results"}
        className="ms-auto md:float-end sm:float-start flex gap-2 font-medium text-gray-800"
      >
        View All <MdOutlineArrowOutward size={20} className=""/>
      </Link>
     </div>
     
    </motion.div>

    <motion.div
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
     className="relative w-full h-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {cardData?.map((data, i) => (
            <Col
              key={i}
              className={`flex-1  w-auto rounded-xl bg-white`}
            >
              <Card className="">
                <Card.Body className="card-wrapper group  ">
                  <div className={` overflow-hidden w-full rounded-xl transition duration-300 ease-in-out`}>
                   <img src={data.img} className='w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out'/> 
                  </div>
                  <div className="w-full items-end mt-6">
                  <Card.Text className={` text-left mt-4  text-gray-500  text-md `}>{data.p} <span className='text-gray-800 hover:text-[#6ad61d]'> By Admin</span>
                  </Card.Text>
                    <Card.Title className=" text-left text-xl font-semibold  py-5 hover:text-[#6ad61d] text-gray-800">
                      {data.name}
                    </Card.Title>
                  
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </motion.div>

    </div>
  )
}

export default CareerTips
