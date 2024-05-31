import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function Success({ text }) {
  return (
    <div className=" w-full h-screen fixed inset-0 p-4 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-60 h-24 text-center flex flex-col justify-center items-center">
        <IoCheckmarkCircleSharp size={25} color="green" />
        <p>{text}</p>
      </div>
    </div>
  );
}
