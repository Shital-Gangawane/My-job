import React from "react";

function Changepassword() {
  return (
    <div className=" relative w-full h-auto  lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <h1 className=" text-lg text-[#202124] lg:text-3xl  mb-10 font-medium">
        Change Password
      </h1>
      <div className="bg-white rounded-lg shadow-lg w-full flex items-center justify-start flex-col p-10 gap-8">
        <div className=" w-full">
          <label className=" block text-sm mb-1">Old password</label>
          <input
            type="password"
            className=" w-2/3 bg-[#f0f5f7] rounded-lg p-4  focus:outline-none"
          />
        </div>
        <div className=" w-full">
          <label className=" block text-sm mb-1">New password</label>
          <input className=" w-2/3 bg-[#f0f5f7] rounded-lg p-4  focus:outline-none" />
        </div>
        <div className=" w-full">
          <label className=" block text-sm mb-1">Retype password</label>
          <input className=" w-2/3 bg-[#f0f5f7] rounded-lg p-4  focus:outline-none" />
        </div>
        <button className="bg-[#6ad61d] text-white px-3 py-3 rounded-lg self-start">
          Change Password
        </button>
      </div>
    </div>
  );
}

export default Changepassword;
