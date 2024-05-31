import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { fetchUser } from "../../api/employer/axios";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Utility/Loader";
import { followEmployer } from "../../api/candidate/axios";
import { useUserContext } from "../../context/userContext";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";

function EmployerProfile() {
  const { employerId } = useParams();
  const [employer, setEmployer] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const fetchEmployerData = async () => {
      try {
        const response = await fetchUser("employer", employerId);
        setEmployer(response?.data?.employer);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        console.error(err);
      }
    };

    fetchEmployerData();
  }, [employerId]);

  const handleFollowClick = async () => {
    try {
      const res = await followEmployer(user?._id, employerId);
      console.log(res);
      if (res?.data?.success) {
        sessionStorage.setItem("user", JSON.stringify(res?.data?.candidate));
        setUser(res?.data?.candidate);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading)
    return (
      <div className="w-screen h-screen relative">
        <Loader />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-100 w-full h-auto pb-10 min-h-screen">
      <Nav />
      <div
        className=" w-full h-full bg-cover bg-center py-12 px-4"
        style={{
          backgroundImage: `url(${baseUrl}/uploads/${employer.coverImage})`,
        }}
      >
        <div className="max-w-7xl h-auto mx-auto flex flex-col items-center">
          <img
            src={`${baseUrl}/uploads/${employer.logoImage}`}
            alt="Company Logo"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-zinc-800 text-3xl font-bold mt-4">
            {employer.companyName}
          </h1>
          <button
            type="button"
            onClick={handleFollowClick}
            className="lg:w-auto mt-5 py-2 px-8 bg-[#6ad61d] hover:bg-blue-600 text-white  rounded-lg transition duration-300 ease-in-out"
          >
            {user?.following?.includes(employerId) ? "Following" : "Follow"}
          </button>
          {/* <Link to={'/employer/dashboard'}>View Dashboard</Link> */}
        </div>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex mt-7 gap-4">
        <div className="w-full bg-white shadow rounded-lg p-6 mt-(-8rem) mb-6 relative">
          <h2 className="text-2xl font-semibold text-gray-900">About Us</h2>
          <p className="mt-2 text-gray-700">{employer.aboutCompany}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Details</h3>
              <ul className="mt-2">
                <li>
                  <strong>Founded:</strong> {employer.foundedDate}
                </li>
                <li>
                  <strong>Company Size:</strong> {employer.companySize}
                </li>
                <li>
                  <strong>Industry:</strong> {employer.industries.join(", ")}
                </li>
                <li>
                  <strong>Location:</strong> {employer.address}
                </li>
                <li>
                  <strong>Total Jobs:</strong> {employer?.postedJobs?.length}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <ul className="mt-2">
                <li>
                  <strong>Email:</strong>
                  <a
                    href={`mailto:${employer.email}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {employer.email}
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${employer.phoneNumber}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {employer.phoneNumber}
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href={employer.website}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {employer.website}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" hidden lg:block w-1/2 h-96 bg-white shadow rounded-lg p-6 mt-(-8rem) mb-6 relative"></div>
      </div>
    </div>
  );
}

export default EmployerProfile;
