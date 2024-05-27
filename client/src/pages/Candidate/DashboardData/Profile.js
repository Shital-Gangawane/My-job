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
  qualificationoptions,
  experienceoptions,
  salaryoptions,
  categoriesoptions,
  showprofileoptions,
} from "./ProfileComps/SelectOptions";
import { saveProfile } from "../../../api/candidate/axios";
import { fetchUser } from "../../../api/employer/axios";

function Profile({ candidate, setIsEditing }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const [profileInfo, setProfileInfo] = useState({
    name: "",
    dob: "",
    gender: null,
    age: null,
    phoneNumber: "",
    email: user?.email,
    qualification: null,
    experience: null,
    languages: [],
    salaryType: null,
    salary: "",
    categories: null,
    showMyProfile: true,
    jobTitle: "",
    description: "",
    logoImage: "",
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
            email: user?.email,
            qualification: data.qualification || null,
            experience: data.experience || null,
            languages: data.languages[0].split(",") || [],
            salaryType: data.salaryType || null,
            qualification: data.qualification || null,
            salary: data.salary || "",
            categories: data.categories || "",
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
    setProfileInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    });

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
      const userData = JSON.stringify(res?.data?.candidate);
      sessionStorage.setItem("user", userData);
      setUser(res?.data?.candidate);
    }
    setIsLoading(false);
  };

  return (
    <div className=" w-full min-h-full h-auto relative  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
            Edit Profile
          </h2>

          <div>
            <MyProfile
              profileInfo={profileInfo}
              onChange={handleProfileChange}
              onImageChange={handleImageChange}
              handleLanguageChange={handleLanguageChange}
              genderoption={genderoption}
              ageoptions={ageoptions}
              qualificationoptions={qualificationoptions}
              experienceoptions={experienceoptions}
              salaryoptions={salaryoptions}
              categoriesoptions={categoriesoptions}
              showprofileoptions={showprofileoptions}
              candidate
            />
          </div>

          <div>
            <SocialNetworks
              socialNetworks={socialNetworks}
              setSocialNetworks={setSocialNetworks}
            />
          </div>

          <div>
            <ContactInformation
              contactInfo={contactInfo}
              setContactInfo={setContactInfo}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="lg:w-auto mt-5 py-3 px-8 bg-[#6ad61d] hover:bg-blue-600 text-white  rounded-lg transition duration-300 ease-in-out"
          >
            Save Profile
          </button>
        </>
      )}
    </div>
  );
}

export default Profile;
