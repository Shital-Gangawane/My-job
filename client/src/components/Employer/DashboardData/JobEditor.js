import React from "react";
import PostNewJob from "../../../pages/Employer/DashboardData/SubmitJobsComps/PostNewJob";

export default function JobEditor({ data, setIsEditing }) {
  return (
    <div className=" w-full bg-black bg-opacity-65 absolute top-0 left-0 z-20 flex justify-center">
      <PostNewJob employer data={data} setIsEditing={setIsEditing} />
    </div>
  );
}
