import React from 'react'

function ContactInformation() {
  return (
    <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
    <h2 className=" text-lg text-[#202124]  mb-6 font-bold">
      Contact Information
    </h2>
    <form className="">
      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full  ">
          <label
            htmlFor="name"
            className="block  text-sm font-bold text-gray-900 pt-2 px-5 py-2"
          >
            {" "}
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
           Location
          </label>
          <select
         
            id="countries large-input"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]
                "
          >
            <option ></option>
          </select>
          
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
          {/* <GoogleMap /> */}
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
      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full  ">
          <label
            htmlFor="name"
            className="block  text-sm font-bold text-gray-900 pt-2 px-5 py-2"
          >
            {" "}
           Introduction Video
          </label>

          <input
            type="text"
            name="video"
            id="large-input"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          />
         
        </div>
      </div>
    </form>
  </div>
  )
}

export default ContactInformation
