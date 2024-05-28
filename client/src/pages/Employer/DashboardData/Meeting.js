import React, { useState } from "react";
import { BiLogoZoom } from "react-icons/bi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { SiGooglemeet } from "react-icons/si";
import ZoomSetting from "../../../components/Employer/DashboardData/ZoomSetting";
import TeamsSetting from "../../../components/Employer/DashboardData/TeamsSetting";
import GoogleMeetSetting from "../../../components/Employer/DashboardData/GoogleMeetSetting";
import { CgSpinner } from "react-icons/cg";

function Meeting() {
  const [meetings, setMeetings] = useState([]);
  const [currentSetting, setCurrentSetting] = useState("");

  const handleSettingClick = (setting) => {
    setCurrentSetting(setting);
  };

  const getSettingComponent = () => {
    switch (currentSetting) {
      case "zoom":
        return <ZoomSetting setIsSettingOn={() => setCurrentSetting("")} />;
      case "teams":
        return <TeamsSetting setIsSettingOn={() => setCurrentSetting("")} />;
      case "googleMeet":
        return (
          <GoogleMeetSetting setIsSettingOn={() => setCurrentSetting("")} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-auto lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-lg text-[#202124] lg:text-3xl font-medium">
          Meetings
        </h1>
        <div>
          <button
            onClick={() => handleSettingClick("zoom")}
            className="bg-[#6ad61d] text-white px-7 py-3 rounded-lg mr-2"
          >
            <BiLogoZoom size={20} className="inline" />{" "}
            <span className=" text-xs">Zoom</span>
          </button>
          <button
            onClick={() => handleSettingClick("teams")}
            className="bg-blue-500 text-white px-7 py-3 rounded-lg mr-2"
          >
            <BsMicrosoftTeams size={20} className="inline" />{" "}
            <span className=" text-xs">Teams</span>
          </button>
          <button
            onClick={() => handleSettingClick("googleMeet")}
            className="bg-red-500 text-white px-7 py-3 rounded-lg"
          >
            <SiGooglemeet size={20} className="inline" />{" "}
            <span className=" text-xs">Google Meet</span>
          </button>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg shadow-lg p-7">
        <p className="text-sm">
          {meetings.length ? "Meeting list" : "No meetings found"}
        </p>
      </div>
      {getSettingComponent()}
    </div>
  );
}

export default Meeting;
