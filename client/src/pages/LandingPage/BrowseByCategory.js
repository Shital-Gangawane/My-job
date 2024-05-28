import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { TbSpeakerphone } from "react-icons/tb";
import { GoGitBranch } from "react-icons/go";
import { BiCodeBlock } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiFirstAidKitLight } from "react-icons/pi";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdOutlineArrowOutward } from "react-icons/md";

function BrowseByCategory() {
 
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

  const statsData = [
    {
      name: "Marketing",
      url: "#",
      icon: <TbSpeakerphone size={50} className=" mx-auto " />,
      p: "(1326 Open Positions)",
    },
    {
      name: "Design",
     
      url: "#",
      icon: <GoGitBranch size={50} className=" mx-auto " />,
      p: "(0 Open Positions)",
    },
    {
      name: "Development",
     
      url: "#",
      icon: <BiCodeBlock size={50} className="  mx-auto  " />,
      p: "(0 Open Positions)",
    },
    {
      name: "Customer",
      
      url: "#",
      icon: <RiCustomerService2Line size={50} className="  mx-auto " />,
      p: "(0 Open Positions)",
    },
    {
      name: "Health and Care",
      
      url: "#",
      icon: <PiFirstAidKitLight size={50} className="  mx-auto    " />,
      p: "(0 Open Positions)",
    },
    {
      name: "Automotion Job",
     
      url: "#",
      icon: <LiaCarSideSolid size={50} className="  mx-auto " />,
      p: "(1 Open Positions)",
    },
  ];
  return (
    <section className="w-full h-auto mx-auto px-10 pb-5 md:px-10 bg-white grid grid-cols-1 items-center">
      <div className="text-start w-full mt-16">
        <h1 className="font-medium text-2xl lg:text-3xl">Browse by Category</h1>
        <Link
          to={"/job/search-results"}
          className="ms-auto float-end flex gap-2 font-medium text-gray-800"
        >
          See all <MdOutlineArrowOutward size={20} className="" />
        </Link>
        <h2>2020 jobs live - 293 added today.</h2>
      </div>
      <div className="relative mx-auto w-full h-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {statsData?.map((stat, i) => (
            <Col
              key={i}
              className={`${
                isColHovered && selectedCard === i ? "bg-[#F5F2EA]" : "bg-white"
              } lg:p-7 py-10 md:p-8 flex-1  w-auto rounded-2xl border border-gray-100 shadow-sm`}
              onMouseEnter={() => handleColMouseEnter(i)}
              onMouseLeave={() => handleColMouseLeave(i)}
            >
              <Card className="">
                <Card.Body className="text-center ">
                  <div
                    className={`${
                      isColHovered && selectedCard === i ? "bg-white" : "bg-[#F5F2EA]"
                    } py-5 w-20 h-20 mx-auto rounded-full transition duration-300 ease-in-out`}
                  >
                    {stat.icon}
                  </div>
                  <div className="  w-full items-end">
                    <Card.Title className=" text-md font-semibold   mt-4">
                      {stat.name}
                    </Card.Title>
                    <Card.Text className={`  text-sm `}>{stat.p}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrowseByCategory;
