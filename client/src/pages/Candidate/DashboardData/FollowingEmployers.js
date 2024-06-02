import React, { useState, useEffect, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { useUserContext } from "../../../context/userContext";
import { fetchFollowingEmployers } from "../../../api/candidate/axios";
import userDp from "../../../assets/user-dp.png";
import PageLoader from "../../../components/Utility/PageLoader";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
export default function FollowingEmployers() {
  const [employerList, setEmployerList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?._id) {
          setIsLoading(true);
          const res = await fetchFollowingEmployers(user?._id);
          if (res?.data?.success) {
            setEmployerList(res?.data?.candidate?.following);
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user?._id]);

  const filteredEmployers = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    let filtered = employerList?.filter((employer) =>
      employer?.companyName?.toLowerCase().includes(lowerSearchTerm)
    );

    // const getAppliedAt = (job) => {
    //   const application = job.applications.find(
    //     (el) => el.candidate.toString() === user?._id
    //   );
    //   return application ? new Date(application.appliedAt) : new Date(0); // Default to epoch if not found
    // };

    // switch (sortType) {
    //   case "Newest":
    //     filtered?.sort((a, b) => getAppliedAt(b) - getAppliedAt(a));
    //     break;
    //   case "Oldest":
    //     filtered?.sort((a, b) => getAppliedAt(a) - getAppliedAt(b));
    //     break;
    //   default:
    //     // No sorting or additional default sorting logic can be added here
    //     break;
    // }
    return filtered;
  }, [employerList, searchTerm]);

  return (
    <div className=" w-full h-auto  lg:mt-14 px-4 lg:px-14 overflow-y-auto py-7 pb-14">
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          {" "}
          <h1 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
            Following Employers
          </h1>
          <div className=" w-full bg-white rounded-lg shadow-lg p-7">
            <div className=" flex flex-col lg:flex-row gap-3 lg:justify-between ">
              <div className=" bg-[#f0f5f7] rounded-lg  ps-4 flex items-center gap-2">
                <IoIosSearch color="gray" size={20} />
                <input
                  className="bg-[#f0f5f7] rounded-lg p-2 w-full focus:outline-none lg:min-w-96"
                  placeholder="Search by any field..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {/* <div>
                <label>Sort by:</label>
                <select className="bg-[#f0f5f7] rounded-lg p-3 px-4 text-start">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div> */}
            </div>
            <div className="  p-4 rounded-lg mt-7">
              <div className=" text-sm">
                {filteredEmployers?.length ? (
                  <div className=" w-full flex flex-row items-center gap-3 flex-wrap">
                    {filteredEmployers?.map((employer) => (
                      <Link
                        to={`/employer-profile/${employer?._id}`}
                        className=" w-80 cursor-pointer rounded-md shadow-md p-2 px-4 border hover:border-[#6ad61d]"
                        key={employer._id}
                      >
                        <img
                          className="h-14 w-14  rounded-full p-1"
                          src={
                            employer?.logoImage
                              ? `${baseUrl}/${employer?.logoImage}`
                              : userDp
                          }
                        />
                        <p className=" font-medium text-lg">
                          {employer?.companyName}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  "No following employer found."
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
