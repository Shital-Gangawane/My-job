import React, { useState } from "react";
import PackageList from "../../../components/Employer/DashboardData/PackageList";

function Packages() {
  const [packages, setPackages] = useState([]);
  const [isPackageListOn, setIsPackageListOn] = useState(false);
  return (
    <>
      {!isPackageListOn ? (
        <div className=" w-full h-auto  lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
          <div className=" flex items-center justify-between mb-10">
            <h1 className=" text-lg text-[#202124] lg:text-3xl  font-medium">
              My Packages
            </h1>
            <button
              type="button"
              onClick={() => setIsPackageListOn(!isPackageListOn)}
              className="lg:w-auto mt-5 py-3 px-8 bg-[#6ad61d] hover:bg-blue-600 text-white  rounded-lg transition duration-300 ease-in-out"
            >
              Purchase
            </button>
          </div>
          <div className=" w-full bg-white rounded-lg shadow-lg p-5 ">
            <div className="  p-4 rounded-lg ">
              <p className="  text-sm">
                {packages?.length ? "Package list" : "Don't have any packages"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <PackageList
          isPackageListOn={isPackageListOn}
          setIsPackageListOn={setIsPackageListOn}
        />
      )}
    </>
  );
}

export default Packages;
