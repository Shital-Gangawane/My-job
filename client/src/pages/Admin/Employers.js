import React, { useEffect, useState } from "react";
import { useAdminContext } from "../../context/adminContext";
import { approveEmployer, fetchAllAdmins } from "../../api/admin/axios";
import AdminOptions from "../../components/Admin/AdminOptions";
import EmployerDetails from "../../components/Admin/EmployerDetails";
import FilterSortComponent from "../../components/Admin/FilterSortComponent";

export default function Employers() {
  const { allEmployers, setAllEmployers, adminToken } = useAdminContext();
  const [isEmployerDetailsOn, setIsEmployerDetailsOn] = useState(false);
  const [filteredEmployers, setFilteredEmployers] = useState(allEmployers);
  const [isEditing, setIsEditing] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [selectedEmployer, setSelectedEmployer] = useState([]);

  const approveEmployerClickHandler = async (EmployerId) => {
    const res = await approveEmployer(EmployerId, adminToken);
    console.log(res);
    setFilteredEmployers(res?.data?.allEmployers);
  };

  const onFilter = (value) => {
    switch (filterOption) {
      case "Company":
        const filteredData = allEmployers.filter((employer) =>
          employer.companyName.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredEmployers(filteredData);
        break;
      case "Pending":
        const pendingData = allEmployers.filter(
          (employer) => !employer.isApproved
        );
        setFilteredEmployers(pendingData);
        break;
      case "Approved":
        const approvedData = allEmployers.filter(
          (employer) => employer.isApproved
        );
        setFilteredEmployers(approvedData);
        break;
      default:
        setFilteredEmployers(allEmployers);
        break;
    }
  };

  useEffect(() => {
    const fetchAllAdmin = async () => {
      try {
        const response = await fetchAllAdmins(adminToken); // Assuming fetchAllAdmins is a function to fetch all admins
        setAllEmployers(response?.data?.allEmployers);
        setFilteredEmployers(response?.data?.allEmployers);
        console.log(response);
      } catch (error) {
        console.error("Error fetching all admins:", error);
      }
    };
    fetchAllAdmin();
  }, [isEmployerDetailsOn, setFilteredEmployers, isEditing]);
  return (
    <div className=" w-full bg-gray-400">
      <div className=" w-full bg-gray-800 text-white p-6">Employers</div>

      {/* <div className=" p-5">
        <FilterSortComponent
          data={allEmployers}
          onFilter={onFilter}
          filterOptions={["Company", "Pending", "Approved"]}
          setFilterOption={setFilterOption}
          filterOption={filterOption}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      </div> */}

      <div className="w-full h-full overflow-x-auto p-1">
        <table className="w-full  divide-gray-200">
          <thead className="bg-gray-800 text-center">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                S.no.
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Company Name
              </th>

              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Industries
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Email
              </th>

              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Approved
              </th>

              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 relative">
            {filteredEmployers?.map((employer, index) => (
              <tr
                // onClick={() => setIsEmployerDetailsOn(true)}
                key={employer._id}
                className="hover:bg-gray-50"
              >
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}.
                </td>
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                  {employer?.companyName}
                </td>

                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {employer?.industries.join(", ")}
                </td>
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {employer?.phoneNumber}
                </td>
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {employer?.email}
                </td>

                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => approveEmployerClickHandler(employer?._id)}
                    className={`p-2 px-5 rounded-md text-white ${
                      !employer.isApproved
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {!employer.isApproved ? "Approve" : "Disapprove"}
                  </button>
                </td>

                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  <AdminOptions
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    data={employer}
                    employer
                    setSelectedEmployer={setSelectedEmployer}
                    isEmployerDetailsOn={isEmployerDetailsOn}
                    setIsEmployerDetailsOn={setIsEmployerDetailsOn}
                    setFilteredEmployers={setFilteredEmployers}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEmployerDetailsOn && (
        <EmployerDetails
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          data={selectedEmployer}
          setIsEmployerDetailsOn={setIsEmployerDetailsOn}
          setFilteredEmployers={setFilteredEmployers}
        />
      )}
    </div>
  );
}
