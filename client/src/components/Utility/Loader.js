import React from "react";

const Loader = () => {
  return (
    <div className="absolute w-full flex justify-center items-center h-full z-50">
      <div className="animate-spin rounded-full w-1/3 h-1/3 max-h-32 max-w-32 border-t-2 border-b-2 border-[#6ad61d] "></div>
    </div>
  );
};

export default Loader;
