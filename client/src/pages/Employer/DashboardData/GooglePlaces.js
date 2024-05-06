import React ,{useState} from 'react'
import {REACT_APP_GOOGLE_MAPS_KEY} from  "../constants/constants";

const GooglePlaces = () => {
    const [query,setQuery]=useState("");

  return (
    <div className=''>
        <label>Choose Your Location</label>
        <input
               placeholder="Shearch Places.."
                    type="text"
                    value={query}
                    onChange={(event)=> setQuery (event.target.value)}
                    id="large-input"
                    className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
                    
                  />
    </div>
  )
}

export default GooglePlaces