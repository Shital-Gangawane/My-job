import React, { useEffect, useState } from "react";
import { BsTypeBold } from "react-icons/bs";
import { BiItalic } from "react-icons/bi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import { PiLinkBreakBold } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { MdFormatIndentDecrease } from "react-icons/md";
import { MdFormatIndentIncrease } from "react-icons/md";
import { MdContentPaste } from "react-icons/md";
import { MdFormatClear } from "react-icons/md";
import { MdInsertPageBreak } from "react-icons/md";
import { BsTable } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { LuUndo2 } from "react-icons/lu";
import { GrRedo } from "react-icons/gr";
// import SelectCategories from "./SelectCategories/SelectCategories";
import SelectCategories from "../SelectCategories/SelectCategories";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
function MyProfile({
  profileInfo,
  onChange,
  onImageChange,
  handleCategoryChange,
}) {
  const [preview, setPreview] = useState({ logoImage: "", coverImage: "" });

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

      <div>
        {/* Logo Image Upload */}
        <div className="pb-5">
          <label
            htmlFor="logoImage"
            className="block text-sm font-bold text-gray-900"
          >
            Logo Image
          </label>
          <input
            type="file"
            name="logoImage"
            id="logoImage"
            onChange={(e) => onImageChange(e, "logoImage")}
            className="w-full text-sm text-gray-900 py-2.5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
          {profileInfo?.logoImage && (
            <img
              className=" h-10"
              src={preview?.logoImage || `${baseUrl}/${profileInfo?.logoImage}`}
              alt="Logo Preview"
            />
          )}
        </div>

        {/* Cover Photo Upload */}
        <div className="pb-5">
          <label
            htmlFor="coverImage"
            className="block text-sm font-bold text-gray-900"
          >
            Cover Photo
          </label>
          <input
            type="file"
            name="coverImage"
            id="coverImage"
            onChange={(e) => onImageChange(e, "coverImage")}
            className="w-full text-sm text-gray-900 py-2.5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
          {profileInfo?.coverImage && (
            <img
              className=" h-10"
              src={
                preview?.coverImage || `${baseUrl}/${profileInfo?.coverImage}`
              }
              alt="Cover Preview"
            />
          )}
        </div>

        {/* Employer Name Input */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-bold text-gray-900"
          >
            Employer Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={profileInfo?.name}
            onChange={onChange}
            className="block w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#6ad61d] focus:border-[#6ad61d]"
            placeholder="Enter employer name"
            required
          />
        </div>

        {/* Company Name Input */}
        <div className="mb-5">
          <label
            htmlFor="companyName"
            className="block text-sm font-bold text-gray-900"
          >
            Company Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={profileInfo?.companyName}
            onChange={onChange}
            className="block w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#6ad61d] focus:border-[#6ad61d]"
            placeholder="Enter employer name"
            required
          />
        </div>

        {/* Website Input */}
        <div className="mb-5">
          <label
            htmlFor="website"
            className="block text-sm font-bold text-gray-900"
          >
            Website
          </label>
          <input
            type="text"
            name="website"
            value={profileInfo?.website}
            onChange={onChange}
            className="block w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#6ad61d] focus:border-[#6ad61d]"
            placeholder="https://example.com"
          />
        </div>

        {/* Founded Date Input */}
        <div className="mb-5">
          <label
            htmlFor="foundedDate"
            className="block text-sm font-bold text-gray-900"
          >
            Founded Date <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="foundedDate"
            value={profileInfo?.foundedDate}
            onChange={onChange}
            className="block w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#6ad61d] focus:border-[#6ad61d]"
            required
          />
        </div>

        {/* Company Size Input */}
        <div className="mb-5">
          <label
            htmlFor="companySize"
            className="block text-sm font-bold text-gray-900"
          >
            Company Size <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="companySize"
            value={profileInfo?.companySize}
            onChange={onChange}
            className="block w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#6ad61d] focus:border-[#6ad61d]"
            placeholder="Enter company size"
            required
          />
        </div>

        {/* Categories Input */}
        <div className="mb-5">
          <label
            htmlFor="categories"
            className="block text-sm font-bold text-gray-900"
          >
            Categories
          </label>
          <SelectCategories
            value={profileInfo?.categories}
            onChange={handleCategoryChange}
          />
        </div>

        {/* Introduction Video URL Input */}
        <div className="mb-5">
          <label
            htmlFor="introVideoUrl"
            className="block text-sm font-bold text-gray-900"
          >
            Introduction Video URL
          </label>
          <input
            type="text"
            name="introVideoUrl"
            value={profileInfo?.introVideoUrl}
            onChange={onChange}
            className="block w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#6ad61d] focus:border-[#6ad61d]"
            placeholder="https://youtu.be/example"
          />
        </div>

        <h2 className=" text-lg text-[#202124]  mb-6 font-bold">
          About Company <span className="text-red-600">*</span>
        </h2>
        <div className="w-full bg-gray-100 rounded-b-lg dark:bg-white">
          <textarea
            id="editor"
            rows="10"
            name="aboutCompany"
            value={profileInfo?.aboutCompany}
            onChange={onChange}
            className="block w-full p-3 text-sm text-black bg-white focus:outline-gray-200   border"
            placeholder=""
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
