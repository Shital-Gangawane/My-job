import React, { useState } from "react";

function Packages() {
  const [packages, setPackages] = useState([]);
  return (
    <div className=" w-full h-auto  lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        My Packages
      </h1>
      <div className=" w-full bg-white rounded-lg shadow-lg p-5 ">
        <div className="  p-4 rounded-lg ">
          <p className="  text-sm">
            {packages?.length ? "Package list" : "Don't have any packages"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Packages;
