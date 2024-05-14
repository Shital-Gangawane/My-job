import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function PostJobSection({
  options,
  onSelect,
  genderoption,
  joboptions,
  salaryoptions,
  experienceoptions,
  careerleveloptions,
  qualificationoptions,
  categoriesoptions
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
  console.log(categoriesoptions);
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
      <h2 className=" text-lg text-[#202124]  mb-6 font-bold">Post job</h2>

      <label
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
      </button>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full  ">
          <label
            for="jobtitle"
            className="block w-full  text-sm font-bold text-gray-900 pt-2  py-2 "
          >
            Job Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full  ">
          <label
            for="jobtitle"
            className="block w-full  text-sm font-bold text-gray-900 pt-2  py-2 "
          >
            Job Description <span className="text-red-600">*</span>
          </label>
          <textarea
            type="text"
            id="large-input"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="countries"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Categories
          </label>
          <div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-4 py-6 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              {selectedCategoriesOption ? selectedCategoriesOption.label : ""}
              {selectedCategoriesOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setSelectedCategoriesOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isCategoriesOpen && (
              <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredCategoriesOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredCategoriesOptions?.map((categoriesoption) => (
                      <div
                        key={categoriesoption.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#6ad61d]"
                        onClick={() => handleSelectCategoriesOption(categoriesoption)}
                      >
                        {categoriesoption.label}
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="countries"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Type
          </label>

          <div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-4 py-6 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption ? selectedOption.label : ""}
              {selectedOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setSelectedOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isOpen && (
              <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredOptions?.map((option) => (
                      <div
                        key={option.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#6ad61d]"
                        onClick={() => handleSelectOption(option)}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full md:w-1/2 px-2">
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
        </div>
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="countries"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Gender
          </label>

          <div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-4 py-6 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setisgenderOptionOpen(!isgenderOptionOpen)}
            >
              {genderOption ? genderOption.label : ""}
              {genderOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setGenderOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isgenderOptionOpen && (
              <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                 placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredGenderOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredGenderOptions?.map((genderoption) => (
                      <div
                        key={genderoption.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#6ad61d]"
                        onClick={() => handleGenderOption(genderoption)}
                      >
                        {genderoption.label}
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label className="block mb-2 text-sm font-bold text-gray-900 ">
            Job Apply Type
          </label>
          <div className="relative ">
            <div
              id="  large-input"
              className=" flex w-full p-4 py-6 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setisJobApplyOpen(!isJobApplyOpen)}
            >
              {jobOption ? jobOption.label : ""}

              {jobOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setJobOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isJobApplyOpen && (
              <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {jApplyTypeOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {jApplyTypeOptions?.map((joboptions) => (
                      <div
                        key={joboptions.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#6ad61d]"
                        onClick={() => handleJobApplyOption(joboptions)}
                      >
                        {joboptions.label}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>Not found</div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="email"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            External URL for Apply Job
          </label>
          <input
            type="text"
            id="video-url large-input"
            name="video-url"
            // id="password"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="email"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Salary Type
          </label>

          <div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-4 py-6 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setIsSalaryOpen(!isSalaryOpen)}
            >
              {selectedSalaryOption ? selectedSalaryOption.label : ""}
              {selectedSalaryOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setSelectedSalaryOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isSalaryOpen && (
              <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredSalaryOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredSalaryOptions?.map((salaryoption) => (
                      <div
                        key={salaryoption.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#6ad61d]"
                        onClick={() => handleSelectSalartyOption(salaryoption)}
                      >
                        {salaryoption.label}
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="email"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Min. Salary
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="password"
            className="block mb-2 text-sm font-bold text-gray-900"
          >
            Max. Salary
          </label>
          <input
            type="text"
            // id="password"
            id="large-input"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="countries"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Experience
          </label>
          <div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-4 py-6 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setisExperienceOpen(!isExperienceOpen)}
            >
              {selectedExperienceOption ? selectedExperienceOption.label : ""}
              {selectedExperienceOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setselectedExperienceOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isExperienceOpen && (
               <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
               <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredExperienceOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredExperienceOptions?.map((experienceoption) => (
                      <div
                        key={experienceoption.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer  hover:text-[#6ad61d]"
                        onClick={() => handleSelectExperienceOption(experienceoption)}
                      >
                        {experienceoption.label}
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>

        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="email"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Career Level
          </label>
          <div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-2 py-7 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setIsCareerLevelOpen(!isCareerLevelOpen)}
            >
              {selectedCareerLevelOption ? selectedCareerLevelOption.label : ""}
              {selectedCareerLevelOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setSelectedCareerLevelOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isCareerLevelOpen && (
               <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
               <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredCareerLevelOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredCareerLevelOptions?.map((careerleveloption) => (
                      <div
                        key={careerleveloption.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#6ad61d]"
                        onClick={() => handleSelectCareerLevelOption(careerleveloption)}
                      >
                        {careerleveloption.label}
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="countries"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Qualification
          </label>
          <div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-3 py-6 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setIsQualificationOpen(!isQualificationOpen)}
            >
              {selectedQualificationOption ? selectedQualificationOption.label : ""}
              {selectedQualificationOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setSelectedQualificationOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isQualificationOpen && (
               <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
               <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredQualificationOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredQualificationOptions?.map((qualificationoption) => (
                      <div
                        key={qualificationoption.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#6ad61d]"
                        onClick={() => handleSelectQualificationOption(qualificationoption)}
                      >
                        {qualificationoption.label}
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="email"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Introduction Video Url
          </label>
          <input
            type="text"
            id="video-url large-input"
            name="video-url"
            // id="password"
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default PostJobSection;
