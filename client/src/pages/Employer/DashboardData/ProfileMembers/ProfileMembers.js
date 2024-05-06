import React from "react";
import { useMembersContext } from "../../../../context/profileMembersContext";
import { membersInitialState } from "../../../../utils/initialStates";
import ProfileMembersForm from "./ProfileMembersForm";


export default function ProfileMembers() {

  const { state, addNewMemberState } = useMembersContext();

  return (
    <div>
  <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
        <h2 className=" text-lg text-[#202124]  mb-6 font-bold">Members</h2>
        {state.Members.map((data, i) => (
        <ProfileMembersForm key={i} index={i} />
      ))}
     

      </div>

      <button
        className=" text-lg font-bold text-blue-800"
        onClick={() => addNewMemberState("members", membersInitialState)}
      >
        Add Another Member +
      </button>
   
    </div>
  );
}
