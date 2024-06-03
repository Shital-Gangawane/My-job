import React from 'react'
import AwardForm from './AwardForm';

const awardsInitialState = {
    title: "",
    year: "",
    description: "",
  };

function Awards({awards, setAwards}) {
  
    const handleAwardsChange = (index, newState) => {
        const updatedAwards = awards?.map((award, i) => {
          if (i === index) {
            return { ...award, ...newState };
          }
          return award;
        });

        setAwards(updatedAwards);
        console.log(awards);
      };
    
  return (
    <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
    <h2 className="text-lg text-[#202124] mb-6 font-bold">Award</h2>
    <div className="flex flex-col gap-3">
      {awards?.map((data, i) => (
        <AwardForm
          key={i}
          index={i}
          data={data}
          onChange={handleAwardsChange}
          setAwards={setAwards}
        />
      ))}
    </div>
    <button
      className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
      onClick={() =>
        setAwards((prev) => [...prev, { ...awardsInitialState }])
      }
    >
      Add Another Award
    </button>
  </div>
  )
}

export default Awards
