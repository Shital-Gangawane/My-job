import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function GoogleMeetSetting({ setIsSettingOn }) {
  return (
    <div className=" w-screen h-screen fixed bg-black bg-opacity-70 inset-0 flex items-center justify-center z-50">
      <div className="bg-white relative rounded-lg shadow-lg flex items-center justify-center flex-col w-2/5 p-10 gap-4">
        <AiOutlineClose
          onClick={() => setIsSettingOn(false)}
          size={30}
          className=" absolute right-2 top-2 cursor-pointer hover:text-gray-500"
        />
        <h1 className=" text-2xl font-medium">Google Meet Setting</h1>
        <div className=" w-full">
          <label>Google Account Email</label>
          <input className=" w-full bg-[#f0f5f7] rounded-lg p-4  focus:outline-none" />
        </div>
        <button className="bg-red-500 text-white w-full py-3 rounded-lg">
          Connect to Google
        </button>
      </div>
    </div>
  );
}
