import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function ProfileOptionSection({genderoption,ageoptions, qualificationoptions, experienceoptions ,salaryoptions, categoriesoptions, showprofileoptions, onSelect}) {

    const [searchTerm, setSearchTerm] = useState("");
    const [stateArr, setStateArr] = useState();

    const [filteredGenderOptions, setfilteredGenderOptions] =useState(genderoption);
    const [isgenderOptionOpen, setisgenderOptionOpen] = useState(false);
    const [genderOption, setGenderOption] = useState(null);

    const [filteredAgeOptions, setFilteredAgeOptions] = useState(ageoptions);
    const [isAgeOpen, setIsAgeOpen] = useState(false);
    const [selectedAgeOption, setSelectedAgeOption] = useState(null);

    const [filteredQualificationOptions, setfilteredQualificationOptions] = useState(qualificationoptions);
    const [isQualificationOpen, setIsQualificationOpen] = useState(false);
    const [selectedQualificationOption, setSelectedQualificationOption] = useState(null);

    const [filteredExperienceOptions, setfilteredExperienceOptions] = useState(experienceoptions);
    const [isExperienceOpen, setisExperienceOpen] = useState(false);
    const [selectedExperienceOption, setselectedExperienceOption] = useState(null);

    const [filteredSalaryOptions, setfilteredSalaryOptions] =useState(salaryoptions);
    const [isSalaryOpen, setIsSalaryOpen] = useState(false);
    const [selectedSalaryOption, setSelectedSalaryOption] = useState(null);

    const [filteredCategoriesOptions, setfilteredCategoriesOptions] = useState(categoriesoptions);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [selectedCategoriesOption, setSelectedCategoriesOption] = useState(null);
  
    const [filteredShowProfileOptions, setFilteredShowProfileOptions] = useState(showprofileoptions);
    const [isShowProfileOpen, setIsShowProfileOpen] = useState(false);
    const [selectedShowProfileOption, setSelectedShowProfileOption] = useState(null);
  
  const handleGenderOption = (genderoption) => {
    setGenderOption(genderoption);
    onSelect(genderoption);
    setisgenderOptionOpen(false);
  };

  const handleSelectAgeOption = (ageoption) => {
    setSelectedAgeOption(ageoption);
    onSelect(ageoption);
    setIsAgeOpen(false);
  };

  const handleSelectQualificationOption = (qualificationoption) => {
    setSelectedQualificationOption(qualificationoption);
    onSelect(qualificationoption);
    setSelectedQualificationOption(false);
  };
  
  const handleSelectExperienceOption = (experienceoption) => {
    setselectedExperienceOption(experienceoption);
    onSelect(experienceoption);
    setisExperienceOpen(false);
  };

  const handleSelectSalartyOption = (salaryoption) => {
    setSelectedSalaryOption(salaryoption);
    onSelect(salaryoption);
    setIsSalaryOpen(false);
  };

  const handleSelectCategoriesOption = (categoriesoption) => {
    setSelectedCategoriesOption(categoriesoption);
    onSelect(categoriesoption);
    setIsCategoriesOpen(false);
  };

  const handleSelectShowProfileOption = (showprofileoption) => {
    setSelectedShowProfileOption(showprofileoption);
    onSelect(showprofileoption);
    setIsShowProfileOpen(false);
  };

  
  console.log(genderoption);
  console.log(ageoptions);
  console.log(qualificationoptions);
  console.log(experienceoptions);
  console.log(salaryoptions);
  console.log(categoriesoptions);
  console.log(showprofileoptions);

  

  return (
    <div>
         <div className="flex flex-wrap mx-2">
            <div className="mb-5 w-full md:w-1/2 px-2">
              <label
                for="name"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Gender
              </label>
        {/* For Gender */}
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

            <div className="mb-5 w-full md:w-1/2 px-2">
              <label
               for="age"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                Age
              </label>
            {/* For Age */}
            <div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-4 py-6 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setIsAgeOpen(!isAgeOpen)}
            >
              {selectedAgeOption ? selectedAgeOption.label : ""}
              {selectedAgeOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setSelectedAgeOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isAgeOpen && (
              <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredAgeOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredAgeOptions?.map((ageoption) => (
                      <div
                        key={ageoption.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#6ad61d]"
                        onClick={() => handleSelectAgeOption(ageoption)}
                      >
                        {ageoption.label}
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
                for="phoneNo"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
               Phone Number
              </label>
              <input
                type="number"
                id="large-input"
                className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
                placeholder=""
                required
              />
            </div>

            <div className="mb-5 w-full md:w-1/2 px-2">
              <label
                for="email"
               
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="large-input"
                className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
                required
              />
            </div>
          </div>
           
          <div className="flex flex-wrap mx-2">
            <div className="mb-5 w-full md:w-1/2 px-2">
              <label
                for="name"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Quaification
              </label>
        {/* For Gender */}
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

            <div className="mb-5 w-full md:w-1/2 px-2">
              <label
               for="age"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                Experience Time
              </label>
            {/* For Age */}
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
         Languages
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
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

       
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="email"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
           Salary($)
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
            required
          />
        </div>
        <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="email"
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

       
      </div>

      <div className="flex flex-wrap mx-2">
      <div className="mb-5 w-full md:w-1/2 px-2">
          <label
            for="email"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
           Show My Profile
          </label>

          <div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-4 py-6 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              onClick={() => setIsShowProfileOpen(!isShowProfileOpen)}
            >
              {selectedShowProfileOption ? selectedShowProfileOption.label : ""}
              {selectedShowProfileOption && (
                <IoClose
                  className="mt-0.5 right-0 ml-60 ms-auto w-fit  font-bold hover:text-[#6ad61d]"
                  size={14}
                  onClick={() => setSelectedShowProfileOption(null)}
                />
              )}
              <FaChevronDown className="ms-auto items-center " size={12} />
            </div>

            {isShowProfileOpen && (
              <div className="absolute z-10 w-full mt-2 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <input
                  type="text"
                  className="w-full ps-3  pe-3 block m-2 mx-auto  max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredShowProfileOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredShowProfileOptions?.map((showprofileoption) => (
                      <div
                        key={showprofileoption.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#6ad61d]"
                        onClick={() => handleSelectShowProfileOption(showprofileoption)}
                      >
                        {showprofileoption.label}
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

          </div>

  )
}

export default ProfileOptionSection
