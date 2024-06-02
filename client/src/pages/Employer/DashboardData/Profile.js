import React, { useState, useEffect } from "react";
import ProfileMembers from "./ProfileComps/ProfileMembers/ProfileMembers";
import MyProfile from "./ProfileComps/MyProfile";
import SocialNetworks from "./ProfileComps/SocialNetworks/SocialNetworks";
import ContactInformation from "./ProfileComps/ContactInformation";
import { fetchUser, saveProfile } from "../../../api/employer/axios";
import { useUserContext } from "../../../context/userContext";
import Loader from "../../../components/Utility/Loader";
import Success from "../../../components/Utility/Success";
import PageLoader from "../../../components/Utility/PageLoader";
import Changepassword from "./Changepassword";
import { useNavigate } from "react-router-dom";
import UploadDocuments from "../../Employer/DashboardData/ProfileComps/UploadDocuments";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const navigate = useNavigate();

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
    /* initial member structure */
  ]);
  const [socialNetworks, setSocialNetworks] = useState([
    /* initial social networks structure */
  ]);
  const [contactInfo, setContactInfo] = useState({
    /* initial contact info structure */
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchUser("employer", user?._id);
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

    if (user?._id) {
      fetchProfileData();
    }
  }, [user?._id]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (category) => {
    setProfileInfo((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((cat) => cat !== category)
        : [...prev.categories, category],
    }));
  };

  const handleImageChange = (e, imageType) => {
    setProfileInfo((prev) => ({
      ...prev,
      [imageType]: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    Object.keys(profileInfo).forEach((key) => {
      formData.append(key, profileInfo[key]);
    });

    formData.append("members", JSON.stringify(members));
    formData.append("socialNetworks", JSON.stringify(socialNetworks));
    Object.keys(contactInfo).forEach((key) => {
      formData.append(
        key,
        contactInfo[key] instanceof Object
          ? JSON.stringify(contactInfo[key])
          : contactInfo[key]
      );
    });

    try {
      const res = await saveProfile(formData, user?._id);
      if (res?.data?.success) {
        const userData = JSON.stringify(res?.data?.employer);
        sessionStorage.setItem("user", userData);
        setUser(res?.data?.employer);
        setOnSuccess(true);
        setTimeout(() => setOnSuccess(false), 1000);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to save profile data:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-auto lg:mt-14 px-4 lg:px-14 py-7 pb-14">
      {isLoading && <PageLoader />}
      {onSuccess && <Success text="Profile Updated!" />}
      <div className="flex md:gap-2">
        <h2
          onClick={() => setActiveTab("profile")}
          className={`text-lg ${
            activeTab === "profile"
              ? "border border-b-0 bg-white rounded-md rounded-b-none text-[#202124]"
              : "text-[#666667]"
          } font-medium py-2 px-1 md:px-4 cursor-pointer`}
        >
          Profile
        </h2>
        <h2
          onClick={() => setActiveTab("kyc")}
          className={`text-lg ${
            activeTab === "kyc"
              ? "border border-b-0 bg-white rounded-md rounded-b-none text-[#202124]"
              : "text-[#666667]"
          } font-medium py-2 px-1 md:px-4 cursor-pointer`}
        >
          KYC
        </h2>
        <h2
          onClick={() => setActiveTab("password")}
          className={`text-lg ${
            activeTab === "password"
              ? "border border-b-0 bg-white rounded-md rounded-b-none text-[#202124]"
              : "text-[#666667]"
          } font-medium py-2 px-1 md:px-4 cursor-pointer`}
        >
          Password
        </h2>
        <h2
          onClick={() => setActiveTab("logout")}
          className={`text-lg ${
            activeTab === "logout"
              ? "border border-b-0 bg-white rounded-md rounded-b-none text-[#202124]"
              : "text-[#666667]"
          } font-medium py-2 px-1 md:px-4 cursor-pointer`}
        >
          Logout
        </h2>
      </div>

      {activeTab === "profile" && (
        <form onSubmit={handleSubmit}>
          <MyProfile
            profileInfo={profileInfo}
            onChange={handleProfileChange}
            onImageChange={handleImageChange}
            handleCategoryChange={handleCategoryChange}
          />
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
            className="lg:w-auto mt-5 py-3 px-8 bg-[#6ad61d] hover:bg-blue-600 text-white rounded-lg transition duration-300 ease-in-out"
          >
            Save Profile
          </button>
        </form>
      )}
      {activeTab === "password" && <Changepassword />}
      {activeTab === "kyc" && <UploadDocuments />}
      {activeTab === "logout" && (
        <div className="w-full text-center p-7 bg-white rounded-lg shadow-lg">
          <button
            type="button"
            onClick={() => navigate(`/employer/dashboard/logout`)}
            className="md:w-96 mt-5 py-3 px-8 bg-red-500 hover:bg-red-400 text-white rounded-lg transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
