import React, { useState } from "react";

const CandidateEditor = ({ setIsEditing }) => {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    photos: [],
    mobileNumber: "",
    currentLocation: "",
    qualification: "",
    experience: {},
    otherDetails: {},
    kyc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const skill = e.target.value.trim();
      if (skill !== "") {
        setSkills((prevSkills) => [...prevSkills, skill]);
        e.target.value = ""; // Clear input after adding skill
      }
    }
  };

  const removeTagsHandler = (skill) => {
    setSkills(skills.filter((el) => el !== skill));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ ...formData, skills });
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="fixed inset-0 z-20   flex justify-center items-center w-full h-full bg-gray-400 bg-opacity-35 ">
      <form
        className="bg-white w-96  h-full p-6 rounded-lg shadow-md overflow-y-auto "
        onSubmit={handleSubmit}
        onKeyDown={handleKeyPress}
      >
        <h2 className="text-2xl font-bold mb-4">Candidate Editor</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-start">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <br />
        <div className="mb-4">
          <label className="block text-gray-700 text-start">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <br />
        <div className="mb-4">
          <label className="block text-gray-700 text-start">
            Mobile Number:
          </label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="mb-4">
          <label className="block text-gray-700 text-start">
            Current Location:
          </label>
          <input
            type="text"
            name="currentLocation"
            value={formData.currentLocation}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="mb-4">
          <label className="block text-gray-700 text-start">
            Qualification:
          </label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="mb-4">
          <label className="block text-gray-700 text-start">
            Skills (comma-separated):
          </label>
          <input
            type="text"
            name="skills"
            className="w-full px-4 py-2 rounded-lg border bg-gray-100 border-gray-300 focus:outline-none focus:border-blue-500"
            // onChange={(e) => setSkills((prev) => [...prev, e.target.value])}
            onKeyDown={handleSkillKeyPress}
          />
          <div className="flex flex-wrap gap-2">
            {skills?.length !== 0 &&
              skills?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-500 relative text-white px-4 py-1 rounded-md"
                >
                  {skill}
                  <p
                    onClick={() => removeTagsHandler(skill)}
                    className=" absolute right-1 -top-2 hover:text-red-600 cursor-pointer p-1"
                  >
                    x
                  </p>
                </div>
              ))}
          </div>
        </div>

        <br />
        <div className="mb-4">
          <label className="block text-gray-700 text-start">
            KYC (Adhar card or Pan card):
          </label>
          <select name="kyc" value={formData.kyc} onChange={handleChange}>
            <option value="">Select</option>
            <option value="adhar card">Adhar Card</option>
            <option value="pan card">Pan Card</option>
          </select>
        </div>

        <br />
        <div className=" flex flex-col gap-2">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300 ease-in-out"
          >
            Save Changes
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="secondary-btn "
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateEditor;
