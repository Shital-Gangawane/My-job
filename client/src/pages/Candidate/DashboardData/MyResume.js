import React, { useRef }  from 'react'

function MyResume() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Perform operations with the selected file
    console.log(selectedFile);
  };
  return (
    <div className=" w-full h-auto  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14">
    <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
      Edit Resume
    </h2>
    <div
        className="bg-white p-6 px-10 rounded-lg"
        // id="scrollIntoView"
        // ref={targetDivRef}
      >
        <h2 className=" text-lg text-[#202124]  mb-6 font-bold">My Profile</h2>

        <div className="pb-5">
         
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleButtonClick}
            className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-[#6ad61d] font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
            >Browser</button>
    </div>
    </div>
    </div>
  )
}

export default MyResume
