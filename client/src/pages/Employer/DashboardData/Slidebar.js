import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

function Slidebar() {
  return (
    <div className='flex flex-col bg-white w-72 items-center'>
        <div className='flex gap-3 mb-3'>
            <FaRegUserCircle size={40}/>
            <span className='gap-2 mt-2'>User Name</span> </div>
           <div> <button className='login-btn w-full py-2 px-2 bg-[#6ad61d] text-white rounded-lg transition duration-300 ease-in-out'>View Profile</button></div>
       
        <div className='flex-1'></div>
        <div className=''>Logout</div>
        </div>
  )
}

export default Slidebar