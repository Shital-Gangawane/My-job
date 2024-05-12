import React, { useState } from 'react'
import SocialNetworksForm from './SocialNetworksForm';

const socialNetworksInitialState = {
  network: "",
  Url: "",
 
};

function SocialNetworks({index}) {
  const [stateArr, setStateArr] = useState([socialNetworksInitialState]);

  const handleSocialNetworkChange = (index, newState) => {
    const updatedSocialNetwork = stateArr.map((socialNetwork, i) => {
      if (i === index) {
        return { ...socialNetwork, ...newState };
      }
      return socialNetwork;
    });
    setStateArr(updatedSocialNetwork);
  };

  console.log(stateArr);

  return (
    <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
    <h2 className="text-lg text-[#202124] mb-6 font-bold">Network</h2>
    <div className="flex flex-col gap-3">
      {stateArr.map((data, i) => (
        <SocialNetworksForm
          key={i}
          index={i}
          data={data}
          onChange={handleSocialNetworkChange}
          setStateArr={setStateArr}
        />
      ))}
    </div>
    <button
      className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
      onClick={() => setStateArr((prev) => [...prev, socialNetworksInitialState])}
    >
      Add Another Network
    </button>
   
  </div>
  )
}

export default SocialNetworks
