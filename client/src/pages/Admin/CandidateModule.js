import React, { useEffect, useState } from "react";
import { approveCandidate, fetchAllAdmins } from "../../api/admin/axios";
import { useAdminContext } from "../../context/adminContext";
import Loader from "../../components/Utility/Loader";
import AdminOptions from "../../components/Admin/AdminOptions";

export default function CandidateModule() {
  const { allCandidates, setAllCandidates, adminToken } = useAdminContext();
  // const [isEmployerDetailsOn, setIsEmployerDetailsOn] = useState(false);
  const [filteredCandidates, setFilteredCandidates] = useState(allCandidates);
  // const [isEditing, setIsEditing] = useState(false);
  // const [filterOption, setFilterOption] = useState("");
  // const [filterValue, setFilterValue] = useState("");
  // const [selectedEmployer, setSelectedEmployer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const approveCandidateClickHandler = async (candidateId) => {
    setIsLoading(true);
    try {
      const res = await approveCandidate(candidateId, adminToken);
      console.log(res);
      if (res?.data?.success) {
        setAllCandidates(res?.data?.allCandidates);
        setFilteredCandidates(res?.data?.allCandidates);
      }
    } catch (error) {
      console.error("Error approving employer:", error);
    }
    setIsLoading(false);
    // setFilterOption("");
  };

  // const onFilter = (value) => {
  //   switch (filterOption) {
  //     case "Company":
  //       if (value) {
  //         const filteredData = allEmployers.filter((employer) =>
  //           employer?.companyName?.toLowerCase().includes(value?.toLowerCase())
  //         );
  //         setFilteredCandidates(filteredData);
  //       } else {
  //         setFilteredCandidates(allCandidates);
  //       }

  //       break;
  //     case "Email":
  //       if (value) {
  //         const filteredData = allEmployers.filter((employer) =>
  //           employer?.email?.toLowerCase().includes(value?.toLowerCase())
  //         );
  //         setFilteredEmployers(filteredData);
  //       } else {
  //         setFilteredEmployers(allEmployers);
  //       }

  //       break;
  //     case "Pending":
  //       const pendingData = allEmployers.filter(
  //         (employer) => !employer.isApproved
  //       );
  //       setFilteredEmployers(pendingData);
  //       break;
  //     case "Published":
  //       const approvedData = allEmployers.filter(
  //         (employer) => employer.isApproved
  //       );
  //       setFilteredEmployers(approvedData);
  //       break;

  //     default:
  //       setFilteredEmployers(allEmployers);
  //       break;
  //   }
  // };

  // useEffect(() => {
  //   if (filterOption) {
  //     onFilter();
  //   }
  // }, [filterOption]);

  useEffect(() => {
    setIsLoading(true);
    const fetchAllAdmin = async () => {
      try {
        const response = await fetchAllAdmins(adminToken);
        if (response?.data?.success) {
          // setIsLoading(false);
          setFilteredCandidates(response?.data?.allCandidates);
          setAllCandidates(response?.data?.allCandidates);
        }
      } catch (error) {
        console.error("Error fetching all admins:", error);
      }
      // Set isLoading to false once data fetching completes
    };
    fetchAllAdmin();
    setIsLoading(false);
  }, [isLoading]);

  return (
    <div className="relative w-screen md:w-full overflow-hidden  h-full bg-gray-400">
      <div className="w-full bg-gray-800 text-white p-6">
        <p className="text-lg font-semibold ms-12 ">Candidates</p>
      </div>

      {isLoading && <Loader />}
      {/*
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
      /> */}

      <div className="w-full h-full overflow-x-auto p-1">
        <table className="w-full divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-800 text-center">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                S.no.
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Location
              </th>

              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 relative">
            {filteredCandidates?.map((candidate, index) => (
              <tr key={candidate._id} className="hover:bg-gray-50">
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}.
                </td>
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {candidate?.email}
                </td>
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                  {candidate?.fullName}
                </td>
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {candidate?.isApproved ? "Published" : "Pending"}
                </td>

                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {candidate?.contactInformation?.mobileNumber || "no number"}
                </td>
                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  {candidate?.contactInformation?.currentLocation || "Location"}
                </td>

                <td className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => approveCandidateClickHandler(candidate._id)}
                    className={`p-2 px-5 rounded-md text-white ${
                      !candidate.isApproved
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {!candidate.isApproved ? "Approve" : "Disapprove"}
                  </button>
                </td>
                <td
                  // onClick={() => setSelectedCandidate(candidate)}
                  className="px-1 py-4 text-center whitespace-nowrap text-sm text-gray-500"
                >
                  <AdminOptions
                    data={candidate}
                    candidateModule
                    // // selectedEmployer={selectedEmployer}
                    // // setSelectedEmployer={setSelectedEmployer}
                    // isEmployerDetailsOn={isEmployerDetailsOn}
                    // setIsEmployerDetailsOn={setIsEmployerDetailsOn}
                    setFilteredCandidates={setFilteredCandidates}
                    // setSelectedEmployer={setSelectedEmployer}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {isEmployerDetailsOn && (
          <EmployerDetails
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            data={selectedEmployer}
            setIsEmployerDetailsOn={setIsEmployerDetailsOn}
            setFilteredEmployers={setFilteredEmployers}
            setSelectedEmployer={setSelectedEmployer}
          />
        )}*/}
      </div>
    </div>
  );
}
