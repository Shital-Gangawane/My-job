import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

export const Dropdown = ({ options, onSelect, landingpage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef(null);

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

  const handleCategoriesSelect = (categories) => {
    setSearchQuery("");
    onSelect(categories);
  };

  return (
    <div
      className={`dropdown absolute bottom-0  w-full ${
        !landingpage ? "" : "h-full"
      } `}
    >
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search Categories"
        className="w-full px-4 py-3  focus:outline-none focus:border-blue-500 bg-white border border-gray-300 shadow-md"
      />
      <motion.ul
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute z-10 mt-1 w-full max-h-48 overflow-y-auto overflow-x-hidden bg-white rounded-md shadow-lg"
      >
        {filteredOptions
          .sort((a, b) => a.localeCompare(b))
          .map((categories, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoriesSelect(categories)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-green-500 text-start"
            >
              {categories}
            </motion.li>
          ))}
      </motion.ul>
    </div>
  );
};
