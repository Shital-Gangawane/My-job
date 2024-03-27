import React, { useState } from "react";
import PostJob from "../../components/Admin/PostJob";

export default function Jobs() {
  const [isAddJobOn, setIsAddJobOn] = useState(false);
  return (
    <div className=" relative w-full">
      <button onClick={() => setIsAddJobOn(true)} className=" bg-green-400 p-3">
        Post job
      </button>
      {isAddJobOn && <PostJob setIsAddJobOn={setIsAddJobOn} />}
    </div>
  );
}
