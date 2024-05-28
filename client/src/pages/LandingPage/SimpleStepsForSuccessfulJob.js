import { motion } from 'framer-motion'
import React, {useState} from 'react'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import icon1 from "../../assets/icon1.jpg";
import icon2 from "../../assets/icon2.jpg";
import icon3 from "../../assets/icon3.jpg";

function SimpleStepsForSuccessfulJob() {
    
  
    const cardData=[
        {
            name: "Free Resume Assessments",
            url: "#",
            icon: icon1,
             p: "Free Resume Assessments offer personalized feedback to enhance your resume’s effectiveness and improve your chances of landing your desired job.",
            
          },
          {
            name: "Job Fit Scoring",
            url: "#",
            icon: icon1,
             p: "Job Fit Scoring evaluates how well a candidate’s skills, experience, and qualifications match a specific job’s requirements, helping employers identify the most suitable applicants for a position.",
            
          },
          {
            name: "Help Every Step of the Way",
            url: "#",
            icon: icon1,
             p: "Help Every Step of the Way” refers to comprehensive support and guidance provided throughout a process, ensuring individuals have the necessary assistance and resources at every stage to achieve their goals successfully.",
            
          },
        ]
  return (
    <motion.div className="w-full h-auto mx-auto px-10 lg:py-5 pb-5 md:px-10  bg-white flex flex-col items-center">
    <div className="text-start w-full lg:px-4 mt-12  md:px-32 sm:px-4 sm:mt-16 ">
    <h1 className="font-medium text-4xl text-center text-gray-800  sm:text-3xl  mb-4 sm:mb-5">Few Simple Steps for Successful Job Search</h1>
    <p className='md:px-48 text-md text-center sm:px-4 text-gray-700 sm:text-md sm:mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
    </div>
    <div className="relative w-full h-full lg:py-5 sm:py-10 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardData?.map((data, i) => (
            <Col
              key={i}
              className={`lg:py-16 sm:py-5 sm:pt-10 px-8 flex-1  w-auto  bg-white`}
            >
              <Card className="">
                <Card.Body className="text-center mx-auto">
                  <div className={`text-center lg:py-5 items-center w-full lg:px-20  sm:px-15 mx-auto `}>
                   <img src={data.icon}/> 
                  </div>
                  <div className="w-full  ">
                    <Card.Title className=" text-lg font-semibold mt-4 py-5 lg:px-2 text-gray-700">
                      {data.name}
                    </Card.Title>
                    <Card.Text className={`text-center text-gray-600 lg:px-10 text-md `}>{data.p}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SimpleStepsForSuccessfulJob
