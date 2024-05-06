import React ,{useState} from 'react'
import { useMembersContext } from '../../../../context/profileMembersContext';
import { memberData } from '../../../../utils/MembersData';

export default function ProfileMembersForm({index}) {

  const [isOpen, setIsOpen] = useState(false);
  
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access form data using e.target.elements
    console.log("Form submitted");
  };

    const { state, updateNestedState, removeMemberState } = useMembersContext();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleProgramChange = (e) => {
      updateNestedState("profile", index, e.target.name, e.target.value);
      console.log("currInd", currentIndex);
      if (e.target.name === "program") {
        setCurrentIndex(
          memberData.length - 1 &&
            memberData.indexOf(memberData.find((ed) => ed.program === e.target.value))
        );
      }
    };
    return (
        <div>
<div className="bg-white p-6 mt-5 px-10 rounded-lg block">
        <h2 className=" text-lg text-[#202124]  mb-6 font-bold">Members</h2>

        <div className="relative block">
          <div
            
            placeholder="Click to open form"
              id="large-input"
                className="  text-start  flex-wrap cursor-pointer mb-5  block w-full p-5 py-7 px-3  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
                onChange={handleProgramChange}
                onClick={toggleDropdown}
               
              >
                 {/* Categories */}
              </div>
          {isOpen && (
            <form
              onSubmit={handleSubmit}
              className="absolute w-full mt-2 p-4 bg-white  "
            >
              {/* Your form fields */}
              <div className="flex flex-wrap -mx-2">
                <div className="mb-5 w-full md:w-1/6 px-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-bold text-gray-900  w-20 py-5 "
                  >
                    Name
                  </label>
                </div>
                <div className="mb-5 w-full md:w-3/4 px-2">
                  <input
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={handleProgramChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="block w-full py-2 bg-blue-500 text-white rounded-b-md"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
  )
}
