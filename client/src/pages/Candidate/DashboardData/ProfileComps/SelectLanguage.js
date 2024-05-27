import React, { useEffect, useState } from "react";
import { spokenLanguages } from "./languages";

function SelectLanguage({ onChange, value }) {
  const [languages, setLanguages] = useState(value);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isDeletingTag, setIsDeletingTag] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    setLanguages((prev) => [...prev, language]); //previous category and add new category
    onChange(language);
    setIsLanguageDropdownOpen(false);
  };

  const removeTagsHandler = (language) => {
    setIsDeletingTag(true);
    const updatedLanguages = languages.filter((el) => el !== language);
    setLanguages(updatedLanguages);
    onChange(updatedLanguages);
    setIsDeletingTag(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        event.target.closest(".dropdown") ||
        event.target.closest(".input-field")
      )
        return;

      setIsLanguageDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <div className=" flex flex-wrap input-field text-start  mb-5  w-full p-5 py-7 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]">
        {value.map((language, i) => (
          <div
            key={i}
            className="inline-block relative border p-1 px-5 rounded-sm bg-[#6ad61d] text-white text-xs mr-2 mb-2"
          >
            {language}
            <span
              onClick={() => onChange(language)}
              className="absolute right-1 -top-1 text-black cursor-pointer hover:text-white"
            >
              x
            </span>
          </div>
        ))}
        <div
          id="large-input"
          className="cursor-pointer flex-1 block w-full p-2 whitespace-nowrap  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          onClick={toggleLanguageDropdown}
        >
          {/* Trigger dropdown here */}
          Add Language
        </div>
      </div>

      {isLanguageDropdownOpen && (
        <ul className="input-field text-start bg-white h-36 overflow-y-auto border border-gray-300 rounded-lg absolute z-10 w-full">
          {spokenLanguages.map((language) => (
            <li
              key={language}
              onClick={() => handleLanguageSelect(language)}
              className="cursor-pointer hover:bg-gray-50 p-2"
            >
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectLanguage;
