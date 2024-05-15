import React, { useState } from "react";

const baseUrl = "http://localhost:8000";

function EditResume({ resumeInfo, onChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-white p-6 px-10 rounded-lg">
      <h2 className=" text-lg text-[#202124]  mb-6 font-bold">My Resume</h2>

      <div className="pb-5">
      <label
            htmlFor="categories"
            className="block text-sm mb-3 font-bold text-gray-900"
          >
            CV Attachment
          </label>
        <input
          type="file"
          name="resume"
          //  value={resumeInfo.resume}
          onChange={(e) => onChange(e, "resume")}
        //   className="w-full text-sm text-gray-900 py-2.5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
        className="w-full py-4 px-4  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]   transition duration-300 ease-in-out"
        />
      </div>

    </div>
  );
}

export default EditResume;
