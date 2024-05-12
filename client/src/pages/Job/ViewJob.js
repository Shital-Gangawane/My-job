import React from "react";
import { useLocation } from "react-router-dom";
import { GiMoneyStack } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CgSandClock } from "react-icons/cg";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialPinterest } from "react-icons/ti";

export default function ViewJob() {
  const location = useLocation();
  const job = location.state; // Access job details from location state

  const dateFormatter = (str) => {
    const date = new Date(str);

    const year = date.getFullYear(); // 2024
    const month = date.toLocaleString("en-US", { month: "long" }); // "May"
    const day = date.getDate(); // 6

    // Ensuring two digits for the day
    const formattedDay = day.toString().padStart(2, "0");

    return `${month} ${formattedDay}, ${year}`; // "May 06, 2024"
  };

  return (
    <div className="flex flex-col  h-full w-full">
      <div className="bg-[#f5f6fb] w-full min-h-56 flex flex-col xl:flex-row justify-center items-center xl:items-center xl:justify-between md:px-10 py-8 xl:px-20">
        <div className=" whitespace-nowrap flex flex-col justify-center items-center xl:block">
          <h2 className="font-medium text-2xl mb-2 ps-1">{job.jobTitle}</h2>
          <div className="flex items-center justify-center xl:gap-3 flex-wrap">
            <p className=" text-zinc-500 text-sm mr-2 xl:mr-0">
              <CiLocationOn className=" inline align-top mr-2" size={20} />
              {job.isRemote ? "Remote" : "Onsite"}
            </p>
            <p className=" text-zinc-500 text-sm">
              <CiClock2 className=" inline align-top mr-2" size={20} />
              {dateFormatter(job.createdAt)}
            </p>
            <p className=" text-zinc-500 text-sm">
              <GiMoneyStack className=" inline align-top mr-2" size={20} />
              &#8377;{job.minSalary} - &#8377;{job.maxSalary} / month
            </p>
          </div>
        </div>
        <div className=" xl:pe-10">
          <button className=" bg-[#6ad61d] rounded-lg p-3 px-20 text-white hover:bg-blue-800">
            Apply Now
          </button>
        </div>
      </div>
      <div className=" flex justify-between w-full h-full bg-white p-5 md:px-10 xl:py-14 xl:px-20">
        <div>
          <h2 className=" text-lg font-medium mb-6">Job Description</h2>
          <p className=" text-zinc-500 text-sm mb-8">{job.jobDescription}</p>
          <div className=" flex items-center gap-1 xl:gap-3 flex-wrap">
            <h2 className=" font-medium">Share this post</h2>
            <button className=" bg-[#1967D2] text-white py-2 px-6 rounded-lg text-sm">
              <TiSocialFacebook className=" inline" size={20} />
              Facebook
            </button>
            <button className=" bg-[#BC91E8] text-white py-2 px-6 rounded-lg text-sm">
              <AiOutlineTwitter className=" inline" size={20} />
              Twitter
            </button>
            <button className=" bg-[#D93025] text-white py-2 px-6 rounded-lg text-sm">
              <TiSocialPinterest className=" inline" size={20} />
              Pinterest
            </button>
          </div>
        </div>
        <div className="bg-[#f5f6fb] rounded-lg p-8 min-w-96 hidden xl:block">
          <h2 className=" text-lg font-medium mb-6">Job Overview</h2>

          <div className=" flex mb-6">
            <CiClock2 className=" mr-4 text-[#6ad61d]" size={30} />
            <div>
              <h3 className=" font-medium">Date Posted</h3>
              <p className=" text-zinc-500 text-sm">
                {dateFormatter(job.createdAt)}
              </p>
            </div>
          </div>
          <div className=" flex mb-6">
            <CiLocationOn className=" mr-4 text-[#6ad61d]" size={30} />
            <div>
              <h3 className=" font-medium">Location</h3>
              <p className=" text-zinc-500 text-sm">
                {job.isRemote ? "Remote" : "Onsite"}
              </p>
            </div>
          </div>

          <div className=" flex mb-6">
            <GiMoneyStack className=" mr-4 text-[#6ad61d]" size={30} />
            <div>
              <h3 className=" font-medium">Offered Salary:</h3>
              <p className=" text-zinc-500 text-sm">
                &#8377;{job.minSalary} - &#8377;{job.maxSalary} / month
              </p>
            </div>
          </div>

          <div className=" flex mb-6">
            <CgSandClock className=" mr-4 text-[#6ad61d]" size={30} />
            <div>
              <h3 className=" font-medium">Expiration date</h3>
              <p className=" text-zinc-500 text-sm">
                {dateFormatter(job.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
