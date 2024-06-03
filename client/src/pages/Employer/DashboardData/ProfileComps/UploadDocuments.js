import React, { useState } from "react";
import { useUserContext } from "../../../../context/userContext";
import { uploadDocuments } from "../../../../api/employer/axios";
import { BsFilePdfFill } from "react-icons/bs";
import PageLoader from "../../../../components/Utility/PageLoader";
import Success from "../../../../components/Utility/Success";

const baseUrl = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";

export default function UploadDocuments() {
  const { user, setUser } = useUserContext();
  const companyKYC = user?.companyKYC || {};

  const [documents, setDocuments] = useState({
    certificateOfIncorporation: companyKYC.certificateOfIncorporation || null,
    udyogAadharCertificate: companyKYC.udyogAadharCertificate || null,
    companyPANCard: companyKYC.companyPANCard || null,
    GSTDocument: companyKYC.GSTDocument || null,
    officePicture: companyKYC.officePicture || null,
    visitingCards: companyKYC.visitingCards || null,
    hrProofOfIdentity: companyKYC.hrProofOfIdentity || null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields based on the owner's designation
    const requiredFields = Object.keys(documents).filter((key) => {
      if (
        user?.designation === "Owner" &&
        key !== "hrProofOfIdentity" &&
        !companyKYC[key]
      ) {
        return !documents[key];
      } else if (user?.designation !== "Owner" && !companyKYC[key]) {
        return !documents[key];
      }
      return false;
    });

    if (requiredFields.length > 0) {
      setMissingFields(requiredFields);
      return;
    } else {
      setMissingFields([]);
    }

    const formData = new FormData();
    const existingPaths = {};

    for (const key in documents) {
      if (documents[key] instanceof File) {
        formData.append(key, documents[key]);
      } else if (companyKYC[key]) {
        existingPaths[key] = companyKYC[key];
      }
    }

    // formData.append("existingPaths", JSON.stringify(existingPaths));

    try {
      setIsLoading(true);
      const res = await uploadDocuments(user?._id, formData);
      console.log(res);
      if (res?.data?.success) {
        const updatedDocuments = { ...companyKYC, ...res?.data?.documentPaths };
        setDocuments(updatedDocuments);
        setUser((prevUser) => ({
          ...prevUser,
          companyKYC: updatedDocuments,
        }));
        sessionStorage.setItem(
          "user",
          JSON.stringify({ ...user, companyKYC: updatedDocuments })
        );
        setOnSuccess(true);
        setTimeout(() => setOnSuccess(false), 1000);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error uploading documents", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-auto px-4 py-7 relative bg-white rounded-lg shadow-lg p-7">
      {isLoading && <PageLoader />}
      {onSuccess && <Success text="Uploaded Documents!" />}
      <h1 className="text-lg text-[#202124] lg:text-3xl mb-5 font-medium">
        Upload Company KYC Documents
      </h1>
      {user?.isApproved && user?.companyKYC && (
        <p className="text-yellow-500">
          Documents approval is pending with your HR.
        </p>
      )}
      {missingFields.length > 0 && (
        <div className="mb-4 text-red-600">
          <p>The following fields are required:</p>
          <ul>
            {missingFields.map((field) => (
              <li className="capitalize" key={field}>
                {field.split(/(?=[A-Z])/).join(" ")}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit} className="p-7">
        {Object.keys(documents).map((key) => (
          <div key={key} className="pb-5 mb-3">
            <label
              htmlFor={key}
              className="block text-sm font-bold text-gray-900 capitalize"
            >
              {key.split(/(?=[A-Z])/).join(" ")}{" "}
              {((user?.designation === "Owner" &&
                key !== "hrProofOfIdentity") ||
                user?.designation !== "Owner") && (
                <span className="text-red-600">*</span>
              )}
            </label>
            <input
              type="file"
              name={key}
              id={key}
              onChange={handleFileChange}
              className="w-full hidden text-sm text-gray-900 py-2.5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
            />
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => document.getElementById(key).click()}
                className="py-2 px-7 bg-[#6ad61d] hover:bg-blue-500 text-white rounded-lg"
              >
                Browse
              </button>
              {(documents[key] || (companyKYC && companyKYC[key])) && (
                <div className="flex items-center gap-2">
                  <BsFilePdfFill className="text-blue-500" />
                  <a
                    href={`${baseUrl}/${companyKYC[key]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                    download
                  >
                    {documents[key]?.name || "Download"}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Upload Documents
        </button>
      </form>
    </div>
  );
}
