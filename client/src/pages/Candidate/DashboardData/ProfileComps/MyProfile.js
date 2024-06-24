import React, { useState, useEffect, useRef } from "react";
import { useUserContext } from "../../../../context/userContext";
import SelectLanguage from "./SelectLanguage";
import SearchableList from "../../../../components/Utility/SearchableList";
import { qualifications } from "./SelectOptions";
import AlternateNumber from "./AlternateNumber";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
function MyProfile({
  profileInfo,
  onChange,
  handleLanguageChange,
  onImageChange,
  ageoptions,
  industryOptions,
  experienceoptions,
  genderoption,
  qualificationoptions,
  salaryoptions,
  addNumberClick,
  handleAlternateNumber,
  removeNumberClick,
}) {

  const [preview, setPreview] = useState({ logoImage: "", coverImage: "" });
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedQualification, setSelectedQualification] = useState("");
  // const [specializations, setSpecializations] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    if (profileInfo.logoImage && profileInfo.logoImage instanceof Blob) {
      const logoImageUrl = URL.createObjectURL(profileInfo.logoImage);
      setPreview((prev) => ({ ...prev, logoImage: logoImageUrl }));
    }
    if (profileInfo.coverImage && profileInfo.coverImage instanceof Blob) {
      const coverImageUrl = URL.createObjectURL(profileInfo.coverImage);
      setPreview((prev) => ({ ...prev, coverImage: coverImageUrl }));
    }
  }, [profileInfo.logoImage, profileInfo.coverImage]);
  // Remember to revoke the URL when the component unmounts or the image changes
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(preview.logoImage);
      URL.revokeObjectURL(preview.coverImage);
    };
  }, [preview]);

  const selectedQualification = qualificationoptions.find(
    (q) => q.label === profileInfo.qualification
  );
  const specializations = selectedQualification
    ? selectedQualification.specializations
    : [];

  // console.log(selectedQualification);

  return (
    <div
      className="bg-white p-3 md:p-6 md:px-10 rounded-lg rounded-s-none"
      // id="scrollIntoView"
      // ref={targetDivRef}
    >
      <h2 className=" text-lg text-[#202124]  mb-6 font-bold">My Profile</h2>

      <div className="pb-5 flex mb-7 gap-4">
        <input
          type="file"
          name="logoImage"
          id="logoImage"
          onChange={(e) => onImageChange(e, "logoImage")}
          className="w-full hidden text-sm text-gray-900 py-2.5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
        />
        <button
          type="button"
          onClick={() => document.getElementById("logoImage").click()}
          className="py-2 px-7 bg-[#6ad61d] hover:bg-blue-500 text-white rounded-lg"
        >
          Browse
        </button>
        {profileInfo?.logoImage && (
          <img
            className=" h-12"
            src={preview?.logoImage || `${baseUrl}/${profileInfo?.logoImage}`}
            alt="Logo Preview"
          />
        )}
      </div>

      <div className="">
        <div className="flex flex-wrap mx-2">
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-900 "
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={profileInfo?.name || ""}
              onChange={onChange}
              className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              placeholder="Enter Full Name"
              required
            />
          </div>

          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="dob"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Date Of Birth <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              name="dob"
              value={profileInfo?.dob || ""}
              onChange={onChange}
              placeholder="Enter Date of Birth"
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap mx-2">
          {/* Gender */}
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="gender"
              className="block text-sm font-bold text-gray-900"
            >
              Gender <span className="text-red-600">*</span>
            </label>
            <select
              name="gender"
              value={profileInfo?.gender || ""}
              onChange={onChange}
              required
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            >
              <option value="">None</option>
              {genderoption.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="age"
              className="block text-sm font-bold text-gray-900"
            >
              Age <span className="text-red-600">*</span>
            </label>
            <select
              name="age"
              value={profileInfo?.age || ""}
              onChange={onChange}
              required
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            >
              <option value="">None</option>
              {ageoptions.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap mx-2">
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-sm font-bold text-gray-900 "
            >
              Phone Number <span className="text-red-600">*</span>
            </label>
           
            <input
            type="text"
            name="phoneNumber"
            disabled
            value={"+" + profileInfo?.phoneNumber || ""}
            onChange={onChange}
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            placeholder="Enter Phone Number"
            required
            />
             
          </div>
        </div>

        <div className="mb-5 flex flex-wrap flex-col mx-2 ">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Alternate Phone Number
          </label>
          {profileInfo?.alternateNumbers?.map((number, i) => (
            <AlternateNumber
              key={i}
              index={i}
              onChange={handleAlternateNumber}
              number={number}
              onRemove={removeNumberClick}
            />
          ))}
          {profileInfo.alternateNumbers.length && (
            <button
              className="max-w-44   text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
              type="button"
              onClick={addNumberClick}
            >
              Add number
            </button>
          )}
        </div>

        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-gray-900"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={profileInfo?.email || ""}
            onChange={onChange}
            placeholder="Enter Email"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>

        <div className="flex flex-wrap mx-2">
          <SearchableList
            label="Qualification"
            name="qualification"
            value={profileInfo?.qualification || ""}
            onChange={onChange}
            array={qualificationoptions}
            required
          />
          <SearchableList
            label="Specialization"
            value={profileInfo.specialization || ""}
            onChange={onChange}
            name="specialization"
            array={specializations}
            required
          />

          {/* <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="specialization"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Specialization <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="specialization"
              value={user?.specialization || ""}
              onChange={onChange}
              placeholder="eg. Computer Science or IT"
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              required
            />
          </div> */}
        </div>

        <div className="flex flex-wrap mx-2 ">
          <SearchableList
            label="Experience Time"
            name="experience"
            value={profileInfo?.experience || ""}
            onChange={onChange}
            array={experienceoptions}
            required
          />

          <SearchableList
            label=" Salary Type"
            name="salaryType"
            value={profileInfo?.salaryType || ""}
            onChange={onChange}
            array={salaryoptions}
          />
        </div>

        <div className="flex flex-wrap mx-2">
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="salary"
              className="block mb-2 text-sm font-bold text-gray-900 "
            >
              Salary(Monthly)
            </label>
            <input
              type="text"
              name="salary"
              value={profileInfo?.salary || ""}
              onChange={onChange}
              className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              placeholder="Enter Salary"
            />
          </div>
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="ctc"
              className="block mb-2 text-sm font-bold text-gray-900 "
            >
              CTC(LPA)
            </label>
            <input
              type="text"
              name="ctc"
              value={profileInfo?.ctc || ""}
              onChange={onChange}
              className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              placeholder="Enter CTC eg. 5,00,000"
            />
          </div>
          <SearchableList
            label="Industry"
            name="industry"
            value={profileInfo?.industry || ""}
            onChange={onChange}
            array={industryOptions}
          />
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="jobTitle"
              className="block  text-sm font-bold text-gray-900 "
            >
              Job title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={profileInfo?.jobTitle || ""}
              onChange={onChange}
              className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              placeholder="eg. Software developer"
            />
          </div>
        </div>

        <div className="mb-5 w-full md:w-1/2 px-2 relative">
          <label
            htmlFor="languages"
            className="block text-sm font-bold text-gray-900"
          >
            Language
          </label>

          <SelectLanguage
            value={profileInfo?.languages}
            onChange={handleLanguageChange}
          />
        </div>

        <div className="flex flex-wrap mx-2">
          <label
            htmlFor="description"
            className="block text-sm font-bold text-gray-900"
          >
            Professional Summary
          </label>
          <div className="w-full bg-gray-100 rounded-b-lg dark:bg-white">
            <textarea
              id="editor"
              rows="10"
              name="description"
              value={profileInfo?.description || ""}
              onChange={onChange}
              className="block w-full p-3 text-sm text-black bg-white focus:outline-gray-200   border"
              placeholder=""
              required
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
