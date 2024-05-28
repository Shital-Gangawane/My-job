import { motion } from 'framer-motion'
import React, {useState} from 'react'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { RiAccountBoxLine } from "react-icons/ri";
import { TbLockSearch } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";


function HowItWorks() {

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
  
    const cardData=[
        {
            name: "Register an account to start",
            url: "#",
            icon: <RiAccountBoxLine size={60} className=" mx-auto " />,
             p: "To register as a recruiter, visit the recruitment platform's website, select the recruiter sign-up option, fill in the required details, verify your email, and complete your profile to start recruiting.",
             color: "blue",
             bgColor: "bg-blue-100"
          },
          {
            name: "Explore over thousands of resumes",
            url: "#",
            icon: <TbLockSearch size={60} className=" mx-auto " />,
             p: " Explore over thousands of resumes to find the perfect candidates for your job openings, leveraging a vast database to match skill sets and experiences with your requirements.",
             color: "red",
             bgColor: "bg-red-100"
          },
          {
            name: "Find the most suitable candidate",
            url: "#",
            icon: <CgNotes size={60} className=" mx-auto " />,
             p: "Explore thousands of resumes to discover ideal candidates for your vacancies, tapping into a broad pool of talents and experiences tailored to your needs.",
             color: "yellow",
             bgColor: "bg-yellow-100"
          },
    ]
  return (
    <motion.div className="w-full h-auto mx-auto px-10 py-5 pb-5 md:px-10 bg-white flex flex-col items-center">
    <div className="text-start w-full px-4 mt-12 mb-8 md:px-32 sm:px-4 sm:mt-16 sm:mb-10">
    <h1 className="font-medium text-4xl text-center text-gray-800  sm:text-3xl lg:text-4xl mb-4 sm:mb-5">How It Works?</h1>
    <h2 className='font-medium text-xl text-center mb-4 text-gray-500 sm:text-xl sm:mb-5'>Find Candidates in 3 easy steps:</h2>
    <p className='md:px-48 text-sm text-center sm:px-4 text-gray-500 sm:text-sm'>Getting applied by an expert talent involves attracting highly skilled professionals to apply for your job openings, ensuring your company secures top-tier candidates for its positions.

</p>
    </div>

    <div className="relative w-full h-full lg:py-16 sm:py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-4">
          {cardData?.map((data, i) => (
            <Col
              key={i}
              className={`${
                isColHovered && selectedCard === i ? " shadow-xl  " : ""
              } py-16 sm:py-10  px-8 flex-1  w-auto rounded-xl  bg-white`}
              onMouseEnter={() => handleColMouseEnter(i)}
              onMouseLeave={() => handleColMouseLeave(i)}
            >
              <Card className="">
                <Card.Body className="text-center sm:py-10">
                  <div className={`${data.bgColor} text-${data.color}-600 text-center py-5 w-24 h-24  mx-auto rounded-full transition duration-300 ease-in-out`}>
                    {data.icon}
                  </div>
                  <div className="w-full items-end">
                    <Card.Title className=" text-md font-semibold mt-4 py-5 lg:px-24 text-gray-700">
                      {data.name}
                    </Card.Title>
                    <Card.Text className={`justify-center text-gray-600  text-md `}>{data.p}</Card.Text>
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

export default HowItWorks
