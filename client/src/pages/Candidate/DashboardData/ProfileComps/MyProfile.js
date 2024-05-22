import React, { useState, useEffect, useRef } from "react";
import ProfileOptionSection from "./ProfileOptionSection";
import { useUserContext } from "../../../../context/userContext";
// import { ageoptions, categoriesoptions, experienceoptions, genderoption, qualificationoptions, salaryoptions, showprofileoptions } from './SelectOptions'
// import { BsTypeBold } from "react-icons/bs";
// import { BiItalic } from "react-icons/bi";
// import { RiDoubleQuotesL } from "react-icons/ri";
// import { MdFormatListBulleted } from "react-icons/md";
// import { MdFormatListNumbered } from "react-icons/md";
// import { FaAlignLeft } from "react-icons/fa";
// import { FaAlignCenter } from "react-icons/fa";
// import { FaAlignRight } from "react-icons/fa";
// import { FaAlignJustify } from "react-icons/fa";
// import { PiLinkSimpleBold } from "react-icons/pi";
// import { PiLinkBreakBold } from "react-icons/pi";
// import { FaCaretDown } from "react-icons/fa";
// import { MdFormatIndentDecrease } from "react-icons/md";
// import { MdFormatIndentIncrease } from "react-icons/md";
// import { MdContentPaste } from "react-icons/md";
// import { MdFormatClear } from "react-icons/md";
// import { MdInsertPageBreak } from "react-icons/md";
// import { BsTable } from "react-icons/bs";
// import { FaQuestionCircle } from "react-icons/fa";
// import { LuUndo2 } from "react-icons/lu";
// import { GrRedo } from "react-icons/gr";
// import SelectCategories from "./SelectCategories/SelectCategories";
// import SelectCategories from "../SelectCategories/SelectCategories"

const baseUrl = "http://localhost:8000";
function MyProfile({
  profileInfo,
  onChange,
  onImageChange,
  ageoptions,
  categoriesoptions,
  experienceoptions,
  genderoption,
  qualificationoptions,
  salaryoptions,
  showprofileoptions,
}) {
  const [preview, setPreview] = useState({ logoImage: "", coverImage: "" });
  const [searchTerm, setSearchTerm] = useState("");
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

  return (
    <div
      className="bg-white p-6 px-10 rounded-lg"
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
          onClick={() => document.getElementById("logoImage").click()}
          className="py-2 px-7 bg-[#6ad61d] hover:bg-blue-500 text-white rounded-lg"
        >
          Browse
        </button>
        {profileInfo?.logoImage && (
          <img
            className=" h-12"
            src={
              preview?.logoImage ||
              `${baseUrl}/uploads/${profileInfo?.logoImage}`
            }
            alt="Logo Preview"
          />
        )}
      </div>

      <form className="">
        <div className="flex flex-wrap mx-2">
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-900 "
            >
              Full Name
            </label>
            <input
              type="text"
              id="large-input"
              name="name"
              value={profileInfo?.name}
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
              Date Of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={profileInfo?.dob}
              onChange={onChange}
              id="large-input"
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
              Gender
            </label>
            <select
              name="gender"
              value={profileInfo.gender}
              onChange={onChange}
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
              Age
            </label>
            <select
              name="age"
              value={profileInfo.age}
              onChange={onChange}
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
              Phone Number
            </label>
            <input
              type="text"
              id="large-input"
              name="phoneNumber"
              disabled
              value={"+" + profileInfo?.phoneNumber}
              onChange={onChange}
              className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              onChange={onChange}
              id="large-input"
              placeholder="Enter Email"
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap mx-2">
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="qualification"
              className="block text-sm font-bold text-gray-900"
            >
              Qualification
            </label>
            <select
              name="qualification"
              value={profileInfo.qualification}
              onChange={onChange}
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            >
              <option value="">None</option>
              {qualificationoptions.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="experience"
              className="block text-sm font-bold text-gray-900"
            >
              Experience Time
            </label>
            <select
              name="experience"
              value={profileInfo.experience}
              onChange={onChange}
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            >
              <option value="">None</option>
              {experienceoptions.map((option) => (
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
              htmlFor="languages"
              className="block text-sm font-bold text-gray-900"
            >
              Languages
            </label>
            <select
              name="languages"
              value={profileInfo.languages}
              onChange={onChange}
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            >
              <option value="">None</option>
              {/* {salaryoptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))} */}
            </select>
          </div>
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="salaryType"
              className="block text-sm font-bold text-gray-900"
            >
              Salary Type
            </label>
            <select
              name="salaryType"
              value={profileInfo.salaryType}
              onChange={onChange}
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            >
              <option value="">None</option>
              {salaryoptions.map((option) => (
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
              htmlFor="salary"
              className="block mb-2 text-sm font-bold text-gray-900 "
            >
              Salary(Monthly)
            </label>
            <input
              type="text"
              id="large-input"
              name="salary"
              value={profileInfo?.salary}
              onChange={onChange}
              className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              placeholder="Enter Salary"
              required
            />
          </div>
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              htmlFor="categories"
              className="block text-sm font-bold text-gray-900"
            >
              Categories
            </label>
            <select
              name="categories"
              value={profileInfo.categories}
              onChange={onChange}
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            >
              <option value="">None</option>
              {categoriesoptions.map((option) => (
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
              htmlFor="showMyProfile"
              className="block text-sm font-bold text-gray-900"
            >
              Show My Profile
            </label>
            <select
              name="showMyProfile"
              value={profileInfo.showMyProfile}
              onChange={onChange}
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            >
              <option value="">None</option>
              {showprofileoptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap mx-2">
          <label
            htmlFor="description"
            className="block text-sm font-bold text-gray-900"
          >
            Description
          </label>
          <div className="w-full bg-gray-100 rounded-b-lg dark:bg-white">
            <textarea
              id="editor"
              rows="10"
              name="description"
              value={profileInfo?.description}
              onChange={onChange}
              className="block w-full p-3 text-sm text-black bg-white focus:outline-gray-200   border"
              placeholder=""
              required
            ></textarea>
          </div>
        </div>

        {/*---------------- Word TextArea section------------------- */}

        {/* <form className="flex flex-wrap">
            <div className="flex flex-wrap w-full  border  bg-white border-gray-300">
              */}
        {/* <div className="flex flex-wrap w-full items-start  py-1 border-b  ">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800 inline-flex items-start "
                  type="button"
                >
                  file <FaCaretDown />
                </button>

                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>print</li>
                  </ul>
                </div>

                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-gray-600 text-sm px-2 py-1 focus:ring-2 focus:outline-none  dark:focus:ring-blue-800 inline-flex items-start"
                >
                  Edit <FaCaretDown />
                </button>

                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        print
                      </a>
                    </li>
                  </ul>
                </div>

                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800 inline-flex items-start"
                  type="button"
                >
                  View <FaCaretDown />
                </button>

                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        print
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800  inline-flex items-start"
                  type="button"
                >
                  Insert <FaCaretDown />
                </button>

                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        print
                      </a>
                    </li>
                  </ul>
                </div>

                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800  inline-flex items-start"
                  type="button"
                >
                  Format <FaCaretDown />
                </button>

                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        print
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800 inline-flex items-start"
                  type="button"
                >
                  Tools <FaCaretDown />
                </button>

                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        print
                      </a>
                    </li>
                  </ul>
                </div>

                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800  inline-flex items-start"
                  type="button"
                >
                  Table <FaCaretDown />
                </button>

                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        print
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
        {/* first icon row */}
        {/* <div className="w-full flex flex-wrap items-center justify-between px-3 py-1  bg-gray-100 border-gray-300 sm:divide-x sm:rtl:divide-x-reverse text-sm sm:text-base">
                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600 text-sm sm:text-base">
                  <div className=" flex  flex-wrap  items-center space-x-1 rtl:space-x-reverse text-sm sm:text-base">
                    <form className="max-w-sm text-sm sm:text-base">
                      <select
                        id="countries"
                        className="text-gray-600 bg-white  focus:ring-2 focus:outline-none text-sm px-1 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800"
                      >
                        <FaCaretDown />
                        <option selected>Heading 1</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </form>

                    <button
                      data-tooltip-target="tooltip-default"
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800 dark:hover:ring-blue-800"
                    >
                      <BsTypeBold size={20} />
                    </button>

                    <div
                      id="tooltip-default"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Bold (ctr+B)
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <BiItalic size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <RiDoubleQuotesL size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <MdFormatListBulleted size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <MdFormatListNumbered size={20} />
                    </button>

                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <FaAlignLeft />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <FaAlignCenter />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <FaAlignRight />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <FaAlignJustify />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <PiLinkSimpleBold size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <PiLinkBreakBold size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <LuUndo2 size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <GrRedo size={20} />
                    </button>
                  </div>
                </div>
              </div> */}

        {/* Second icon row */}
        {/* <div className=" flex flex-wrap w-full items-center justify-between px-3  border-b bg-gray-100 border-gray-300 sm:divide-x sm:rtl:divide-x-reverse text-sm sm:text-base">
                <div className=" flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600 text-sm sm:text-base">
                  <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse text-sm sm:text-base">
                    <form className="flex flex-wrap max-w-sm text-sm sm:text-base">
                      <select
                        id="countries"
                        className="text-gray-600 bg-white  focus:ring-2 focus:outline-none text-sm px-1 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800"
                      >
                        <option selected>Arial Blank</option>
                        <option value="US">Monospace</option>
                        <option value="CA">arial</option>
                        <option value="FR">Times in romans</option>
                        <option value="DE">impacts</option>
                        <option value="DE">Terminal</option>
                      </select>
                    </form>
                    <form className="max-w-sm ">
                      <select
                        id="countries"
                        className="text-gray-600 bg-white px-6 ms-2 focus:ring-2 focus:outline-none text-sm text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800"
                      >
                        <option selected>12pt</option>
                        <option value="US">14pt</option>
                        <option value="CA">16pt</option>
                        <option value="FR">18pt</option>
                        <option value="DE">20pt</option>
                      </select>
                    </form>
                    <button
                      data-tooltip-target="tooltip-default"
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <MdFormatIndentDecrease size={20} />
                    </button>

                    <div
                      id="tooltip-default"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Decrease Indent (ctr+B)
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <MdFormatIndentIncrease size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <MdContentPaste size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <MdFormatClear size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <MdInsertPageBreak size={20} />
                    </button>

                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <BsTable size={20} />
                    </button>
                    <button
                      type="button"
                      className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                    >
                      <FaQuestionCircle size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-b-lg dark:bg-white">
                <textarea
                  id="editor"
                  rows="10"
                  className="block w-full px-0 text-sm bg-white  dark:text-white dark:placeholder-gray-400 border-none"
                  placeholder=""
                  required
                ></textarea>
              </div>

            </div>
          </form> */}
      </form>
    </div>
  );
}

export default MyProfile;
