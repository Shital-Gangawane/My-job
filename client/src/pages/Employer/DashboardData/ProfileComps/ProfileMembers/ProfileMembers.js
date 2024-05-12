import React from "react";
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

export default function ProfileMembers({ members, setMembers }) {
  const handleMemberChange = (index, newState) => {
    const updatedMembers = members?.map((member, i) => {
      if (i === index) {
        return { ...member, ...newState };
      }
      return member;
    });
    setMembers(updatedMembers);
    console.log(members);
  };

  return (
    <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
      <h2 className="text-lg text-[#202124] mb-6 font-bold">Members</h2>
      <div className="flex flex-col gap-3">
        {members?.map((data, i) => (
          <ProfileMembersForm
            key={i}
            index={i}
            data={data}
            onChange={handleMemberChange}
            setMembers={setMembers}
          />
        ))}
      </div>
      <button
        className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
        onClick={() =>
          setMembers((prev) => [...prev, { ...membersInitialState }])
        }
      >
        Add Another Member
      </button>
    </div>
  );
}
