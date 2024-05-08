import React, { useState } from "react";
import ProfileMembersForm from "./ProfileMembersForm";

const membersInitialState = {
  name: "",
  designation: "",
  experience: "",
  profileImage: "",
  fbUrl: "",
  twitterUrl: "",
  googleUrl: "",
  linkedinUrl: "",
  dribbleUrl: "",
  description: "",
};

export default function ProfileMembers() {
  const [stateArr, setStateArr] = useState([membersInitialState]);

  const handleMemberChange = (index, newState) => {
    const updatedMembers = stateArr.map((member, i) => {
      if (i === index) {
        return { ...member, ...newState };
      }
      return member;
    });
    setStateArr(updatedMembers);
  };

  console.log(stateArr);
  return (
    <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
      <h2 className="text-lg text-[#202124] mb-6 font-bold">Members</h2>
      <div className="flex flex-col gap-3">
        {stateArr.map((data, i) => (
          <ProfileMembersForm
            key={i}
            index={i}
            data={data}
            onChange={handleMemberChange}
            setStateArr={setStateArr}
          />
        ))}
      </div>
      <button
        className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
        onClick={() => setStateArr((prev) => [...prev, membersInitialState])}
      >
        Add Another Member
      </button>
    </div>
  );
}
