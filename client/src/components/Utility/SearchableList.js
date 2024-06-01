import React, { useState, useEffect, useRef } from "react";

const SearchableList = ({ label, value, onChange, name, array, required }) => {
  const [filteredOptions, setFilteredOptions] = useState(array);
  const [search, setSearch] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setFilteredOptions(
      array.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, array]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleOptionClick = (value) => {
    setSearch("");
    setShowOptions(false);
    onChange({ target: { name, value } });
  };

  const handleDropdownToggle = () => {
    setShowOptions(!showOptions);
  };

  const handleBlur = (event) => {
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setShowOptions(false);
    }
  };

  return (
    <div className="mb-5 w-full md:w-1/2 px-2">
      <label htmlFor={name} className="block text-sm font-bold text-gray-900">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative" ref={dropdownRef} onBlur={handleBlur}>
        <button
          type="button"
          onClick={handleDropdownToggle}
          className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-none text-gray-900 border rounded-lg text-base text-start focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
        >
          {value ? value : "Select an option"}
        </button>
        {showOptions && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 p-3">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="border p-2 w-full rounded-md"
              autoFocus
              required={required}
            />
            <ul className="max-h-60 overflow-y-auto">
              {filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="p-2 hover:bg-gray-50 cursor-pointer hover:text-[#6ad61d]"
                  onMouseDown={() => handleOptionClick(option.label)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchableList;
