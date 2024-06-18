import React, { useEffect, useRef, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { useUserContext } from "../../../../context/userContext";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";

const Action = ({
  jobId,
  candidate,
  lastIndex,
  handleShortlistCandidate,
  handleDeclineCandidate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useUserContext();
  const dropdownRef = useRef(null);

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

  const onDelete = async () => {};

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <SlOptionsVertical
        onClick={toggleOptions}
        size={20}
        className="hover:bg-gray-300 p-1 rounded-full cursor-pointer active:bg-gray-200"
      />
      {isOpen && (
        <div
          className={`absolute ${
            lastIndex ? " bottom-0 right-0" : "right-0"
          } mt-2 w-48 border bg-white rounded-md shadow-2xl py-1 z-10`}
        >
          <a
            href={`${baseUrl}/uploads/resumes/${candidate.resume}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <button
            disabled={user?.shortlistedCandidates?.some(
              (el) => el.candidate === candidate._id && el.job === jobId
            )}
            onClick={() => handleShortlistCandidate(candidate._id, jobId)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            {user?.shortlistedCandidates?.some(
              (el) => el.candidate === candidate._id && el.job === jobId
            ) ? (
              <span>
                Shortlisted
                <IoCheckmarkCircleSharp className=" inline" color="green" />
              </span>
            ) : (
              "Shortlist"
            )}
          </button>
          <button
            onClick={() => handleDeclineCandidate(candidate._id, jobId)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Decline
          </button>
          {/* Add more options as needed */}
        </div>
      )}
    </div>
  );
};

export default Action;
