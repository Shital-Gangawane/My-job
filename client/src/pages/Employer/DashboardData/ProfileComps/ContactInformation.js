import React from "react";
import GoogleMap from "../GoogleMap";
import { useUserContext } from "../../../../context/userContext";

const countries = ["India", "USA", "UK"];

function ContactInformation({ contactInfo, setContactInfo }) {
  const { user } = useUserContext();
  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (name, value) => {
    setContactInfo((prev) => ({
      ...prev,
      location: { ...prev.location, [name]: value },
    }));
  };
console.log(contactInfo)
  return (
    <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
      <h2 className="text-lg text-[#202124] mb-6 font-bold">
        Contact Information
      </h2>
      <form>
        {/* Location Selector */}
        <div className="mb-5">
          <label
            htmlFor="country"
            className="block text-sm font-bold text-gray-900"
          >
            Country
          </label>
          <select
            name="country"
            value={contactInfo.country || ""}
            onChange={handleContactInfoChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          >
            <option value="">Choose a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Phone Number Input */}
        <div className="mb-5">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-bold text-gray-900"
          >
            Phone number
          </label>
          <input
            disabled
            type="text"
            name="phoneNumber"
            value={"+" + contactInfo?.phoneNumber }
            onChange={handleContactInfoChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
        </div>

        {/* Email Input */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user?.email}
            onChange={handleContactInfoChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
        </div>

        {/* Address Input */}
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block text-sm font-bold text-gray-900"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            value={contactInfo.address || ""}
            onChange={handleContactInfoChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
        </div>

        {/* Map Location Inputs */}
        <div className="mb-5 grid grid-cols-2 gap-4">
          <input
            type="text"
            name="latitude"
            placeholder="Latitude"
            value={contactInfo?.location?.latitude || ""}
            onChange={(e) => handleLocationChange("latitude", e.target.value)}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
          <input
            type="text"
            name="longitude"
            placeholder="Longitude"
            value={contactInfo?.location?.longitude || ""}
            onChange={(e) => handleLocationChange("longitude", e.target.value)}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
        </div>

        {/* Google Map Display */}
        <div className="w-full mb-5">{/* <GoogleMap /> */}</div>
      </form>
    </div>
  );
}

export default ContactInformation;
