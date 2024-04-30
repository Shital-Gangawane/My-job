import React, { useEffect, useState } from "react";
import { useAdminContext } from "../../context/adminContext";
import { approveEmployer, fetchAllAdmins } from "../../api/admin/axios";
import AdminOptions from "../../components/Admin/AdminOptions";
import EmployerDetails from "../../components/Admin/EmployerDetails";
import FilterSortComponent from "../../components/Admin/FilterSortComponent";
import Loader from "../../components/Utility/Loader";

export default function Employers() {
  const { allEmployers, setAllEmployers, adminToken } = useAdminContext();
  const [isEmployerDetailsOn, setIsEmployerDetailsOn] = useState(false);
  const [filteredEmployers, setFilteredEmployers] = useState(allEmployers);
  const [isEditing, setIsEditing] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [selectedEmployer, setSelectedEmployer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const approveEmployerClickHandler = async (EmployerId) => {
    setIsLoading(true);
    try {
      const res = await approveEmployer(EmployerId, adminToken);
      console.log(res);
      if (res?.data?.success) {
        setAllEmployers(res?.data?.allEmployers);
        setFilteredEmployers(res?.data?.allEmployers);
      }
    } catch (error) {
      console.error("Error approving employer:", error);
    }
    setIsLoading(false);
    setFilterOption("");
  };

  const onFilter = (value) => {
    switch (filterOption) {
      case "Company":
        if (value) {
          const filteredData = allEmployers.filter((employer) =>
            employer?.companyName?.toLowerCase().includes(value?.toLowerCase())
          );
          setFilteredEmployers(filteredData);
        } else {
          setFilteredEmployers(allEmployers);
        }

        break;
      case "Email":
        if (value) {
          const filteredData = allEmployers.filter((employer) =>
            employer?.email?.toLowerCase().includes(value?.toLowerCase())
          );
          setFilteredEmployers(filteredData);
        } else {
          setFilteredEmployers(allEmployers);
        }

        break;
      case "Pending":
        const pendingData = allEmployers.filter(
          (employer) => !employer.isApproved
        );
        setFilteredEmployers(pendingData);
        break;
      case "Published":
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
    if (filterOption) {
      onFilter();
    }
  }, [filterOption]);

  useEffect(() => {
    setIsLoading(true);
    const fetchAllAdmin = async () => {
      try {
        const response = await fetchAllAdmins(adminToken);
        if (response?.data?.success) {
          // setIsLoading(false);
          setFilteredEmployers(response?.data?.allEmployers);
          setAllEmployers(response?.data?.allEmployers);
          console.log(filteredEmployers);
        }
      } catch (error) {
        console.error("Error fetching all admins:", error);
      }
      // Set isLoading to false once data fetching completes
    };
    fetchAllAdmin();
    setIsLoading(false);
  }, [
    isEmployerDetailsOn,
    isEditing,
    selectedEmployer,
    setFilterOption,
    isLoading,
  ]);

  return (
    <div className="relative w-screen md:w-full  h-full bg-gray-400">
      <div className="w-full bg-gray-800 text-white p-6">
        <p className="text-lg font-semibold ms-12 ">Employers</p>
      </div>

      {isLoading && <Loader />}

      <FilterSortComponent
        data={allEmployers}
        onFilter={onFilter}
        filterOptions={[
          "Filter by",
          "Company",
          "Email",
          "Pending",
          "Published",
        ]}
        setFilterOption={setFilterOption}
        filterOption={filterOption}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />

      <div className="w-full h-full overflow-x-auto p-1">
        <table className="w-full divide-gray-200">
          <thead className="bg-gray-800 text-center">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                S.no.
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Status
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
                Approved
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 relative">
            {filteredEmployers?.map((employer, index) => (
              <tr key={employer._id} className="hover:bg-gray-50">
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}.
                </td>
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {employer?.email}
                </td>
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {employer?.isApproved ? "Published" : "Pending"}
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
                <td
                  onClick={() => setSelectedEmployer(employer)}
                  className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500"
                >
                  <AdminOptions
                    data={employer}
                    employerModule
                    // selectedEmployer={selectedEmployer}
                    // setSelectedEmployer={setSelectedEmployer}
                    isEmployerDetailsOn={isEmployerDetailsOn}
                    setIsEmployerDetailsOn={setIsEmployerDetailsOn}
                    setFilteredEmployers={setFilteredEmployers}
                    setSelectedEmployer={setSelectedEmployer}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEmployerDetailsOn && (
          <EmployerDetails
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            data={selectedEmployer}
            setIsEmployerDetailsOn={setIsEmployerDetailsOn}
            setFilteredEmployers={setFilteredEmployers}
            setSelectedEmployer={setSelectedEmployer}
          />
        )}
      </div>
    </div>
  );
}