import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function PhoneNumber({ 
    
    index, 
    data, 
    onChange,
     setUlternateNumber
     }) {

    const [isDropdownOn, setIsDropdownOn] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        onChange(index, { [name]: value });
      };
    
  return (
    <div>
       <p
         onClick={() => setIsDropdownOn(!isDropdownOn)}
          className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          placeholder="Enter Phone Number" 
      >
        {index !== 0 && (
          <IoClose
            className="mt-0.5 font-bold hover:text-[#6ad61d]"
            size={20}
            color="red"
            onClick={() =>
              setUlternateNumber((prev) => {
                return prev.filter((el, i) => i !== index);
              })
            }
          />
        )}
        Ulternate Number {index + 1}
      </p>
      {isDropdownOn && (
        <div className="w-full flex flex-col md:flex-row gap-1 flex-wrap">
          {/* Input fields for each member attribute */}
          <InputField
          
            label="ulternateNumber"
            name="ulternateNumber"
            value={data?.ulternateNumber}
            onChange={handleChange}
          />
          </div>
          )}
           {index !== 0 && (
        <button
          className=" float-end text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-44  py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
          onClick={() =>
            setUlternateNumber((prev) => {
              return prev.filter((el, i) => i !== index);
            })
          }
        >
          Remove Phone Number
        </button>
      )}
    </div>
 
  )
}
function InputField({ label, name, value, onChange }) {
    return (
      <div className="flex-1">
        <label className="font-medium text-xs">{label}</label>
        <input
        
          name={name}
          value={value}
          onChange={onChange}
          className="block w-2/3 p-5 cursor-pointer bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
        />
      </div>
    );
  }
  

export default PhoneNumber
