import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { MdOutlineArrowOutward } from "react-icons/md";
import Sunstar from "../../assets/Sunstar.jpg";
import EchjayIndustries from "../../assets/EchjayIndustries.jpg";
import BlackCatEngineeringAndConstruction from "../../assets/BlackCatEngineeringAndConstruction.jpg";
import Finolex from "../../assets/Finolex.webp";
import ReinforcedEarth from "../../assets/ReinforcedEarth.webp";
import BhartiRealty from "../../assets/BhartiRealty.jpg"
import TricoliteElectricalIndustries from "../../assets/TricoliteElectricalIndustries.jpg"
import { GoBookmark } from "react-icons/go";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";


const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hover:bg-[#6ad61d] hover:text-white text-zinc-600 border rounded-full p-2"
        onClick={onClick}
      >
        <MdArrowBackIos />
      </button>
    );
  };

const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hover:bg-[#6ad61d] hover:text-white text-zinc-600 border rounded-full p-2"
        onClick={onClick}
      >
        <MdArrowForwardIos />
      </button>
    );
  };
  
function TopCompaniesHiring() {
    const [isColHovered, setIsColHovered] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [numVisible, setNumVisible] = useState(4); // Number of visible images
  
    const handleColMouseEnter = (i) => {
      setIsColHovered(true);
      setSelectedCard(i);
    };
  
    const handleColMouseLeave = (i) => {
      setIsColHovered(false);
      setSelectedCard(i);

    };
    const handleButtonClick = () => {
        setIsButtonVisible(false);
      
      };
    
  
    const cardData=[
        {
            name: "Sunstar Precision Forge",
            url: "#",
            icon: Sunstar,
             p: "Sunstar Precision Forge About Sunstar Precision Forge About",
             button:"Open Job-0"
             
            
          },
          {
            name: "Echjay Industries",
            url: "#",
            icon: EchjayIndustries,
             p: "Echjay Industris About Echjay Industries About EchjayIndustries",
             button:"Open Job-0"
            
            
          },
          {
            name: "Black Cat Engineering And Construction",
            url: "#",
            icon: BlackCatEngineeringAndConstruction,
             p: "Black Cat Engineering And Construction About Black" ,
             button:"Open Job-0"
             
          },
          {
            name: "Finolex ",
            url: "#",
            icon: Finolex,
             p: "About Finolex About Finolex", 
             button:"Open Job-0"
          },
          {
            name: "Tricolite Electrical Industries",
            url: "#",
            icon: TricoliteElectricalIndustries,
             p: " Tricolite Electrical Industries About Tricolite Electrical Industries About",
             button:"Open Job-0"
            
          },
           {
            name: "Bharti Realty ",
            url: "#",
            icon: BhartiRealty,
             p: "Bharti Realty About Bharti Realty About Bharti Realty",
             button:"Open Job-0"
            
          }, 
          {
            name: "Reinforced Earth",
            url: "#",
            icon: ReinforcedEarth,
             p: " Reinforced Earth About Reinforced Earth About Reinforced Earth ",
             button:"Open Job-0"
            
          },
        //   Employer
        //   {
        //     name: "Reinforced Earth",
        //     url: "#",
        //     icon: Finolex,
        //      p: " Reinforced Earth About Reinforced Earth About Reinforced Earth ",
        //      button:"Open Job-0"
            
        //   },
        
    ]
    

    useEffect(() => {
      const updateNumVisible = () => {
        if (window.innerWidth < 470) {
          setNumVisible(1);
        } else if (window.innerWidth < 768) {
          setNumVisible(2);
        } else if (window.innerWidth < 1024) {
          setNumVisible(3);
        } else if (window.innerWidth < 1280) {
          setNumVisible(4);
        } else {
          setNumVisible(4);
        }
      };
  
      updateNumVisible();
  
      const resizeListener = () => {
        updateNumVisible();
      };
  
      window.addEventListener("resize", resizeListener);
  
      return () => {
        window.removeEventListener("resize", resizeListener);
      };
    }, []);
  

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: numVisible,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
           
          {
            breakpoint: 470,
            settings: {
              slidesToShow: 1,
              
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
    
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      };
    
  return (
    <div  className="w-full h-auto mx-auto px-2  pb-24 md:px-10 bg-[#F5F2EA] flex flex-col items-center">
       
    <motion.div 
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}} 
    className="grid grid-cols-1 md:grid-cols-1 text-start w-full mt-16">
     <div>
      <h1 className="font-medium text-2xl lg:text-3xl">Top Companies Hiring Now</h1>
      <h2 className="mt-1">Over 200 Million Jobs</h2>
     </div>
     <div className=''>
     <Link
        to={"/job/search-results"}
        className="ms-auto md:float-end sm:float-start flex gap-2 font-medium text-gray-800"
      >
        Browse All Companys <MdOutlineArrowOutward size={20} className=""/>
      </Link>
     </div>
     
    </motion.div>


    <motion.div 

    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
    className="relative w-full h-full py-10">
    
    <Slider  {...settings}
          className=" w-full h-auto py-5 md:px-10 "
          spacing={20}
       >
        {/* <div className="flex  flex-rows-1 md:flex-rows-4 gap-8"> */}
        {/* <div className=" grid grid-cols-1 md:grid-cols-4 gap-8"> */}
       
          {cardData?.map((data, i) => (
            <Col
              key={i}
              className={`pt-10 px-4 w-auto`}
              spacing={16}
              >
              <Card className=" relative group rounded-xl bg-white shadow-md">
                <Card.Body className="text-center p-5">
                    <GoBookmark size={35} className="text-gray-500 hover:bg-gray-100 rounded-full m-2 w-auto float-end px-2 py-2 absolute top-3 right-3 group-hover:block hidden"/>
                  <div className={`text-center p-2 w-20 h-20 mx-auto rounded-full transition duration-300 ease-in-out`}>
                   
                    <img src={data.icon} />
                  </div>
                  <div className="w-full items-end mb-5">
                    <Card.Title className=" text-md font-semibold  text-gray-700">
                      {data.name}
                    </Card.Title>
                    <Card.Text className={`justify-center text-gray-600 px-2 py-3 text-md `}>{data.p}</Card.Text>
                  </div>
                  <button
                      type="button"
                      className="text-[#6ad61d] mb-3 w-full hover:text-white bg-gray-100 hover:bg-[#6ad61d] focus:ring-4 focus:outline-none focus:ring-[#6ad61d] dark:bg-gray-100 dark:hover:bg-[#6ad61d] dark:focus:ring-[#6ad61d] font-medium rounded-lg text-sm px-3 py-4 inline-flex justify-center  text-center"
                      onClick={handleButtonClick}
                    >
                      {data.button} <MdOutlineArrowOutward size={20} className="ms-2" />
                    </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        {/* </div> */}
        </Slider>
      </motion.div>
    </div>
  )
}

export default TopCompaniesHiring
