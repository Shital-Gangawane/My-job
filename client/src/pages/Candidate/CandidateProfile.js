import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../api/employer/axios";
import Nav from "../../components/Nav/Nav";
import logo from "../../assets/projob-logo1.png";
import Loader from "../../components/Utility/Loader";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";

function CandidateProfile() {
  const { candidateId } = useParams();
  const [candidate, setCandidate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCandidateData = async () => {
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

    fetchCandidateData();
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
      <div
        className=" w-full h-full bg-cover bg-center py-12 px-4 bg-opacity-10"
        style={
          {
            // backgroundImage: `url(${logo})`,
          }
        }
      >
        <div className="max-w-7xl h-auto mx-auto flex flex-col items-center">
          <img
            src={`${baseUrl}/uploads/${candidate?.logoImage}`}
            alt="Candidate Logo"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-zinc-800 text-3xl font-bold mt-4">
            {candidate?.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">About</h2>
          <p className="mt-2 text-gray-700">{candidate?.description}</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">Education</h3>
            <ul className="mt-2">
              {candidate.educations?.map((edu, index) => (
                <li key={index} className="mb-2">
                  <strong>{edu.degree}</strong> from {edu.institute}, {edu.year}{" "}
                  {edu.specialization}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">Experience</h3>
            <ul className="mt-2">
              {candidate.experiences?.map((exp, index) => (
                <li key={index} className="mb-2">
                  <strong>{exp.title}</strong> at {exp.company} ({exp.startDate}{" "}
                  - {exp.endDate})
                  <ul className="ps-7">
                    {exp.description.split("\n").map((el, i) => (
                      <li key={i} className="list-disc">
                        {el}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">Awards</h3>
            <ul className="mt-2">
              {candidate.awards?.map((award, index) => (
                <li key={index} className="mb-2">
                  <strong>{award.title}</strong>, {award.year}
                  <p>{award.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
          <ul className="mt-2">
            <li>
              <strong>Email: </strong>
              <a
                href={`mailto:${candidate?.email}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {candidate?.email}
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${candidate?.phoneNumber}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {candidate?.phoneNumber}
              </a>
            </li>
            <li>
              <strong>Location:</strong> {candidate.location?.city}
            </li>
            <li>
              <strong>Portfolio:</strong>{" "}
              <a
                href={candidate?.portfolio}
                className="text-blue-600 hover:text-blue-800"
              >
                {candidate?.portfolio || "Not added"}
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">Resume</h3>
            {candidate?.resume ? (
              <a
                href={`${baseUrl}/uploads/resumes/${candidate?.resume}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Download Resume
              </a>
            ) : (
              <p className="text-gray-700">No resume uploaded</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
