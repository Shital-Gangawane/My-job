import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

export const Dropdown = ({ options, onSelect, landingpage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef(null);
  // const { city } = useContext(JobContext);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleCitySelect = (city) => {
    setSearchQuery("");
    onSelect(city);
  };

  return (
    <div
      className={`dropdown absolute  px-7 z-20    w-full ${
        !landingpage ? " " : "h-full -bottom-10"
      } `}
    >
      <div className=" w-full  bg-white shadow-lg rounded-lg border-gray-300  p-7 ">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          autoFocus
          placeholder="Search City"
          className="w-full px-4 py-3 rounded-lg  outline-[#6ad61d]   bg-white border  border-[#6ad61d]  shadow-md"
        />

        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" z-10 mt-1 w-full max-h-48 overflow-y-auto overflow-x-hidden"
        >
          {filteredOptions
            .sort((a, b) => a.localeCompare(b))
            .map((city, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCitySelect(city)}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-green-500 text-start ${
                  index === 0 ? "text-green-500" : ""
                }`}
              >
                {city}
              </motion.li>
            ))}
        </motion.ul>
      </div>
    </div>
  );
};
