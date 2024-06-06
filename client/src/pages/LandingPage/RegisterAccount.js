import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import registerEmployee from "../../assets/registerEmployee.jpg"
import registerCan from "../../assets/registerCan.jpg"
import registerEmpside from "../../assets/registerEmpside.jpg"
import registerCanside from "../../assets/registerCanside.jpg"


function RegisterAccount() {
    const cardData=[
        {
            name: "Employers",
            url: "#",
            img: registerEmployee,
            rightSideimg: registerEmpside,
             p: "Sign up now for job posting to unlock access to a wide pool of talented candidates, streamline your recruitment process, and find the perfect match for your open positions.",
             color:"red-500"
          },
          {
            name: "Candidate",
            url: "#",
            img: registerCan,
            rightSideimg: registerCanside,
            BGimg:"../src/assets/header.jpg",
            p: "Search for job opportunities matching your skills, customize and submit your applications.Follow up with employers to express interest and inquire about your application status.",
            color:"blue-500"
          },
        ]
  return (
    <div  className=" relative w-full h-full py-16 bg-white mx-auto">
    <motion.div
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
    >
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {cardData?.map((data, i) => (
            <Col
              key={i}
              className={`flex-1  w-auto rounded-xl`}
            >
              <Card className=" mx-auto px-10">
                <Card.Body className= "w-full h-full object-cover rounded-xl card-wrapper group relative" style={{ height:`auto` ,
                 backgroundImage: `url(${data.img})`,
                 }}>
                <div className="absolute float-start py-14  items-end pe-8 px-5 text-white">
               
                  <Card.Title className=" text-left text-xl font-semibold ">
                      {data.name}
                    </Card.Title>
                  <Card.Text className={` text-left pe-56 text-sm py-5 `}>{data.p} 
                  </Card.Text>
                  <button
             
              className={ `bg-white px-8 py-10 sm:px-8 sm:py-4  items-center flex text-center rounded-xl   text-${data.color} whitespace-nowrap text-sm md:text-sm shadow-md transition duration-300 ease-in-out transform `}
            >
              Register Account
              <Link to={"/login"} className="ms-auto float-end flex gap-2"> </Link>
            </button>
                  </div>
                  <div className={` overflow-hidden w-full h-full rounded-xl transition  duration-300 ease-in-out `}>
                  <img src={data.rightSideimg} className='object-cover float-end  group-hover:scale-110 transition-transform duration-300 ease-in-out'/> 
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

export default RegisterAccount
