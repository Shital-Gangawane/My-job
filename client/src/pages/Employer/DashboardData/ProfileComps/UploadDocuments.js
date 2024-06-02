import React, { useState } from "react";
import axios from "axios";
import { uploadDocuments } from "../../../../api/employer/axios";
import { useUserContext } from "../../../../context/userContext";

export default function UploadDocuments() {
  const [documents, setDocuments] = useState({
    certificateOfIncorporation: null,
    udyogAadharCertificate: null,
    companyPANCard: null,
    GSTDocument: null,
    officePicture: null,
    visitingCards: null,
    hrProofOfIdentity: null,
  });
  const { user } = useUserContext();

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in documents) {
      if (documents[key]) {
        formData.append(key, documents[key]);
      }
    }

    try {
      const res = await uploadDocuments(user?._id, formData);
      console.log(res);
    } catch (error) {
      console.error("Error uploading documents", error);
    }
  };

  return (
    <div className="w-full h-auto px-4 py-7 bg-white rounded-lg shadow-lg p-7">
      <h1 className="text-lg text-[#202124] lg:text-3xl mb-5 font-medium">
        Upload Company KYC Documents
      </h1>
      <form onSubmit={handleSubmit} className=" p-7">
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Certificate of Incorporation
          </label>
          <input
            type="file"
            name="certificateOfIncorporation"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Udyog Aadhar Certificate
          </label>
          <input
            type="file"
            name="udyogAadharCertificate"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Company PAN Card
          </label>
          <input
            type="file"
            name="companyPANCard"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            GST Document
          </label>
          <input type="file" name="GSTDocument" onChange={handleFileChange} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Office Picture
          </label>
          <input type="file" name="officePicture" onChange={handleFileChange} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Visiting Cards
          </label>
          <input type="file" name="visitingCards" onChange={handleFileChange} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            HR Proof of Identity
          </label>
          <input
            type="file"
            name="hrProofOfIdentity"
            onChange={handleFileChange}
          />
        </div>
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
