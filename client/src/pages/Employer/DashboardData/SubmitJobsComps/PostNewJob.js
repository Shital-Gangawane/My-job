import React from 'react'
import PostJobSection from './PostJobSection'
import GoogleMap from '../GoogleMap'
import {genderoption, joboptions, options, salaryoptions , experienceoptions, careerleveloptions , qualificationoptions ,categoriesoptions} from './SelectOption';


function PostNewJob() {

const typeHandler=(type)=>{
console.log(type);
}

  return (
    <div className=' w-full h-auto  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14 '>
    <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Post New Job
      </h2>
      <div className="bg-white p-6 mt-5 px-10 rounded-lg">

      <div>
      <PostJobSection options={options} genderoption={genderoption} joboptions={joboptions} salaryoptions={salaryoptions} experienceoptions={experienceoptions} careerleveloptions={careerleveloptions} qualificationoptions={qualificationoptions} categoriesoptions={categoriesoptions} onSelect={typeHandler}/>
      </div>

        <h2 className=" text-lg text-[#202124]  mb-6 font-bold">
          Profile Photo
        </h2>
        <button
          type="submit"
          className="text-[#6ad61d] mb-10 bg-[#6ad61d23] rounded-lg transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-[#6ad61d] font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
        >
          Browser
        </button>

        <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full  ">
          <label
            htmlFor="name"
            className="block  text-sm font-bold text-gray-900 pt-2 px-5 py-2"
          >
           Application Deadline Date
          </label>

          <input
            type="date"
            name="deadlinedate"
            id="large-input"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          />
        </div>
      </div>

    
        <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full  ">
          <label
            htmlFor="name"
            className="block  text-sm font-bold text-gray-900 pt-2 px-5 py-2"
          >
            Friendly Address
          </label>

          <input
            type="text"
            name="location"
            id="large-input"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full  ">
          <label
            htmlFor="name"
            className="block  text-sm font-bold text-gray-900 pt-2 px-5 py-2"
          >
            Map Location
          </label>

          <input
            type="text"
            name="location"
            id="large-input"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-2">
        <div className="w-full mb-5">
          <GoogleMap />
        </div>
      </div>

      <div className="flex flex-wrap -mx-2">
        <div className="mb-5 w-full md:w-1/2 px-2">
          <input
            placeholder="Latitude"
            type="text"
            name="location"
            id="large-input"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          />
        </div>
        <div className="mb-5 w-full md:w-1/2 px-2">
          <input
            placeholder="longitude"
            type="text"
            name="location"
            id="large-input"
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          />
        </div>
      </div>
      <button
        type="submit"
        className="lg:w-auto mt-5 py-3 px-8 bg-[#6ad61d] hover:bg-blue-600 text-white  rounded-lg transition duration-300 ease-in-out"
      >
        Save Profile
      </button>
      </div>
    </div>
  )
}

export default PostNewJob
