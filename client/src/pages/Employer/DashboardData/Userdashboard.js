import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { SlNote } from "react-icons/sl";
import { AiOutlineMessage } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import UserDashboardProfileViews from "../../../components/Employer/DashboardData/UserDashboardProfileViews";
import UserDashboardNotifications from "../../../components/Employer/DashboardData/UserDashboardNotifications";
import UserDashboardRecent from "../../../components/Employer/DashboardData/UserDashboardRecent";
import { useUserContext } from "../../../context/userContext";
import { fetchUser } from "../../../api/employer/axios";

function Userdashboard() {
  const { user, setUser, fetchData } = useUserContext();
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    const fetchData = async () => {
      const userType = sessionStorage.getItem("userType");
      if (userType === "employer" && user?._id) {
        const res = await fetchUser(userType, user?._id);
        console.log(res);
        const newUser = res?.data?.employer;
        if (JSON.stringify(user) !== JSON.stringify(newUser)) {
          sessionStorage.setItem("user", JSON.stringify(newUser));
          setUser(newUser);
        }
      }
    };

    fetchData();
  }, [user?._id, setUser]); // Depend on user._id specifically if that's the main identifier

  const statsData = [
    {
      name: "Posted Jobs",
      count: userData?.postedJobs?.length,
      url: "#",
      icon: (
        <HiOutlineBriefcase size={35} className="  text-blue-600 rounded " />
      ),
      color: "blue",
      bgColor: "bg-blue-100",
    },
    {
      name: "Application",
      count: 0,
      url: "#",
      icon: <SlNote size={35} className="  text-red-600 rounded " />,
      color: "red",
      bgColor: "bg-red-100",
    },
    {
      name: "Review",
      count: 0,
      url: "#",
      icon: (
        <AiOutlineMessage size={35} className="  text-yellow-600 rounded " />
      ),
      color: "yellow",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Shortlisted",
      count: 0,
      url: "#",
      icon: (
        <IoBookmarkOutline size={35} className="  text-green-600 rounded" />
      ),
      color: "green",
      bgColor: "bg-green-100",
    },
  ];
  return (
    <div className=" w-full h-auto  overflow-y-auto  lg:mt-14 px-4 lg:px-14 py-7 pb-14">
      <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Applications statistics
      </h2>
      <div className=" h-full w-full flex gap-2 lg:gap-8 justify-center flex-wrap items-center flex-col lg:flex-row">
        {statsData?.map((stat, i) => (
          <Col
            key={i}
            className=" bg-white  lg:p-7 md:p-8 flex-1 w-full rounded-lg border border-gray-100 shadow-sm"
          >
            <Card className=" flex flex-col ">
              <Card.Body className="flex gap-2 items-center">
                <div className={`${stat.bgColor} p-5 rounded-md`}>
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

      <div className=" flex flex-col md:flex-row h-[550px] w-full  md:justify-between gap-6 mt-8">
        <div className=" h-96 w-full flex-1">
          <UserDashboardProfileViews />
        </div>
        <div className=" w-full md:w-64 xl:w-80">
          <UserDashboardNotifications />
        </div>
      </div>

      <div className=" w-full h-36 mt-8 bg-white rounded-lg shadow-lg p-7">
        <UserDashboardRecent />
      </div>
    </div>
  );
}

export default Userdashboard;
