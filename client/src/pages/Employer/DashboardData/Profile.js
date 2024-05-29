import React, { useState, useEffect, useRef } from "react";
import ProfileMembers from "./ProfileComps/ProfileMembers/ProfileMembers";
import MyProfile from "./ProfileComps/MyProfile";
import SocialNetworks from "./ProfileComps/SocialNetworks/SocialNetworks";
import ContactInformation from "./ProfileComps/ContactInformation";
import { fetchUser, saveProfile } from "../../../api/employer/axios";
import { useUserContext } from "../../../context/userContext";
import axios from "axios";
import Loader from "../../../components/Utility/Loader";
import Success from "../../../components/Utility/Success";
import PageLoader from "../../../components/Utility/PageLoader";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const [profileInfo, setProfileInfo] = useState({
    name: "",
    companyName: "",
    website: "",
    foundedDate: "",
    companySize: "",
    categories: [],
    introVideoUrl: "",
    aboutCompany: "",
    logoImage: null,
    coverImage: null,
  });

  const [members, setMembers] = useState([
    {
      name: "",
      designation: "",
      experience: "",
      profileImage: "",
      fbUrl: "",
      twitterUrl: "",
      googleUrl: "",
      linkedinUrl: "",
      dribbleUrl: "",
      description: "",
    },
  ]);

  const [socialNetworks, setSocialNetworks] = useState([
    {
      network: "",
      url: "",
    },
  ]);

  const [contactInfo, setContactInfo] = useState({
    phoneNumber: "",
    email: "",
    address: "",
    country: "",
    location: {
      latitude: "",
      longitude: "",
    },
  });

  // Function to fetch profile data
  const fetchProfileData = async () => {
    try {
      setIsLoading(true);
      const res = await fetchUser("employer", user?._id);
      console.log(res);
      const data = res?.data?.employer;
      setProfileInfo({
        name: data.name || "",
        website: data.website || "",
        foundedDate: data.foundedDate || "",
        companySize: data.companySize || "",
        companyName: data.companyName || "",
        categories: data.categories[0]?.split(",") || [],
        introVideoUrl: data.introVideoUrl || "",
        aboutCompany: data.aboutCompany || "",
        logoImage: data.logoImage || null,
        coverImage: data.coverImage || null,
      });
      setMembers(data.members || []);
      setSocialNetworks(data.socialNetworks || []);
      setContactInfo({
        phoneNumber: user?.phoneNumber,
        email: data.email || "",
        address: data.address || "",
        country: data.country || "",
        location: data.location || { latitude: "", longitude: "" },
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch profile data:", error);
      setIsLoading(false);
    }
  };

  // UseEffect to fetch data on component mount
  useEffect(() => {
    if (user?._id) {
      fetchProfileData();
    }
  }, [user?._id]); // Ensure this runs only once on mount

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (category) => {
    // Check if the category is already selected
    if (profileInfo.categories.includes(category)) {
      // Remove the category if it's already in the array
      setProfileInfo((prev) => ({
        ...prev,
        categories: prev.categories.filter((cat) => cat !== category),
      }));
    } else {
      // Add the category if it's not in the array
      setProfileInfo((prev) => ({
        ...prev,
        categories: [...prev.categories, category],
      }));
    }
  };

  const handleImageChange = (e, imageType) => {
    console.log(e.target.files[0]);
    setProfileInfo((prev) => ({
      ...prev,
      [imageType]: e.target.files[0],
    }));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(profileInfo).forEach((key) => {
      formData.append(key, profileInfo[key]); // For files

      // formData.append(key, JSON.stringify(profileInfo[key])); // For regular fields, ensure conversion to JSON if necessary
    });

    // Append other data
    formData.append("members", JSON.stringify(members));
    formData.append("socialNetworks", JSON.stringify(socialNetworks));
    Object.keys(contactInfo).forEach((key) => {
      if (contactInfo[key] instanceof Object) {
        formData.append(key, JSON.stringify(contactInfo[key]));
      } else {
        formData.append(key, contactInfo[key]);
      }
    });

    const res = await saveProfile(formData, user?._id);
    console.log(res);

    if (res?.data?.success) {
      const userData = JSON.stringify(res?.data?.employer);
      sessionStorage.setItem("user", userData);
      setUser(res?.data?.employer);
      setIsLoading(false);
      setOnSuccess(true);
      setTimeout(() => {
        setOnSuccess(false);
      }, 1000);
    }
  };

  return (
    <div className=" relative w-full h-auto   lg:mt-14 px-4 lg:px-14 py-7  pb-14">
      {isLoading && <PageLoader />}
      {onSuccess && <Success text="Profile Updated!" />}
      <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit}>
        <MyProfile
          profileInfo={profileInfo}
          onChange={handleProfileChange}
          onImageChange={handleImageChange}
          handleCategoryChange={handleCategoryChange}
        />

        {/* <div className="bg-white p-6 mt-5 px-10 rounded-lg">
        <h2 className=" text-lg text-[#202124]  mb-6 font-bold">
          Profile Photo
        </h2>
        <button
          type="submit"
          className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-[#6ad61d] font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
        >
          Browser
        </button>
      </div> */}

        <ProfileMembers members={members} setMembers={setMembers} />
        <SocialNetworks
          socialNetworks={socialNetworks}
          setSocialNetworks={setSocialNetworks}
        />
        <ContactInformation
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
        />

        <button
          type="submit"
          className="lg:w-auto mt-5 py-3 px-8 bg-[#6ad61d] hover:bg-blue-600 text-white  rounded-lg transition duration-300 ease-in-out"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
