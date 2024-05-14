import React, { useEffect, useRef, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import {
  deleteAdmin,
  deleteCandidate,
  deleteEmployer,
  editAdmin,
} from "../../api/admin/axios";
import RegisterAdmin from "./RegisterAdmin";
import { useAdminContext } from "../../context/adminContext";
import EmployerEditor from "./EmployerEditor";
import { useNavigate } from "react-router-dom";
import EmployerDetails from "./EmployerDetails";
import CandidateEditor from "../Candidate/CandidateEditor";

const AdminOptions = ({
  data,
  employerModule,
  candidateModule,
  setFilteredCandidates,
  isEmployerDetailsOn,
  setIsEmployerDetailsOn,
  setFilteredEmployers,
  setSelectedEmployer,
  selectedEmployer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // const [isEmployerDetailsOn, setIsEmployerDetailsOn] = useState(false);
  const dropdownRef = useRef(null);
  const { setAllAdmins, setAllEmployers, setAllCandidates } = useAdminContext();
  const navigate = useNavigate();
  console.log("emp data", data._id);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const onEdit = async () => {
    console.log("editing");
    console.log("teston", selectedEmployer);
    // if (employer) setSelectedEmployer(data);
    // setSelectedEmployer(data);
    setIsEditing(true);
    // const res = await editAdmin()

    setIsOpen(false);
  };

  const onDelete = async () => {
    if (!employerModule && !candidateModule) {
      const res = await deleteAdmin(data?._id);
      if (res?.data?.success) {
        setAllAdmins(res?.data?.allAdmin);
        setIsOpen(false);
        setIsEditing(false);
      }
    } else if (candidateModule) {
      const res = await deleteCandidate(data?._id);
      if (res?.data?.success) {
        setAllCandidates(res?.data?.allCandidates);
        setIsOpen(false);
        setFilteredCandidates(res?.data?.allCandidates);
      }
    } else {
      const res = await deleteEmployer(data?._id);
      if (res?.data?.success) {
        setAllEmployers(res?.data?.allEmployers);
        setIsOpen(false);
        setFilteredEmployers(res?.data?.allEmployers);
      }
    }
  };

  const onViewDetails = () => {
    // setSelectedEmployer(data);
    setIsEmployerDetailsOn(true);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <SlOptionsVertical
        onClick={toggleOptions}
        size={20}
        className="hover:bg-gray-300 p-1 rounded-full cursor-pointer active:bg-gray-200"
      />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 border bg-white rounded-md shadow-2xl py-1 z-10">
          {employerModule && (
            <button
              onClick={onViewDetails} // Change this to onViewDetails
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              View
            </button>
          )}
          <button
            onClick={onEdit}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Delete
          </button>
          {/* Add more options as needed */}
        </div>
      )}
      {!employerModule && !candidateModule && isEditing && (
        <div className="fixed inset-0 h-screen w-full flex flex-col ">
          <RegisterAdmin setIsAddAdminOn={setIsEditing} data={data} editing />
        </div>
      )}

      {employerModule && isEditing && (
        <div className="fixed inset-0 h-screen w-full flex flex-col ">
          <EmployerEditor
            employerData={data}
            setIsEditing={setIsEditing}
            setFilteredEmployers={setFilteredEmployers}
            setIsEmployerDetailsOn={setIsEmployerDetailsOn}
            setSelectedEmployer={setSelectedEmployer}
            option
          />
        </div>
      )}

      {candidateModule && isEditing && (
        <div className="fixed inset-0 h-screen w-full flex flex-col ">
          <CandidateEditor setIsEditing={setIsEditing} data={data} editing />
        </div>
      )}
    </div>
  );
};

export default AdminOptions;
