import React from "react";

export default function ZoomSetting() {
  return (
    <div className=" w-screen h-screen fixed bg-black bg-opacity-70 inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg flex items-center justify-center flex-col w-2/5 p-10 gap-4">
        <h1 className=" text-2xl font-medium">Zoom API Setting</h1>
        <div className=" w-full">
          <label>Zoom Email</label>
          <input className=" w-full bg-[#f0f5f7] rounded-lg p-4  focus:outline-none" />
        </div>
        <div className=" w-full">
          <label>Zoom Client ID</label>
          <input className=" w-full bg-[#f0f5f7] rounded-lg p-4  focus:outline-none" />
        </div>
        <div className=" w-full">
          <label>Client Secret</label>
          <input className=" w-full bg-[#f0f5f7] rounded-lg p-4  focus:outline-none" />
        </div>
        <button className="bg-[#6ad61d] text-white w-full py-3 rounded-lg">
          Get Authorize with zoom
        </button>
      </div>
    </div>
  );
}
