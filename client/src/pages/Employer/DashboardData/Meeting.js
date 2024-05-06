import React, { useState } from "react";
import ZoomSetting from "../../../components/Employer/DashboardData/ZoomSetting";

function Meeting() {
  const [meetings, setMeetings] = useState([]);
  const [isSettingOn, setIsSettingOn] = useState(false);
  return (
    <div className=" relative w-full h-auto  lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <div className=" flex items-center justify-between mb-10">
        <h1 className=" text-lg text-[#202124] lg:text-3xl  font-medium">
          Meetings
        </h1>
        <button
          onClick={() => setIsSettingOn(true)}
          className="bg-[#6ad61d] text-white px-7 py-3 rounded-lg"
        >
          Zoom Settings
        </button>
      </div>
      <div className=" w-full bg-white rounded-lg shadow-lg p-7 ">
        <p className="text-sm">
          {meetings?.length ? "Meeting list" : "No meetings found"}
        </p>
      </div>
      {isSettingOn && <ZoomSetting />}
    </div>
  );
}

export default Meeting;
