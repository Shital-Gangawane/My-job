import React, { useEffect, useState } from "react";
import EmployerEditor from "./EmployerEditor";
import { AiOutlineClose } from "react-icons/ai";
import { fetchAllAdmins } from "../../api/admin/axios";
import { useAdminContext } from "../../context/adminContext";
import { useLocation } from "react-router-dom";

const EmployerDetails = ({
  setIsEditing,
  isEditing,
  data,
  setIsEmployerDetailsOn,
  setFilteredEmployers,
  setSelectedEmployer,
}) => {
  const { adminToken, setAllEmployers, allEmployers } = useAdminContext();
  const [empData, setEmpData] = useState(data);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const fetchAllAdmin = async () => {
      try {
        const response = await fetchAllAdmins(adminToken);
        setAllEmployers(response?.data?.allEmployers);
        setFilteredEmployers(response?.data?.allEmployers);
        console.log(response);
      } catch (error) {
        console.error("Error fetching all admins:", error);
      }
    };
    fetchAllAdmin();
  }, [adminToken, setAllEmployers, setFilteredEmployers, isEditing]);

  useEffect(() => {
    // Filter the allEmployers array to find the matching employer data
    const filteredEmployer = allEmployers?.find(
      (emp) => emp?._id === data?._id
    );

    // Update the empData state with the filtered employer data
    setEmpData(filteredEmployer);
  }, [allEmployers, data]);

  useEffect(() => {
    // Update empData when data prop changes (for initial rendering)
    setEmpData(data);
  }, [data]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center w-screen h-screen p-1 z-50 text-start ">
      {isEditing && (
        <EmployerEditor
          employerData={empData}
          setIsEditing={setIsEditing}
          setFilteredEmployers={setFilteredEmployers}
          setSelectedEmployer={setSelectedEmployer}
        />
      )}
      <div className="relative bg-white w-full h-full p-6 rounded-lg shadow-md overflow-hidden">
        <button
          onClick={() => setIsEmployerDetailsOn(false)}
          className="absolute right-2 top-2 text-black font-thin text-4xl hover:text-gray-400 active:text-gray-300 "
        >
          <AiOutlineClose />
        </button>
        <h2 className=" text-lg lg:text-2xl font-bold text-start w-full ">
          Employer Details
        </h2>
        <div className=" flex flex-col justify-between mb-5 mt-4">
          <p className=" text-xs lg:text-sm">
            <span className="font-bold">Company Name:</span>{" "}
            {empData?.companyName}
          </p>
          <p className=" text-xs lg:text-sm">
            <span className="font-bold">Phone Number:</span>{" "}
            {empData?.phoneNumber}
          </p>
          <p className=" text-xs lg:text-sm">
            <span className="font-bold">Email:</span> {empData?.email}
          </p>
        </div>

        <button
          onClick={toggleEditing}
          className="bg-blue-500 hover:bg-blue-600 text-xs  text-white py-2 rounded-lg px-3 mb-4 transition duration-300 ease-in-out"
        >
          {isEditing ? "Cancel Editing" : "Edit Details"}
        </button>
        <hr />
        <div className="w-full h-full flex flex-col lg:flex-row p-4 whitespace-normal">
          <div className="w-full h-full flex-1 pb-10 px-3 overflow-hidden">
            <p className="">
              <span className="font-bold">About Company:</span>{" "}
            </p>
            <div className="h-96 overflow-y-auto">
              <p className="text-start">{empData?.aboutCompany}</p>
            </div>
          </div>
          <div className="border shadow-sm w-72 p-4 rounded-md text-sm h-auto lg:h-96 mt-7">
            <p>
              <span className="font-bold">Industries:</span>{" "}
              {empData?.industries?.join(", ")}
            </p>
            <p>
              <span className="font-bold">Website:</span> {empData?.website}
            </p>
            <p>
              <span className="font-bold">Is Approved:</span>{" "}
              {empData?.isApproved ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDetails;
