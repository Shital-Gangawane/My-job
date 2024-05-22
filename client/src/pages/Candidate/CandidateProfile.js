import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { fetchUser } from "../../api/employer/axios";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Utility/Loader";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";

function CandidateProfile() {
  const { candidateId } = useParams();
  const [candidate, setCandidate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployerData = async () => {
      try {
        const response = await fetchUser("candidate", candidateId);
        setCandidate(response?.data?.candidate);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        console.error(err);
      }
    };

    fetchEmployerData();
  }, [candidateId]);

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
      <div className=" w-full h-full bg-cover bg-center py-12 px-4">
        <div className="max-w-7xl h-auto mx-auto flex flex-col items-center">
          <img
            src={`${baseUrl}/uploads/${candidate.logoImage}`}
            alt="Company Logo"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-zinc-800 text-3xl font-bold mt-4">
            {candidate.name}
          </h1>
          {/* <Link to={'/candidate/dashboard'}>View Dashboard</Link> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6 mt-(-8rem) mb-6 relative">
          <h2 className="text-2xl font-semibold text-gray-900">About </h2>
          <p className="mt-2 text-gray-700">{candidate.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Details</h3>
              <ul className="mt-2">
                <li>
                  <strong>Email:</strong> {candidate.experience}
                </li>
                <li>
                  <strong>Phone:</strong> {candidate.qualification}
                </li>
                {/* <li>
                  <strong>Industry:</strong> {candidate.industries.join(", ")}
                </li> */}
                <li>
                  <strong>Location:</strong> {candidate.location.city}
                </li>
                {/* <li>
                  <strong>Total Jobs:</strong> {candidate?.postedJobs?.length}
                </li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <ul className="mt-2">
                <li>
                  <strong>Email:</strong>
                  <a
                    href={`mailto:${candidate.email}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {candidate.email}
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${candidate.phoneNumber}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {candidate.phoneNumber}
                  </a>
                </li>
                <li>
                  <strong>Portfolio:</strong>{" "}
                  <a
                    href={candidate.website}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {candidate.portfolio || "Not added"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
