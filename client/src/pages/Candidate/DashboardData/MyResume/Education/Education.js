import React from "react";
import EducationForm from "./EducationForm";

const educationsInitialState = {
  degree: "",
  institute: "",
  year: "",
  specialization: "",
};

export default function Education({ educations, setEducations }) {
  const handleEducationChange = (index, newState) => {
    const updatedEducations = educations?.map((education, i) => {
      if (i === index) {
        return { ...education, ...newState };
      }
      return education;
    });

    setEducations(updatedEducations);
    console.log(educations);
  };

  return (
    <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
      <h2 className="text-lg text-[#202124] mb-6 font-bold">Education</h2>
      <div className="flex flex-col gap-3">
        {educations?.map((data, i) => (
          <EducationForm
            key={i}
            index={i}
            data={data}
            onChange={handleEducationChange}
            setEducations={setEducations}
          />
        ))}
      </div>
      <button
        className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 mt-4 ease-in-out focus:outline-none text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
        onClick={() =>
          setEducations((prev) => [...prev, { ...educationsInitialState }])
        }
      >
        Add Another Education
      </button>
    </div>
  );
}
