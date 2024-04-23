import React, { useState } from "react";
import { updateEmployer } from "../../api/employer/axios";
import { useAdminContext } from "../../context/adminContext";

const EmployerEditor = ({
  employerData,
  setIsEditing,
  setFilteredEmployers,
  setIsEmployerDetailsOn,
  setSelectedEmployer,
  setEmpData,
  option,
}) => {
  const [companyName, setCompanyName] = useState(employerData?.companyName);
  const [aboutCompany, setAboutCompany] = useState(employerData?.aboutCompany);
  const [industries, setIndustries] = useState(
    employerData?.industries.join(", ")
  );
  const [phoneNumber, setPhoneNumber] = useState(employerData?.phoneNumber);
  const [email, setEmail] = useState(employerData?.email);
  const [website, setWebsite] = useState(employerData?.website);
  const [isApproved, setIsApproved] = useState(employerData?.isApproved);
  const { setAllEmployers } = useAdminContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const res = await updateEmployer(
      employerData?._id,
      companyName,
      aboutCompany,
      industries,
      phoneNumber,
      email,
      website,
      isApproved
    );

    if (res?.data?.success) {
      setAllEmployers(res?.data?.allEmployers);
      setFilteredEmployers(res?.data?.allEmployers);
      // setIsEmployerDetailsOn(false);
      const updatedEmployer = res?.data?.allEmployers?.find(
        (emp) => emp._id === employerData._id
      );
      // setSelectedEmployer(updatedEmployer);
      // setEmpData(updatedEmployer); // Pass the updated employer data back to EmployerDetails
      setIsEditing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-20   flex justify-center items-center w-full h-full bg-gray-400 bg-opacity-35 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-96  h-full p-6 rounded-lg shadow-md overflow-y-auto "
      >
        <h2 className="text-2xl font-bold mb-4">Edit Employer</h2>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="aboutCompany" className="block text-gray-700">
            About Company
          </label>
          <textarea
            id="aboutCompany"
            value={aboutCompany}
            onChange={(e) => setAboutCompany(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="industries" className="block text-gray-700">
            Industries
          </label>
          <input
            type="text"
            id="industries"
            value={industries}
            onChange={(e) => setIndustries(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="website" className="block text-gray-700">
            Website
          </label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="isApproved" className="block text-gray-700">
            Is Approved
          </label>
          <select
            id="isApproved"
            value={isApproved}
            onChange={(e) => setIsApproved(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className=" flex flex-col gap-2">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300 ease-in-out"
          >
            Save Changes
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="secondary-btn "
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployerEditor;
