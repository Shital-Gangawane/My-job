import React from "react";

export default function AlternateNumber({ index, onChange, onRemove, number }) {
  const handleChange = (e) => {
    onChange(index, e.target.value);
  };

  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <div className="mb-5 w-full md:w-1/2 px-2 flex items-center">
      <input
        type="text"
        name={`alternateNumbers[${index}]`}
        value={number}
        onChange={handleChange}
        className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
        placeholder="Enter Phone Number"
      />
      {index > 0 && (
        <button
          type="button"
          onClick={handleRemove}
          className="ml-2 px-3 py-2 bg-red-500 text-white rounded-lg"
        >
          Remove
        </button>
      )}
    </div>
  );
}
