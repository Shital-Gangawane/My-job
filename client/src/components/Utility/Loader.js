import React from "react";

const Loader = () => {
  return (
    <div className="absolute w-full flex justify-center items-center h-full z-50 ">
      <div className="animate-spin rounded-full w-36 h-36 border-t-2 border-b-2 border-[#6ad61d] "></div>
    </div>
  );
};

export default Loader;
