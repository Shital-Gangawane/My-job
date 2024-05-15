import React, { useState } from "react";
import CreatePackage from "../../components/Admin/CreatePackage";
import { useAdminContext } from "../../context/adminContext";

export default function PackageModule() {
  const [isCreatePackageOn, setIsCreatePackageOn] = useState(false);
  const { packages } = useAdminContext(); // Assuming this is loaded from context

  return (
    <div className="relative w-screen md:w-full overflow-hidden h-full bg-gray-400">
      {/* Package creation modal */}
      {isCreatePackageOn && (
        <CreatePackage setIsCreatePackageOn={setIsCreatePackageOn} />
      )}

      {/* Header */}
      <div className="w-full bg-gray-800 text-white p-6">
        <p className="text-lg font-semibold ms-12">Packages</p>
      </div>

      {/* Create package button */}
      <div className="w-full p-3">
        <button
          onClick={() => setIsCreatePackageOn(true)}
          className="bg-purple-500 p-2 px-5 rounded-md text-white"
        >
          + Create Package
        </button>
      </div>

      {/* Packages table */}
      <div className="overflow-x-auto w-full p-3">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Package Name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Post Jobs
              </th>
              <th scope="col" className="py-3 px-6">
                Featured Jobs
              </th>
              <th scope="col" className="py-3 px-6">
                Duration (days)
              </th>
              <th scope="col" className="py-3 px-6">
                Candidates
              </th>
            </tr>
          </thead>
          <tbody>
            {packages?.length > 0 ? (
              packages.map((pkg, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="py-4 px-6">{pkg.name}</td>
                  <td className="py-4 px-6">{pkg.price}</td>
                  <td className="py-4 px-6">{pkg.postJobCredits}</td>
                  <td className="py-4 px-6">{pkg.featuredJobCredits}</td>
                  <td className="py-4 px-6">{pkg.duration}</td>
                  <td className="py-4 px-6">{pkg.candidatePool}</td>
                </tr>
              ))
            ) : (
              <tr className="bg-white dark:bg-gray-800">
                <td colSpan="6" className="py-4 px-6 text-center">
                  No packages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
