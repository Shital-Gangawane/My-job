import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Dropdown } from "../../pages/LandingPage/Dropdown";
import { Dropdown } from "../../../LandingPage/Dropdown";
import { skillsByCategory } from "../../../../components/Admin/skillsByCategory";
// import { Dropdown } from "./DropdownForCategories";

function SelectCategories({ onChange, value }) {
  const [categories, setCategories] = useState([]);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isDeletingTag, setIsDeletingTag] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setCategories((prev) => [...prev, category]);
    setIsCategoryDropdownOpen(false);
    onChange(category);
  };
  const removeTagsHandler = (tag, setState) => {
    setIsDeletingTag(true);
    setState((prev) => prev?.filter((el) => el !== tag));
    setIsDeletingTag(false);
  };

  //   const handleOutsideClick = (event) => {
  //     if (event.target.closest(".dropdown")) return;
  //     setIsCategoriesDropdownOpen(false);
  //   };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        event.target.closest(".dropdown") ||
        event.target.closest(".input-field")
      )
        return;

      setIsCategoryDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isDeletingTag) {
      setIsCategoryDropdownOpen(false);
    }
  }, [isDeletingTag]);

  return (
    <div className="relative">
      <div className="flex flex-wrap">
        {value?.map((category, i) => (
          <div
            key={i}
            className="inline-block relative border p-1 px-5 rounded-sm bg-[#6ad61d] text-white text-xs"
          >
            {category}
            <span
              onClick={() => onChange(category)} // This will toggle the category
              className="absolute right-1 -top-1 text-black cursor-pointer hover:text-white"
            >
              x
            </span>
          </div>
        ))}
      </div>
      <div
        id="large-input"
        className="text-start flex-wrap cursor-pointer mb-5 block w-full p-5 py-7 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
        onClick={toggleCategoryDropdown}
      >
        {/* Trigger dropdown here */}
      </div>
      {isCategoryDropdownOpen && (
        <ul className="input-field text-start" required>
          {Object.keys(skillsByCategory).map((cat) => (
            <li
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className="cursor-pointer hover:bg-gray-50"
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectCategories;
