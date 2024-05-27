import React, { useEffect } from "react";
import { useUserContext } from "../../../context/userContext";
import { TiTick } from "react-icons/ti";
import { fetchPackages } from "../../../api/employer/axios";

export default function PackageList({
  submitJobs,
  isPackageListOn,
  setIsPackageListOn,
}) {
  const { packages, user, setPackages } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      if (user?._id) {
        const res = await fetchPackages(user?._id);
        console.log(res);
        setPackages(res?.data?.packages);
      }
    };

    fetchData();
  }, [user?._id, isPackageListOn]);
  return (
    <div className=" w-full h-auto  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14 ">
      <h2
        className={`text-lg text-[#202124] lg:text-3xl ${
          submitJobs ? "mb-10" : "mb-2"
        } font-medium`}
      >
        Packages{" "}
        {submitJobs && (
          <span className=" text-sm ms-5 text-end">
            Credits left:
            <span className=" text-green-600">{user?.postJobCredits}</span>
          </span>
        )}
      </h2>
      {!submitJobs && (
        <p
          className=" text-blue-700 hover:underline cursor-pointer"
          onClick={() => setIsPackageListOn(false)}
        >
          Package list
        </p>
      )}
      {submitJobs && (
        <p className=" text-red-600">
          Sorry, You don't have credit balance to post a job. Please purchase
          below packages to keep posting jobs.
        </p>
      )}
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
                // onClick={handleButtonClick}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
