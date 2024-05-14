import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import PostNewJob from "./SubmitJobsComps/PostNewJob";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    name: "Standard",
    price: "₹49",
    url: "#",
    list1: "",
    list2: "",
    list3: "",
    list4: "",
    icon: "",
    button: "Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Extend",
    price: "₹799.00",
    url: "#",
    list1: "50 Job Posting",
    list2: "10 Featured job",
    list3: "Job displayed for 60 days",
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
    list1: "40 job posting",
    list2: "5 featured job",
    list3: "Job displayed for 30 days",
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
    list1: "30 job posting",
    list2: "3 featured job",
    list3: "Job displayed for 15 days",
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
    list1: "50 job posting",
    list2: "10 featured job",
    list3: "Job displayed for 30 days",
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
    list1: "80 job posting",
    list2: "10 featured job",
    list3: "Job displayed for 60 days",
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
    list1: "100 job posting",
    list2: "10 featured job",
    list3: "Job displayed for 90 day",
    list4: "Premium Support 24/7",
    icon: <TiTick className="text-gray-400" />,
    button: "Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
];

function Submitjobs() {
  // const navigate = useNavigate(); // Access the navigate function from React Router DOM

  // const handleButtonClick = () => {
  //   console.log('Button clicked')
  //   navigate('/postnewjob');
  // };
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsButtonVisible(false);
    setIsFormVisible(true);
  };

  return (
    <div>
      {!isButtonVisible && (
        <div className=" w-full h-auto  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14 ">
          <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
            Packages
          </h2>

          {/* <div className="w-full h-full flex flex-wrap justify-start gap-4"> */}
          <div className="w-full h-full  grid grid-cols-1 md:grid-cols-3 gap-4">
            {cardData?.map((stat, i) => (
              <div
                key={i}
                className="p-8 px-8  mt-6 first:h-80 bg-white border border-gray-200 rounded-lg shadow  dark:white hover:border-[#6ad61d] "
                //  className={`w-1/4 p-5 mt-6 px-16 flex-1 ${i === cardData.length - 1 ? 'flex-grow-0 flex-shrink-0 w-1/3' : 'w-11/12'} bg-white border border-gray-200 rounded-lg shadow dark:white hover:border-[#6ad61d]`}
              >
                <div className="">
                  <h5 className="mb-4 text-xl font-medium text-[#6ad61d] dark:text-[#6ad61d]">
                    {" "}
                    {stat.name}
                  </h5>
                  <div className=" items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold text-gray-900">
                      {stat.price}
                    </span>

                    <ul role="list" className="space-y-5 my-7 w-full">
                      <li className="flex items-center ">
                        {/* className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" */}
                        {stat.icon}
                        <span className="text-sm font-normal leading-tight text-gray-900 dark:text-gray-400 ms-3  ">
                          {stat.list1}
                        </span>
                      </li>
                      <li className="flex items-center">
                        {/* className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" */}
                        {stat.icon}
                        <span className="text-sm  font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                          {stat.list2}
                        </span>
                      </li>
                      <li className="flex items-center">
                        {/* className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" */}
                        {stat.icon}
                        <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                          {stat.list3}
                        </span>
                      </li>
                      <li className="flex items-center">
                        {/* className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" */}
                        {stat.icon}
                        <span className="w-full text-sm  font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                          {stat.list4}
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="text-[#6ad61d] hover:text-white bg-gray-100 hover:bg-[#6ad61d] focus:ring-4 focus:outline-none focus:ring-[#6ad61d] dark:bg-gray-100 dark:hover:bg-[#6ad61d] dark:focus:ring-[#6ad61d] font-medium rounded-lg text-sm px-3 py-4 inline-flex justify-center w-full text-center"
                      onClick={handleButtonClick}
                    >
                      {stat.button}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!isFormVisible && <PostNewJob />}
    </div>
  );
}

export default Submitjobs;
