import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { SlNote } from "react-icons/sl";
import { AiOutlineMessage } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";

const statsData = [
  {
    name: "Posted Jobs",
    count: 0,
    url: "#",
    icon: <HiOutlineBriefcase size={35} className="  text-blue-600 rounded " />,
    color: "blue",
  },
  {
    name: "Application",
    count: 0,
    url: "#",
    icon: <SlNote size={35} className="  text-red-600 rounded " />,
    color: "red",
  },
  {
    name: "Review",
    count: 0,
    url: "#",
    icon: <AiOutlineMessage size={35} className="  text-yellow-600 rounded " />,
    color: "yellow",
  },
  {
    name: "Shortlisted",
    count: 0,
    url: "#",
    icon: <IoBookmarkOutline size={35} className="  text-green-600 rounded" />,
    color: "green",
  },
];
function Userdashboard() {
  return (
    <div className="mt-20 px-14 overflow-y-auto">
      <h2 className=" text-3xl mb-10">Applications statistics</h2>
      <div className=" w-full flex gap-8 justify-center items-center">
        {statsData?.map((stat, i) => (
          <Col
            key={i}
            className=" bg-white p-8 w-full rounded-lg border border-gray-100 shadow-sm"
          >
            <Card className=" flex flex-col ">
              <Card.Body className="flex gap-2 items-center">
                <div className={`bg-${stat.color}-100 p-5 rounded-md`}>
                  {stat.icon}
                </div>

                <div className=" flex flex-col w-full items-end">
                  <Card.Text
                    className={` text-3xl  text-${stat.color}-600 font-semibold`}
                  >
                    {stat.count}
                  </Card.Text>
                  <Card.Title className=" text-sm   mt-4">
                    {stat.name}
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
}

export default Userdashboard;
