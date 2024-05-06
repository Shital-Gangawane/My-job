import React from "react";

export default function Success() {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline">
        {" "}
        You have successfully registered. <br /> Redirecting to login page...
      </span>
    </div>
  );
}
