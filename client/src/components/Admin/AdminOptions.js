import React, { useEffect, useRef, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { deleteAdmin, editAdmin } from "../../api/admin/axios";
import RegisterAdmin from "./RegisterAdmin";
import { useAdminContext } from "../../context/adminContext";

const AdminOptions = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dropdownRef = useRef(null);
  const { setAllAdmins } = useAdminContext();

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
    setIsEditing(true);
    // const res = await editAdmin()
    setIsOpen(false);
  };

  const onDelete = async () => {
    console.log("delete");
    const res = await deleteAdmin(data?._id);
    if (res?.data?.success) {
      setAllAdmins(res?.data?.allAdmin);
      setIsOpen(false);
    }
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
      {isEditing && (
        <div className="fixed inset-0 h-screen w-full flex flex-col ">
          <RegisterAdmin setIsAddAdminOn={setIsEditing} data={data} editing />
        </div>
      )}
    </div>
  );
};

export default AdminOptions;
