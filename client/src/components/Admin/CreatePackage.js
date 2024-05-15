import React, { useState } from "react";
import { useAdminContext } from "../../context/adminContext";
import { createEmployerPackage } from "../../api/admin/axios";

export default function CreatePackage({ setIsCreatePackageOn }) {
  const [packageInfo, setPackageInfo] = useState({
    name: "",
    price: 0,
    postJobCredits: 0,
    featuredJobCredits: 0,
    jobDisplayDuration: 0,
    candidatePool: 0,
    duration: 0,
    description: "",
  });
  const { adminToken, setPackages } = useAdminContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Package Info Submitted:", packageInfo);

    const res = await createEmployerPackage(packageInfo, adminToken);
    console.log(res);
    setPackages(res?.data?.allPackages);
  };

  return (
    <div className="fixed inset-0 h-full p-5 flex flex-col items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="w-full max-w-lg p-8 bg-white rounded-md shadow-lg ">
        <h2 className="text-lg font-semibold text-center mb-6">
          Create New Package
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label>Package Name</label>
              <input
                type="text"
                name="name"
                value={packageInfo.name}
                onChange={handleChange}
                placeholder="Package Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={packageInfo.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label>Post Job Credits</label>
              <input
                type="number"
                name="postJobCredits"
                value={packageInfo.postJobCredits}
                onChange={handleChange}
                placeholder="Post Job Credits"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label>Featured Job Credits</label>
              <input
                type="number"
                name="featuredJobCredits"
                value={packageInfo.featuredJobCredits}
                onChange={handleChange}
                placeholder="Featured Job Credits"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label>Candidate Pool</label>
              <input
                type="number"
                name="candidatePool"
                value={packageInfo.candidatePool}
                onChange={handleChange}
                placeholder="Candidate Pool Access"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label>Job Display Validity</label>
              <input
                type="number"
                name="jobDisplayDuration"
                value={packageInfo.jobDisplayDuration}
                onChange={handleChange}
                placeholder="Job Display Validity"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label>Validity</label>
              <input
                type="number"
                name="duration"
                value={packageInfo.duration}
                onChange={handleChange}
                placeholder="Validity"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={packageInfo.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <button
              type="submit"
              className=" w-full py-3 rounded-lg text-white bg-green-500"
            >
              Create
            </button>
            <button
              type="button"
              onClick={() => setIsCreatePackageOn(false)}
              className=" w-full py-3 rounded-lg text-white bg-gray-500"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
