import React from 'react'
import ExperienceForm from './ExperienceForm';


const ExperiencesInitialState = {
    title: "",
    startDate: "",
    endDate: "",
    company: "",
    description: "",
  };

function Experience({experiences, setExperiences}) {
    const handleExperienceChange = (index, newState) => {
        const updatedExperience = experiences?.map((experience, i) => {
          if (i === index) {
            return { ...experience, ...newState };
          }
          return experience;
        });

        setExperiences(updatedExperience);
        console.log(experiences);
      };
    
  return (
    <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
    <h2 className="text-lg text-[#202124] mb-6 font-bold">Experience</h2>
    <div className="flex flex-col gap-3">
      {experiences?.map((data, i) => (
        <ExperienceForm
          key={i}
          index={i}
          data={data}
          onChange={handleExperienceChange}
          setExperiences={setExperiences}
        />
      ))}
    </div>
    <button
      className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
      onClick={() =>
        setExperiences((prev) => [...prev, { ...ExperiencesInitialState }])
      }
    >
      Add Another Experience
    </button>
  </div>
  )
}

export default Experience
