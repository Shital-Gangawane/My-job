import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { skillsByCategory } from "../../../../components/Admin/skillsByCategory";
import { FaChevronDown } from "react-icons/fa";
// import { Dropdown } from "./DropdownForCategories";

function SelectCategories() {
    const [categories, setCategories] = useState([]);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isDeletingTag, setIsDeletingTag] = useState(false);

   const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setCategories((prev) => [...prev, category]); //previous category and add new category 
    setIsCategoryDropdownOpen(false);
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
      <div>
         <div className="relative">
         <div
         id="large-input"
         className="text-start  flex-wrap cursor-pointer mb-5  block w-full py-7 p-1 px-3  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
         onClick={toggleCategoryDropdown}
       >
              <div className=" flex flex-wrap">
                {categories?.length
                  ? categories?.map((category, i) => (
                      <div
                        key={i}
                        className=" inline-block relative border p-1 px-5 rounded-full bg-[#6ad61d] text-white text-xs"
                      >
                        {category}
                        <p
                          onClick={() =>
                            removeTagsHandler(category, setCategories)
                          }
                          className=" absolute right-2 top-1 text-black cursor-pointer hover:text-white"
                        >
                          x
                        </p>
                      </div>
                    ))
                  : ""}
              </div>
              <FaChevronDown className='ms-auto items-center ' size={12}/>
             
              
                 {/* Categories */}
              </div>
              {isCategoryDropdownOpen && (
                <ul
                  value=""
                  // onChange={(e) => handleCategorySelect(e.target.value)}
                  className="input-field text-start"
                  required
                >
                  {Object.keys(skillsByCategory).map((cat) => (
                    <li
                      key={cat}
                      value={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className=" cursor-pointer hover:bg-gray-50"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
      </div>
    )
}

export default SelectCategories