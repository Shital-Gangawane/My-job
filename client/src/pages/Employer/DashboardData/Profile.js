import React, { useState, useEffect, useRef } from "react";
import ProfileMembers from "./ProfileComps/ProfileMembers/ProfileMembers";
import MyProfile from "./ProfileComps/MyProfile";
import SocialNetworks from "./ProfileComps/SocialNetworks/SocialNetworks";
import ContactInformation from "./ProfileComps/ContactInformation";


function Profile() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access form data using e.target.elements
    console.log("Form submitted");
  };
  

  return (
    <div className=" w-full h-auto  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14">
      <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Edit Profile
      </h2>

      <div>
      <MyProfile/>

      </div>

      <div className="bg-white p-6 mt-5 px-10 rounded-lg">
        <h2 className=" text-lg text-[#202124]  mb-6 font-bold">
          Profile Photo
        </h2>
        <button
          type="submit"
          className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-[#6ad61d] font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
        >
          Browser
        </button>
      </div>

      <div>
        <ProfileMembers />
      </div>

      <div>
        <SocialNetworks/>
      </div>

     <div>
      <ContactInformation/>
     </div>

      <button
        type="submit"
        className="lg:w-auto mt-5 py-3 px-8 bg-[#6ad61d] hover:bg-blue-600 text-white  rounded-lg transition duration-300 ease-in-out"
      >
        Save Profile
      </button>
    </div>
  );
}

export default Profile;
