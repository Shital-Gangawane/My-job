import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import PostNewJob from "./SubmitJobsComps/PostNewJob";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import { fetchPackages } from "../../../api/employer/axios";

const cardData = [
  {
    name: "Standard",
    price: "₹49",
    url: "#",
    list1: 5,
    list2: null,
    list3: null,
    list4: null,
    icon: <TiTick className="text-gray-400" />,
    button: "Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Extend",
    price: "₹799.00",
    url: "#",
    list1: 50,
    list2: 10,
    list3: 60,
    list4: "Premium Support 24/7",
    icon: <TiTick className="text-gray-400" />,
    button: "Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Standard",
    price: "₹499.00",
    url: "#",
    list1: 40,
    list2: 5,
    list3: 30,
    list4: "Premium Support 24/7",
    icon: <TiTick className="text-gray-400" />,
    button: "Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Basic",
    price: "₹199.00",
    url: "#",
    list1: 30,
    list2: 3,
    list3: 15,
    list4: "Premium Support 24/7",
    icon: <TiTick className="text-gray-400" />,
    button: "Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Company",
    price: "₹399.00",
    url: "#",
    list1: 50,
    list2: 10,
    list3: 30,
    list4: "Premium Support 24/7",
    icon: <TiTick className="text-gray-400" />,
    button: "Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Enterprise",
    price: "₹550.00",
    url: "#",
    list1: 80,
    list2: 10,
    list3: 60,
    list4: "Premium Support 24/7",
    icon: <TiTick className="text-gray-400" />,
    button: "Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Business",
    price: "₹699.00",
    url: "#",
    list1: 100,
    list2: 10,
    list3: 90,
    list4: "Premium Support 24/7",
    icon: <TiTick className="text-gray-400" />,
    button: "Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
];

function Submitjobs() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const { user, packages, setPackages, postJobData, setPostJobData } =
    useUserContext();

  const handleButtonClick = () => {
    // setIsButtonVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => prevState === true && !prevState);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user?._id && !packages) {
        const res = await fetchPackages(user?._id);
        console.log(res);
        setPackages(res?.data?.packages);
      }
    };

    fetchData();
  }, [user?._id]);

  return (
    <div>
      {user?.postJobCredits ? (
        <PostNewJob toggleForm={toggleFormVisibility} />
      ) : (
        <div className=" w-full h-auto  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14 ">
          <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
            Packages{" "}
            <span className=" text-sm ms-5 text-end">
              Credits left:
              <span className=" text-green-600">{user?.postJobCredits}</span>
            </span>
          </h2>
          <p className=" text-red-600">
            Sorry, You don't have credit balance to post a job. Please purchase
            below packages to keep posting jobs.
          </p>
          <div className="w-full h-full  grid grid-cols-1 md:grid-cols-3 gap-4">
            {packages?.map((pckg, i) => (
              <div
                key={i}
                className="p-8 px-8  mt-6  bg-white border border-gray-200 rounded-lg shadow  dark:white hover:border-[#6ad61d] "
              >
                <div className=" flex h-full flex-col justify-between">
                  <div className=" text-gray-900 dark:text-white">
                    <h5 className="mb-4 text-xl font-medium text-[#6ad61d] dark:text-[#6ad61d]">
                      {pckg.name}
                    </h5>
                    <span className="text-3xl font-semibold text-gray-900">
                      &#8377;{pckg.price}
                    </span>

                    <ul role="list" className="space-y-5 my-7 w-full">
                      <li className="flex items-center ">
                        <TiTick className="text-gray-400" />
                        <span className="text-sm font-normal leading-tight text-gray-900 dark:text-gray-400 ms-3  ">
                          {pckg.postJobCredits &&
                            `${pckg.postJobCredits} job posting`}
                        </span>
                      </li>
                      {pckg.featuredJobCredits !== 0 && (
                        <li className="flex items-center">
                          <TiTick className="text-gray-400" />

                          <span className="text-sm  font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                            {`${pckg.featuredJobCredits} featured job`}
                          </span>
                        </li>
                      )}
                      {pckg.jobDisplayDuration && (
                        <li className="flex items-center">
                          <TiTick className="text-gray-400" />

                          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                            {pckg.jobDisplayDuration &&
                              `Job displayed for ${pckg.jobDisplayDuration} days`}
                          </span>
                        </li>
                      )}
                      {pckg.name !== "Standard" && (
                        <li className="flex items-center">
                          <TiTick className="text-gray-400" />

                          <span className="w-full text-sm  font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                            {pckg.name !== "Standard" && `Premium Support 24/7`}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="text-[#6ad61d] hover:text-white align-bottom bg-gray-100 hover:bg-[#6ad61d] focus:ring-4 focus:outline-none focus:ring-[#6ad61d] dark:bg-gray-100 dark:hover:bg-[#6ad61d] dark:focus:ring-[#6ad61d] font-medium rounded-lg text-sm px-3 py-4 inline-flex justify-center w-full text-center"
                    onClick={handleButtonClick}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Submitjobs;
