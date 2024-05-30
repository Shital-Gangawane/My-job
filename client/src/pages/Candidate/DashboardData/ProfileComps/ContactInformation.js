import React, { useEffect, useState } from "react";
// import GoogleMap from "../GoogleMap";
import { useUserContext } from "../../../../context/userContext";
import { citiesInIndia } from "../../../LandingPage/cityData";
import { Dropdown } from "../../../LandingPage/Dropdown";

const countries = ["India", "USA", "UK"];

function ContactInformation({ contactInfo, setContactInfo }) {
  const { user } = useUserContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      location: { ...prev.location, [name]: value },
    }));
  };

  const handleCitySelect = (city) => {
    setContactInfo((prev) => ({
      ...prev,
      location: { ...prev.location, ["city"]: city },
    }));
    setIsDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(".dropdown")) return;
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="bg-white p-6 mt-5 px-10 rounded-lg block">
      <h2 className="text-lg text-[#202124] mb-6 font-bold">
        Contact Information
      </h2>
      <div>
        {/* Address Input */}
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block text-sm font-bold text-gray-900"
          >
            Address <span className="text-red-600">*</span>
          </label>
          <input
            placeholder="House No/Apartment No"
            type="text"
            name="address"
            required
            value={contactInfo.location.address || ""}
            onChange={handleLocationChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
        </div>

        {/* Location Selector */}
        <div className="mb-5">
          <label
            htmlFor="country"
            className="block text-sm font-bold text-gray-900"
          >
            Country <span className="text-red-600">*</span>
          </label>
          <select
            name="country"
            value={contactInfo.location.country || ""}
            onChange={handleLocationChange}
            required
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
        {/* State Input */}
        <div className="mb-5">
          <label
            htmlFor="state"
            className="block text-sm font-bold text-gray-900"
          >
            State <span className="text-red-600">*</span>
          </label>
          <input
            placeholder="State"
            type="text"
            name="state"
            required
            value={contactInfo.location.state || ""}
            onChange={handleLocationChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
        </div>
        <div className="mb-5 w-full relative">
          <label
            htmlFor="city"
            className="block  text-sm font-bold text-gray-900 pt-2 px-5 py-2"
          >
            City <span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            name="city"
            required
            onClick={() => setIsDropdownOpen(true)}
            value={contactInfo.location.city}
            onChange={(e) => {
              handleLocationChange(e);
            }}
            className="block w-full p-5  bg-gray-100 border-gray-300 focus:outline-[#6ad61d] text-gray-900 border rounded-lg text-base focus:ring-[#6ad61d] focus:border-[#6ad61d] dark:bg-gray-100 dark:border-none dark:placeholder-gray-400 dark:gray-900 dark:focus:ring-[#6ad61d] dark:focus:border-[#6ad61d]"
          />
          {isDropdownOpen && (
            <Dropdown
              options={citiesInIndia}
              onSelect={handleCitySelect}
              landingpage
            />
          )}
        </div>

        {/* Pin Input */}
        <div className="mb-5">
          <label
            htmlFor="pin"
            className="block text-sm font-bold text-gray-900"
          >
            Pin <span className="text-red-600">*</span>
          </label>
          <input
            placeholder="Pin code"
            type="number"
            name="pin"
            required
            value={contactInfo.location.pin || ""}
            onChange={handleLocationChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
        </div>

        {/* Map Location Inputs */}
        {/* <div className="mb-5 grid grid-cols-2 gap-4">
          <input
            type="text"
            name="latitude"
            placeholder="Latitude"
            value={contactInfo.location?.latitude || ""}
            onChange={handleLocationChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
          <input
            type="text"
            name="longitude"
            placeholder="Longitude"
            value={contactInfo.location?.longitude || ""}
            onChange={handleLocationChange}
            className="block w-full p-3 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:border-[#6ad61d] focus:ring-[#6ad61d]"
          />
        </div> */}

        {/* Google Map Display */}
        <div className="w-full mb-5">{/* <GoogleMap /> */}</div>
      </div>
    </div>
  );
}

export default ContactInformation;
