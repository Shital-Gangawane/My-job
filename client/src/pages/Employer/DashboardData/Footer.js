import React, { useRef } from 'react';
import { RiArrowUpSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

//   const scrollToTop = () => {
//     navigate('/Profile#scrollIntoView');
//   };

  return (
    <div>
    <div className='text-center py-10 m-6' >
        <p className='text-gray-600 text-sm '>&copy; 2021 <span className='text-gray-900'>GigWorker.</span>  All Right Reserved.</p>
    </div>

    <div
     className=" bottom-0 right-0 m-9 me-10 px-3 py-3 bg-[#6ad61d23]  hover:bg-[#6ad61d] hover:text-white text-[#6ad61d] rounded-full cursor-pointer transition duration-300"
    //  onClick={scrollToTop}
    >
      <RiArrowUpSLine size={23}/>
    
    </div>
   
  </div>
  )
} 

export default Footer