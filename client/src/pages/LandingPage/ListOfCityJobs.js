import React,{useState} from 'react'
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { MdOutlineArrowOutward } from "react-icons/md";
import mumbai from "../../assets/mumbai.png";
import dehli from "../../assets/dehli.png";
import bangalore from "../../assets/bangalore.png";
import hyderabad from "../../assets/hyderabad.png";
import pune from "../../assets/pune.png";
import chennai from "../../assets/chennai.png";



function ListOfCityJobs() {

    const [isColHovered, setIsColHovered] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  
    const handleColMouseEnter = (i) => {
      setIsColHovered(true);
      setSelectedCard(i);
      setHoveredCardIndex(i);
    };
  
    const handleColMouseLeave = (i) => {
      setIsColHovered(false);
      setSelectedCard(i);
      setHoveredCardIndex(null);
    };
  
    const cityData = [
      {
        name: "Mumbai",
        url: "#",
       icon: mumbai ,
        p: "3679 jobs",
      },
      {
        name: "Dehli",
        url: "#",
       icon: dehli ,
        p: "2680 jobs",
      },
      {
        name: "Bangalore",
        url: "#",
       icon: bangalore ,
        p: "3251 jobs",
      },
      {
        name: "Hyderabad",
        url: "#",
       icon: hyderabad ,
        p: "2742 jobs",
      },
      {
        name: "Pune",
        url: "#",
       icon: pune ,
        p: "2723 jobs",
      },
      {
        name: "Chennai",
        url: "#",
       icon: chennai ,
        p: "2715 jobs",
      },
    ]

  return (
    <section className="w-full h-auto mx-auto px-10 pb-5 md:px-10 bg-white flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 text-start w-full mt-16">
        <div>
        <h1 className="font-medium text-2xl lg:text-3xl">List Of City Jobs</h1>
        <h2 className='mt-1'>Know your worth and find the job that qualify your life</h2>
        </div>
        <div className='pt-5'>
        <Link
          to={"/job/search-results"}
          className="ms-auto  md:float-end sm:float-start flex gap-2 hover:underline font-medium text-gray-800"
        >
         Browse all the jobs <MdOutlineArrowOutward size={20} className="" />
        </Link>
        </div>
      </div>
      <style>
        {`
          .underline-animation {
            position: relative;
            display: inline-block;
          }
          .underline-animation::before {
            content: "";
            position: absolute;
            width: 0;
            height: 1px;
            bottom: -1px;
            background-color: #000;
            transition: width 0.5s  ease-in-out;
          }
          .underline-animation:hover::before {
            width: 50%;
          }
        `}
      </style> 

      <div className=" w-full h-full py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {cityData?.map((stat, i) => (
            <Col
              key={i}
              className={`${
                isColHovered && selectedCard === i ?  "cursor-pointer" : ""
              } flex-1  w-auto rounded-2xl border-none `}
              onMouseEnter={() => handleColMouseEnter(i)}
              onMouseLeave={() => handleColMouseLeave(i)}
            >
              <Card className="">
                <Card.Body className=" ">
             <div className={`${
                        hoveredCardIndex  === i
                          ? " underline-animation transition  ease-in-out "
                          : ""
                      } `}>

                  <div
                    className={` w-full h-full rounded-xl transition duration-300 ease-in-out`}
                  >
                    <img src= {stat.icon} className='rounded-xl '/>
                  
                  </div>
                 
                  <Card.Title
                      className={`text-md font-semibold mt-4 ms-2`}
                    >
                      {stat.name}
                    </Card.Title>
                    </div>
        
                    <Card.Text  className={`${
                      isColHovered && selectedCard === i ? "text-[#6ad61d] duration-500 ease-out  " : ""
                    }  text-sm pb-3 pt-3 ms-2`}>{stat.p}</Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </div>
      </section>
  )
}

export default ListOfCityJobs
