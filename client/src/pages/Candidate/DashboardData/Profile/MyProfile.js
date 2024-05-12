import React from "react";
import { BsTypeBold } from "react-icons/bs";
import { BiItalic } from "react-icons/bi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import { PiLinkBreakBold } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { MdFormatIndentDecrease } from "react-icons/md";
import { MdFormatIndentIncrease } from "react-icons/md";
import { MdContentPaste } from "react-icons/md";
import { MdFormatClear } from "react-icons/md";
import { MdInsertPageBreak } from "react-icons/md";
import { BsTable } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { LuUndo2 } from "react-icons/lu";
import { GrRedo } from "react-icons/gr";

function MyProfile() {
  return (
    <div
      className="bg-white p-6 px-10 rounded-lg"
      // id="scrollIntoView"
      // ref={targetDivRef}
    >
      <h2 className=" text-lg text-[#202124]  mb-6 font-bold">My Profile</h2>

      <div className="pb-5">
        <label
          for="logo-img"
          className="block mb-5 text-sm font-bold text-gray-900 "
        >
          Logo Image
        </label>
        <button
          type="submit"
          className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-[#6ad61d] font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
        >
          Browser
        </button>

        <label
          for="logo-img"
          className="block mb-5 mt-9 text-sm font-bold text-gray-900 "
        >
          Cover Photo
        </label>
        <button
          type="submit"
          className="text-[#6ad61d] bg-[#6ad61d23] rounded-lg transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-[#6ad61d] font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#6ad61d23] dark:hover:bg-[#6ad61d] dark:hover:text-white dark:focus:ring-[#6ad61d]"
        >
          Browser
        </button>
      </div>

      <form className="">
        <div className="flex flex-wrap -mx-2">
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              for="email"
              className="block mb-2 text-sm font-bold text-gray-900 "
            >
              Employer Name
            </label>
            <input
              type="email"
              id="large-input"
              className="block w-full p-5 bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              for="password"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Website
            </label>
            <input
              type="text"
              // id="password"
              id="large-input"
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              for="email"
              className="block mb-2 text-sm font-bold text-gray-900 "
            >
              Founded Date
            </label>
            <input
              type="date"
              id="large-input"
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              for="password"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Company Size
            </label>
            <input
              type="text"
              // id="password"
              id="large-input"
              className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              for="countries"
              className="block mb-2 text-sm font-bold text-gray-900 "
            >
              Categories <span className="">*</span>
            </label>
            {/* <SelectCategories /> */}
          </div>

          <div className="mb-5 w-full md:w-1/2 px-2">
            <label
              for="text"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Introduction Video URL
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

        <h2 className=" text-lg text-[#202124]  mb-6 font-bold">
          About Company
        </h2>

        <form className="flex flex-wrap text-black">
          <div className="flex flex-wrap w-full  border  bg-white border-gray-300">
            <div className="flex flex-wrap w-full items-start  py-1 border-b  ">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800 inline-flex items-start "
                type="button"
              >
                file <FaCaretDown />
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>print</li>
                </ul>
              </div>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-gray-600 text-sm px-2 py-1 focus:ring-2 focus:outline-none  dark:focus:ring-blue-800 inline-flex items-start"
              >
                Edit <FaCaretDown />
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      print
                    </a>
                  </li>
                </ul>
              </div>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800 inline-flex items-start"
                type="button"
              >
                View <FaCaretDown />
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      print
                    </a>
                  </li>
                </ul>
              </div>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800  inline-flex items-start"
                type="button"
              >
                Insert <FaCaretDown />
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      print
                    </a>
                  </li>
                </ul>
              </div>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800  inline-flex items-start"
                type="button"
              >
                Format <FaCaretDown />
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      print
                    </a>
                  </li>
                </ul>
              </div>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800 inline-flex items-start"
                type="button"
              >
                Tools <FaCaretDown />
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      print
                    </a>
                  </li>
                </ul>
              </div>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-gray-600 text-sm px-2 py-1  focus:ring-2 focus:outline-none  dark:focus:ring-blue-800  inline-flex items-start"
                type="button"
              >
                Table <FaCaretDown />
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      print
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* first icon row */}
            <div className="w-full flex flex-wrap items-center justify-between px-3 py-1  bg-gray-100 border-gray-300 sm:divide-x sm:rtl:divide-x-reverse text-sm sm:text-base">
              <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600 text-sm sm:text-base">
                <div className=" flex  flex-wrap  items-center space-x-1 rtl:space-x-reverse text-sm sm:text-base">
                  <form className="max-w-sm text-sm sm:text-base">
                    <select
                      id="countries"
                      className="text-gray-600 bg-white  focus:ring-2 focus:outline-none text-sm px-1 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800"
                    >
                      <FaCaretDown />
                      <option selected>Heading 1</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </form>

                  <button
                    data-tooltip-target="tooltip-default"
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800 dark:hover:ring-blue-800"
                  >
                    <BsTypeBold size={20} />
                  </button>

                  <div
                    id="tooltip-default"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Bold (ctr+B)
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <BiItalic size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <RiDoubleQuotesL size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <MdFormatListBulleted size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <MdFormatListNumbered size={20} />
                  </button>

                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <FaAlignLeft />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <FaAlignCenter />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <FaAlignRight />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <FaAlignJustify />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <PiLinkSimpleBold size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <PiLinkBreakBold size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <LuUndo2 size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <GrRedo size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Second icon row */}
            <div className=" flex flex-wrap w-full items-center justify-between px-3  border-b bg-gray-100 border-gray-300 sm:divide-x sm:rtl:divide-x-reverse text-sm sm:text-base">
              <div className=" flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600 text-sm sm:text-base">
                <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse text-sm sm:text-base">
                  <form className="flex flex-wrap max-w-sm text-sm sm:text-base">
                    <select
                      id="countries"
                      className="text-gray-600 bg-white  focus:ring-2 focus:outline-none text-sm px-1 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800"
                    >
                      <option selected>Arial Blank</option>
                      <option value="US">Monospace</option>
                      <option value="CA">arial</option>
                      <option value="FR">Times in romans</option>
                      <option value="DE">impacts</option>
                      <option value="DE">Terminal</option>
                    </select>
                  </form>
                  <form className="max-w-sm ">
                    <select
                      id="countries"
                      className="text-gray-600 bg-white px-6 ms-2 focus:ring-2 focus:outline-none text-sm text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800"
                    >
                      <option selected>12pt</option>
                      <option value="US">14pt</option>
                      <option value="CA">16pt</option>
                      <option value="FR">18pt</option>
                      <option value="DE">20pt</option>
                    </select>
                  </form>
                  <button
                    data-tooltip-target="tooltip-default"
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <MdFormatIndentDecrease size={20} />
                  </button>

                  <div
                    id="tooltip-default"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Decrease Indent (ctr+B)
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <MdFormatIndentIncrease size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <MdContentPaste size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <MdFormatClear size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <MdInsertPageBreak size={20} />
                  </button>

                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <BsTable size={20} />
                  </button>
                  <button
                    type="button"
                    className=" text-gray-600 p-2 rounded cursor-pointer  hover:bg-gray-100  focus:ring-2 focus:outline-none text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                  >
                    <FaQuestionCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-b-lg dark:bg-white">
              <textarea
                id="editor"
                rows="10"
                className="block w-full px-0 text-sm bg-white  dark:text- dark:placeholder-gray-400 border-none"
                placeholder=""
                required
              ></textarea>
            </div>
          </div>
        </form>
      </form>
    </div>
  );
}

export default MyProfile;
