
import React, { useState } from "react";

export default function JobModal({ job, onClose, onSave }) {
  const [editableJob, setEditableJob] = useState({ ...job });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableJob({ ...editableJob, [name]: value });
  };

  const handleSave = () => {
    onSave(editableJob);
    setIsEditMode(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center z-30">
      <div className="bg-white p-6 w-full rounded-t-md overflow-y-auto">
        <h1 className="text-xl font-semibold">
          Company:{" "}
          {isEditMode ? (
            <input
              className=" border px-2"
              type="text"
              name="company"
              value={editableJob.company}
              onChange={handleChange}
            />
          ) : (
            job.company
          )}
        </h1>
        <h2 className="text-xl font-semibold mb-4">
          Position:{" "}
          {isEditMode ? (
            <input
              className=" border px-2"
              type="text"
              name="jobTitle"
              value={editableJob.jobTitle}
              onChange={handleChange}
            />
          ) : (
            job.jobTitle
          )}
        </h2>
        <div className="flex flex-col justify-between mt-2 mb-4">
          <p className="text-gray-500">
            <span className="font-bold">Location:</span>{" "}
            {isEditMode ? (
              <input
                className=" border px-2"
                type="text"
                name="jobLocation"
                value={editableJob.jobLocation}
                onChange={handleChange}
              />
            ) : (
              job.jobLocation
            )}
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Experience:</span>{" "}
            {isEditMode ? (
              <input
                className=" border px-2"
                type="text"
                name="experienceRequired"
                value={editableJob.experienceRequired}
                onChange={handleChange}
              />
            ) : (
              job.experienceRequired
            )}{" "}
            years
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Salary:</span>{" "}
            {isEditMode ? (
              <input
                className=" border px-2 "
                type="text"
                name="salaryRange"
                value={editableJob.salaryRange}
                onChange={handleChange}
              />
            ) : (
              job.salaryRange
            )}
            /month
          </p>
        </div>
        <p className="text-gray-600">
          <span className="font-bold">Skills:</span>{" "}
          {isEditMode ? (
            <input
              className=" border px-2"
              type="text"
              name="keySkills"
              value={editableJob.keySkills}
              onChange={handleChange}
            />
          ) : (
            job.keySkills
          )}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Description:</span>{" "}
          {isEditMode ? (
            <textarea
              className=" w-full h-80 border px-2"
              name="jobDescription"
              value={editableJob.jobDescription}
              onChange={handleChange}
            />
          ) : (
            job.jobDescription
          )}
        </p>
      </div>
      <div className="flex justify-end w-full rounded-b-md p-3 bg-white">
        <button
          onClick={onClose}
          className="mr-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Close
        </button>
        {isEditMode ? (
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
