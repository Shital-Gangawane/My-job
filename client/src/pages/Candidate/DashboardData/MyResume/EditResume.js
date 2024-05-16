import React, { useState } from "react";

const baseUrl = "http://localhost:8000";

function EditResume({ resumeInfo, onChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-white p-6 px-10 rounded-lg">
      <h2 className=" text-lg text-[#202124]  mb-6 font-bold">My Resume</h2>

      <div className="pb-5">
        <input
          type="file"
          name="resume"
          onChange={(e) => onChange(e, "resume")}
          className="w-full text-sm text-gray-900 py-2.5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
        />
      </div>
    </div>
  );
}

export default EditResume;
