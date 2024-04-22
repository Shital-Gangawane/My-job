import React, { useState } from "react";
import { useAdminContext } from "../../context/adminContext";
import RegisterAdmin from "../../components/Admin/RegisterAdmin";
import { approveAdmin } from "../../api/admin/axios";
import AdminOptions from "../../components/Admin/AdminOptions";

export default function AdminModule() {
  const { allAdmins, adminData, adminToken, setAllAdmins } = useAdminContext();
  const [isAddAdminOn, setIsAddAdminOn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const approveAdminClickHandler = async (adminId) => {
    const res = await approveAdmin(adminId, adminToken);
    console.log(res);
    setAllAdmins(res?.data?.allAdmins);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-400 relative">
      {isAddAdminOn && <RegisterAdmin setIsAddAdminOn={setIsAddAdminOn} />}
      <div className="w-full bg-gray-800 text-white p-6">Admins</div>
      <div className="w-full p-3">
        <button
          onClick={() => setIsAddAdminOn(true)}
          className="bg-purple-500 p-2 px-5 rounded-md text-white"
        >
          + Add Admin
        </button>
      </div>
      <div className="w-full h-full overflow-x-auto p-1">
        <table className="w-full  divide-gray-200">
          <thead className="bg-gray-800 text-center">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                S.no.
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Designation
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                City Assigned
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Category Assigned
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Skills Assigned
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Admin
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Approved
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allAdmins
              ?.filter((admin) => admin?._id !== adminData?._id)
              .map((admin, i) => (
                <tr key={admin._id} className="hover:bg-gray-50">
                  <td className="px-1 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                    {i + 1}.
                  </td>
                  <td className="px-1 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                    {admin.name}
                  </td>
                  <td className="px-1 py-4 text-center  whitespace-nowrap text-sm text-gray-500">
                    {admin.email}
                  </td>
                  <td className="px-1 py-4 text-center  whitespace-nowrap text-sm text-gray-500">
                    {admin.phone}
                  </td>
                  <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                    {admin.designation}
                  </td>
                  <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                    {admin.roleType}
                  </td>
                  <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                    {admin.cityAssigned.length
                      ? admin.cityAssigned.join(", ")
                      : "Not Assigned"}
                  </td>
                  <td className="px-1 py-4 text-center  text-sm text-gray-500">
                    {admin.categoryAssigned.length
                      ? admin.categoryAssigned.join(", ")
                      : "Not Assigned"}
                  </td>
                  <td className="px-1 py-4 text-center  text-sm text-gray-500">
                    {admin.skillAssigned.length
                      ? admin.skillAssigned.join(", ")
                      : "Not Assigned"}
                  </td>
                  <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                    {admin.isAdmin ? "Yes" : "No"}
                  </td>
                  <td className="px-1 py-4  whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => approveAdminClickHandler(admin._id)}
                      className={`p-2 px-5 rounded-md text-white ${
                        !admin.isApproved
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      {!admin.isApproved ? "Approve" : "Disapprove"}
                    </button>
                  </td>
                  <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                    <AdminOptions
                      data={admin}
                      setIsEditing={setIsEditing}
                      isEditing={isEditing}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
