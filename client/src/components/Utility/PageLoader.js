import React from "react";

const PageLoader = () => {
  return (
    <div className="w-full h-screen fixed inset-0 p-4 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full w-36 h-36 border-t-2 border-b-2 border-[#6ad61d] "></div>
    </div>
  );
};

export default PageLoader;
