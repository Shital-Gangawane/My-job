
function a({
    options,
    onSelect,
    genderoption,
    joboptions,
    salaryoptions,
  }) 


const [filteredOptions, setfilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);


  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };





<div className="relative">
            <div
              id="  large-input"
              className=" flex w-full p-2 py-7 px-3 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-transparent dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
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
              <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                <input
                  type="text"
                  className="w-auto block m-2 mx-auto px-20 align-content-center max-w-full p-3  rounded-md py-1 border border-gray-300 focus:outline-none focus:border-none focus:ring-0 focus:ring-[#6ad61d] focus:outline-[#6ad61d]"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filteredOptions?.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredOptions?.map((option) => (
                      <div
                        key={option.value}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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