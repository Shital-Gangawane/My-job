import React from "react";

function Deleteprofile() {
  return (
    // lg:mt-14 px-4 lg:px-14 py-7 pb-14
    <div className=" w-full h-auto  overflow-y-auto  pb-14">
      <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Delete Profile
      </h2>
      <div className=" w-full bg-white rounded-lg shadow-lg p-7 pb-14">
        <h2 className=" text-lg font-medium">
          Are you sure! You want to delete your profile.
        </h2>
        <p>This can't be undone!</p>
        <div className=" mt-6">
          <label className=" block text-gray-500">
            Please enter your login Password to confirm:
          </label>
          <input
            className=" bg-[#f0f5f7] w-[70%] rounded-lg p-5 block mt-5"
            placeholder="Password"
          />
          <button className=" bg-red-500 text-white p-4 px-8 rounded-lg text-sm  mt-5">
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deleteprofile;
