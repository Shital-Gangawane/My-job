import React, { useState, useEffect, useRef } from "react";
import MyProfile from "./ProfileComps/MyProfile";
import ContactInformation from "./ProfileComps/ContactInformation";
import SocialNetworks from "../../Employer/DashboardData/ProfileComps/SocialNetworks/SocialNetworks";
// import ProfileMembers from "./ProfileComps/ProfileMembers/ProfileMembers";

// import MyProfile from "./ProfileComps/MyProfile";
// import SocialNetworks from "./ProfileComps/SocialNetworks/SocialNetworks";
// import ContactInformation from "./ProfileComps/ContactInformation";
// import networkoptions

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
