import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { workModeOptions } from "./SelectOption";

function PostJobSection({
  jobDetails,
  handleInputChange,
  handleSelectChange,
  options,
  genderoption,
  joboptions,
  salaryoptions,
  employer,
  careerleveloptions,
  qualificationoptions,
  categoriesoptions,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [stateArr, setStateArr] = useState();

  const [filteredCategoriesOptions, setfilteredCategoriesOptions] = useState(categoriesoptions);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategoriesOption, setSelectedCategoriesOption] = useState(null);

  const [filteredOptions, setfilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [filteredGenderOptions, setfilteredGenderOptions] =useState(genderoption);
  const [isgenderOptionOpen, setisgenderOptionOpen] = useState(false);
  const [genderOption, setGenderOption] = useState(null);

  const [jApplyTypeOptions, setjApplyTypeOptions] = useState(joboptions);
  const [isJobApplyOpen, setisJobApplyOpen] = useState(false);
  const [jobOption, setJobOption] = useState(null);

  const [filteredSalaryOptions, setfilteredSalaryOptions] =useState(salaryoptions);
  const [isSalaryOpen, setIsSalaryOpen] = useState(false);
  const [selectedSalaryOption, setSelectedSalaryOption] = useState(null);

  const [filteredExperienceOptions, setfilteredExperienceOptions] = useState(experienceoptions);
  const [isExperienceOpen, setisExperienceOpen] = useState(false);
  const [selectedExperienceOption, setselectedExperienceOption] = useState(null);

  const [filteredCareerLevelOptions, setfilteredCareerLevelOptions] = useState(careerleveloptions);
  const [isCareerLevelOpen, setIsCareerLevelOpen] = useState(false);
  const [selectedCareerLevelOption, setSelectedCareerLevelOption] = useState(null);

  const [filteredQualificationOptions, setfilteredQualificationOptions] = useState(qualificationoptions);
  const [isQualificationOpen, setIsQualificationOpen] = useState(false);
  const [selectedQualificationOption, setSelectedQualificationOption] = useState(null);


  const handleSelectCategoriesOption = (categoriesoption) => {
    setSelectedCategoriesOption(categoriesoption);
    onSelect(categoriesoption);
    setIsCategoriesOpen(false);
  };
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };
  const handleGenderOption = (genderoption) => {
    setGenderOption(genderoption);
    onSelect(genderoption);
    setisgenderOptionOpen(false);
  };

  const handleJobApplyOption = (joboptions) => {
    setJobOption(joboptions);
    onSelect(joboptions);
    setisJobApplyOpen(false);
  };

  const handleSelectSalartyOption = (salaryoption) => {
    setSelectedSalaryOption(salaryoption);
    onSelect(salaryoption);
    setIsSalaryOpen(false);
  };

  const handleSelectExperienceOption = (experienceoption) => {
    setselectedExperienceOption(experienceoption);
    onSelect(experienceoption);
    setisExperienceOpen(false);
  };

  const handleSelectCareerLevelOption = (careerleveloption) => {
    setSelectedCareerLevelOption(careerleveloption);
    onSelect(careerleveloption);
    setIsCareerLevelOpen(false);
  };

  
  const handleSelectQualificationOption = (qualificationoption) => {
    setSelectedQualificationOption(qualificationoption);
    onSelect(qualificationoption);
    setSelectedQualificationOption(false);
  };
  
  console.log(options);
  console.log(genderoption);
  console.log(joboptions);
  console.log(salaryoptions);
  console.log(experienceoptions);
  console.log(careerleveloptions);
  console.log(qualificationoptions);

  // const filteredOptions = options
  //   ? options.filter((option) =>
  //       option.label.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   : [];

  return (
    <div>
      <h2 className=" text-lg text-[#202124]  mb-6 font-bold">
        {!employer ? "Post job" : "Edit Job"}
      </h2>

      {/* <label
        for="email"
        className="block mb-2 text-sm font-bold text-gray-900 "
      >
        Featured Image
      </label>
      <button
        type="submit"
        className="text-[#6ad61d] mb-10 bg-[#6ad61d23] rounded-lg transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-[#6ad61d] font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
      >
        Browser
      </button> */}

      {/* Job Title */}
      <div className="mb-5 w-full">
        <label
          htmlFor="jobTitle"
          className="block text-sm font-bold text-gray-900"
        >
          Job Title <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="jobTitle"
          value={jobDetails.jobTitle}
          onChange={handleInputChange}
          className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          required
        />
      </div>

      {/* Job Description */}
      <div className="mb-5 w-full">
        <label
          htmlFor="jobDescription"
          className="block text-sm font-bold text-gray-900"
        >
          Job Description <span className="text-red-600">*</span>
        </label>
        <textarea
          name="jobDescription"
          value={jobDetails.jobDescription}
          onChange={handleInputChange}
          className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          required
        />
      </div>

      <div className="flex flex-wrap mx-2">
        {/* Categories Selector */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="selectedCategory"
            className="block text-sm font-bold text-gray-900"
          >
            Categories
          </label>
          <select
            name="selectedCategory"
            value={jobDetails.selectedCategory}
            onChange={handleInputChange}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          >
            <option value="">None</option>
            {categoriesoptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Type Selector */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="jobType"
            className="block text-sm font-bold text-gray-900"
          >
            Type
          </label>
          <select
            name="jobType"
            value={jobDetails.jobType}
            onChange={handleInputChange}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          >
            <option value="">None</option>
            {options?.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        {/* <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="text"
            className="block mb-2 text-sm font-bold text-gray-900"
          >
            Tag
          </label>
          <input
            type="text"
            id="video-url large-input"
            name="video-url"
            // id="password"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div> */}

        {/* Gender */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="gender"
            className="block text-sm font-bold text-gray-900"
          >
            Gender
          </label>
          <select
            name="gender"
            value={jobDetails.gender}
            onChange={handleInputChange}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          >
            <option value="">None</option>
            {genderoption.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        {/* Job Apply Type Selector */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="jobApplyType"
            className="block text-sm font-bold text-gray-900"
          >
            Job Apply Type
          </label>
          <select
            name="jobApplyType"
            value={jobDetails.jobApplyType}
            onChange={handleInputChange}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          >
            <option value="">None</option>
            {joboptions?.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Work mode Selector */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="workMode"
            className="block text-sm font-bold text-gray-900"
          >
            Work Mode
          </label>
          <select
            name="workMode"
            value={jobDetails.workMode}
            onChange={handleInputChange}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          >
            <option value="">None</option>
            {workModeOptions?.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* External URL for Apply Job */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="externalUrl"
            className="block text-sm font-bold text-gray-900"
          >
            External URL for Apply Job
          </label>
          <input
            type="text"
            name="externalUrl"
            value={jobDetails.externalUrl}
            onChange={handleInputChange}
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        {/*  Salary Type Selector */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="salaryType"
            className="block text-sm font-bold text-gray-900"
          >
            Salary Type
          </label>
          <select
            name="salaryType"
            value={jobDetails.salaryType}
            onChange={handleInputChange}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          >
            <option value="">None</option>
            {salaryoptions?.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Min Salary */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="minSalary"
            className="block text-sm font-bold text-gray-900"
          >
            Min Salary
          </label>
          <input
            type="text"
            name="minSalary"
            value={jobDetails.minSalary}
            onChange={handleInputChange}
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        {/* Min Salary */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="maxSalary"
            className="block text-sm font-bold text-gray-900"
          >
            Min Salary
          </label>
          <input
            type="text"
            name="maxSalary"
            value={jobDetails.maxSalary}
            onChange={handleInputChange}
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>

        {/* Min Experience */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="minExperience"
            className="block text-sm font-bold text-gray-900"
          >
            Min Experience
          </label>
          <input
            type="text"
            name="minExperience"
            value={jobDetails.minExperience}
            onChange={handleInputChange}
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
        {/* Min Experience */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="maxExperience"
            className="block text-sm font-bold text-gray-900"
          >
            Max Experience
          </label>
          <input
            type="text"
            name="maxExperience"
            value={jobDetails.maxExperience}
            onChange={handleInputChange}
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        {/*  Career Level Selector */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="careerLevel"
            className="block text-sm font-bold text-gray-900"
          >
            Career Level
          </label>
          <select
            name="careerLevel"
            value={jobDetails.careerLevel}
            onChange={handleInputChange}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          >
            <option value="">None</option>
            {careerleveloptions?.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/*  Qualification Selector */}
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            htmlFor="qualificationRequired"
            className="block text-sm font-bold text-gray-900"
          >
            Qualification
          </label>
          <select
            name="qualificationRequired"
            value={jobDetails.qualificationRequired}
            onChange={handleInputChange}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          >
            <option value="">None</option>
            {qualificationoptions?.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Video Url Experience */}
      <div className="mb-5 w-full md:w-1/2 px-2">
        <label
          htmlFor="videoUrl"
          className="block text-sm font-bold text-gray-900"
        >
          Introduction Video Url
        </label>
        <input
          type="text"
          name="videoUrl"
          value={jobDetails.videoUrl}
          onChange={handleInputChange}
          className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          required
        />
      </div>
    </div>
  );
}

export default PostJobSection;
