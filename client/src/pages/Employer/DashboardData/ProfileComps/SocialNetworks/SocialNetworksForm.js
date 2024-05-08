import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function SocialNetworksForm({ index, data, onChange,setStateArr}) {

  const [isDropdownOn, setIsDropdownOn] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(index, { [name]: value });
  };
    
  return (
    <div className="flex flex-col gap-3">

      <p
        onClick={() => setIsDropdownOn(!isDropdownOn)}
        className="flex flex-wrap gap-3 w-full p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
      >
        {index !== 0 && (
        <IoClose className='mt-0.5 font-bold hover:text-[#6ad61d]' size={20}
        onClick={() =>
            setStateArr((prev) => {
              return prev.filter((el, i) => i !== index);
            })
          }
        />
        )} 
        Network {index + 1} 
         <FaChevronDown className='ms-auto mt-1.5'/>
      </p>
      {isDropdownOn && (
        <div className="flex flex-col gap-3">
          {/* Input fields for each member attribute */}
          <InputField
            label="Network"
            name="network"
            value={data.network}
            onChange={handleChange}
          />
         
          <InputField
            label="URL"
            name="Url"
            value={data.Url}
            onChange={handleChange}
          />

        
        </div>
      )}


        {index !== 0 && (
            <button
            className=" float-end text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-44  py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
            onClick={() =>
                setStateArr((prev) => {
                  return prev.filter((el, i) => i !== index);
                })
              }
            >
              Remove Network
            </button>
          )}
    </div>
   
  )
}

function InputField({ label, name, value, onChange }) {
    return (
      <div className="flex justify-between">
        <label className="font-bold">{label}</label>
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="block w-2/3 p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
        />
      </div>
    );
  }
  
  function TextArea({ label, name, value, onChange }) {
    return (
      <div className="flex justify-between">
        <label className="font-bold">{label}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="block w-2/3 p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          rows="4"
        ></textarea>
      </div>
    );
  }
  

export default SocialNetworksForm
