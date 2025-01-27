import React, { useState, useEffect, useRef } from "react";
import MyProfile from "./ProfileComps/MyProfile";
import ContactInformation from "./ProfileComps/ContactInformation";
import SocialNetworks from "../../Employer/DashboardData/ProfileComps/SocialNetworks/SocialNetworks";
// import { fetchUser } from "../../../api/candidate/axios";
import Loader from "../../../components/Utility/Loader";
// import { useCandidateContext } from "../../../context/candidateContext";
import { useUserContext } from "../../../context/userContext";
import {
  genderoption,
  ageoptions,
  qualifications,
  experienceoptions,
  salaryoptions,
  industryOptions,
  showprofileoptions,

} from "./ProfileComps/SelectOptions";
import { saveProfile } from "../../../api/candidate/axios";
import { fetchUser } from "../../../api/employer/axios";
import PageLoader from "../../../components/Utility/PageLoader";
import Changepassword from "./Changepassword";
import { useNavigate } from "react-router-dom";

function Profile({ candidate, setIsEditing }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [profileInfo, setProfileInfo] = useState({
    name: "",
    dob: "",
    gender: null,
    age: null,
    phoneNumber: "",
    alternateNumbers: [""],
    email: user?.email,
    qualification: null,
    specialization: null,
    experience: null,
    languages: [],
    salaryType: null,
    salary: "",
    ctc: "",
    categories: null,
    industry: null,
    showMyProfile: true,
    jobTitle: "",
    description: "",
    logoImage: "",
    jobAlert: null,
  });

  const [socialNetworks, setSocialNetworks] = useState([
    {
      network: "",
      url: "",
    },
  ]);

  const [contactInfo, setContactInfo] = useState({
    location: {
      latitude: "",
      longitude: "",
      address: "",
      city: "",
      state: "",
      pin: "",
      country: "",
    },
  });
 
  const [ulternateNumber, setUlternateNumber] = useState([
    {
      ulternateNumber:"",
    }
  ]);

  // Function to fetch profile data
  const fetchProfileData = async () => {
    if (user?._id) {
      setIsLoading(true);
      try {
        const res = await fetchUser("candidate", user?._id);
        // console.log(res);

        if (res?.data?.success) {
          const data = res?.data?.candidate;
          setProfileInfo({
            name: data.name || "",
            dob: data.dob || "",
            gender: data.gender || "",
            age: data.age || "",
            phoneNumber: data.phoneNumber || "",
            alternateNumbers: data.alternateNumbers[0]?.split(",") || [""],
            email: user?.email,
            qualification: data.qualification || null,
            specialization: data.specialization || null,
            experience: data.experience || null,
            languages: data.languages[0]?.split(",") || [],
            salaryType: data.salaryType || null,
            qualification: data.qualification || null,
            salary: data.salary || "",
            ctc: data.ctc || "",
            categories: data.categories || "",
            industry: data.industry || null,
            showMyProfile: data.showMyProfile || true,
            jobTitle: data.jobTitle || "",
            description: data.description || "",
            logoImage: data.logoImage || null,
          });

          setSocialNetworks(data.socialNetworks || []);
          setContactInfo({
            location: data.location || {
              latitude: "",
              longitude: "",
              address: "",
              city: "",
              state: "",
              pin: "",
              country: "",
            },
          });
          setUlternateNumber(data.ulternateNumber || []);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
        setIsLoading(false);
      }
    }
  };

  // UseEffect to fetch data on component mount
  useEffect(() => {
    fetchProfileData();
  }, [user]); // Ensure this runs only once on mount

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    // console.log(profileInfo);
    setProfileInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAlternateNumberChange = (index, value) => {
    setProfileInfo((prev) => {
      const newAlternateNumbers = [...prev.alternateNumbers];
      newAlternateNumbers[index] = value;
      return { ...prev, alternateNumbers: newAlternateNumbers };
    });
  };

  const addNumberClick = () => {
    setProfileInfo((prev) => ({
      ...prev,
      alternateNumbers: [...prev.alternateNumbers, ""],
    }));
  };

  const removeNumberClick = (index) => {
    setProfileInfo((prev) => {
      const newAlternateNumbers = prev.alternateNumbers.filter(
        (_, i) => i !== index
      );
      return { ...prev, alternateNumbers: newAlternateNumbers };
    });
  };

  const handleLanguageChange = (language) => {
    // Check if the language is already selected
    if (profileInfo.languages.includes(language)) {
      // Remove the language if it's already in the array
      setProfileInfo((prev) => ({
        ...prev,
        languages: prev.languages.filter((cat) => cat !== language),
      }));
    } else {
      // Add the language if it's not in the array
      setProfileInfo((prev) => ({
        ...prev,
        languages: [...prev.languages, language],
      }));
    }
  };

  const handleImageChange = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const validFormats = ["image/jpeg", "image/png", "image/gif"];
      const maxSizeInBytes = 2 * 1024 * 1024; // 2MB

      if (!validFormats.includes(file.type)) {
        alert("Invalid file format. Only JPEG, PNG, and GIF are allowed.");
        return;
      }

      if (file.size > maxSizeInBytes) {
        alert("File size exceeds the limit of 2MB.");
        return;
      }

      setProfileInfo((prev) => ({
        ...prev,
        [imageType]: file,
      }));
    }
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
    });
    console.log(ulternateNumber);

    formData.append("socialNetworks", JSON.stringify(socialNetworks));
    formData.append("ulternateNumber", JSON.stringify(ulternateNumber));
    
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
      const userData = JSON.stringify(res?.data?.candidate);
      sessionStorage.setItem("user", userData);
      setUser(res?.data?.candidate);
    }
    setIsLoading(false);
  };

  return (
    <div className=" w-full min-h-full h-auto relative  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14">
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <div className="flex md:gap-2">
            <h2
              onClick={() => setActiveTab("profile")}
              className={`text-lg   ${
                activeTab === "profile"
                  ? "border border-b-0 bg-white rounded-md rounded-b-none text-[#202124]"
                  : " text-[#666667]"
              }   font-medium py-2 px-1  md:px-4 cursor-pointer`}
            >
              Profile
            </h2>
            <h2
              onClick={() => setActiveTab("password")}
              className={`text-lg   ${
                activeTab === "password"
                  ? "border border-b-0 bg-white rounded-md rounded-b-none text-[#202124]"
                  : " text-[#666667]"
              }   font-medium py-2 px-1  md:px-4 cursor-pointer`}
            >
              Password
            </h2>
            <h2
              onClick={() => setActiveTab("logout")}
              className={`text-lg   ${
                activeTab === "logout"
                  ? "border border-b-0 bg-white rounded-md rounded-b-none text-[#202124]"
                  : " text-[#666667]"
              }   font-medium py-2 px-1 md:px-4 cursor-pointer`}
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
                handleLanguageChange={handleLanguageChange}
                genderoption={genderoption}
                ageoptions={ageoptions}
                qualificationoptions={qualifications}
                experienceoptions={experienceoptions}
                salaryoptions={salaryoptions}
                industryOptions={industryOptions}
                showprofileoptions={showprofileoptions}
                addNumberClick={addNumberClick}
                handleAlternateNumber={handleAlternateNumberChange}
                removeNumberClick={removeNumberClick}
                candidate
              />

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
          )}
          {activeTab === "password" && (
            <Changepassword setIsLoading={setIsLoading} />
          )}
          {activeTab === "logout" && (
            <div className=" w-full text-center p-7 bg-white rounded-lg shadow-lg">
              {/* <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
              Logout
            </h2> */}
              <button
                type="button"
                onClick={() => navigate(`/candidate/dashboard/logout`)}
                className="md:w-96  mt-5 py-3 px-8 bg-red-500 hover:bg-red-400 text-white  rounded-lg transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Profile;
