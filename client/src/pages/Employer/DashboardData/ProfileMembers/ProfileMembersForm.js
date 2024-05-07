import React, { useState } from "react";

export default function ProfileMembersForm({
  index,
  data,
  onChange,
  setStateArr,
}) {
  const [isDropdownOn, setIsDropdownOn] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(index, { [name]: value });
  };

  return (
    <div className="flex flex-col gap-3">
      <p
        onClick={() => setIsDropdownOn(!isDropdownOn)}
        className="block w-full p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
      >
        Member {index + 1}
      </p>
      {isDropdownOn && (
        <div className="flex flex-col gap-3">
          {/* Input fields for each member attribute */}
          <InputField
            label="Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <InputField
            label="Designation"
            name="designation"
            value={data.designation}
            onChange={handleChange}
          />
          <InputField
            label="Experience"
            name="experience"
            value={data.experience}
            onChange={handleChange}
          />
          <InputField
            label="Profile Image URL"
            name="profileImage"
            value={data.profileImage}
            onChange={handleChange}
          />
          <InputField
            label="Facebook URL"
            name="fbUrl"
            value={data.fbUrl}
            onChange={handleChange}
          />
          <InputField
            label="Twitter URL"
            name="twitterUrl"
            value={data.twitterUrl}
            onChange={handleChange}
          />
          <InputField
            label="Google URL"
            name="googleUrl"
            value={data.googleUrl}
            onChange={handleChange}
          />
          <InputField
            label="LinkedIn URL"
            name="linkedinUrl"
            value={data.linkedinUrl}
            onChange={handleChange}
          />
          <InputField
            label="Dribbble URL"
            name="dribbleUrl"
            value={data.dribbleUrl}
            onChange={handleChange}
          />
          <TextArea
            label="Description"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
          {index !== 0 && (
            <button
              className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
              onClick={() =>
                setStateArr((prev) => {
                  return prev.filter((el, i) => i !== index);
                })
              }
            >
              Remove Member
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div className="flex justify-between">
      <label className="font-bold">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="block w-2/3 p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
      />
    </div>
  );
}

function TextArea({ label, name, value, onChange }) {
  return (
    <div className="flex justify-between">
      <label className="font-bold">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="block w-2/3 p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
        rows="4"
      ></textarea>
    </div>
  );
}
