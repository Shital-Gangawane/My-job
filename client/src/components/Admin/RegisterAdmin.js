import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAdmin, updateAdmin } from "../../api/admin/axios";
import { citiesInIndia } from "../../pages/LandingPage/cityData";
import { Dropdown } from "../../pages/LandingPage/Dropdown";
import { skillsByCategory } from "./skillsByCategory";
import { useAdminContext } from "../../context/adminContext";

const RegisterAdmin = ({ setIsAddAdminOn, editing, data }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [roleType, setRoleType] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSkillDropdownOpen, setIsSkillDropdownOpen] = useState(false);
  const [isDeletingTag, setIsDeletingTag] = useState(false);
  const { setAllAdmins } = useAdminContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      // Update admin
      const res = await updateAdmin(
        data?._id,
        name,
        email,
        phone,
        roleType,
        designation,
        cities,
        categories,
        skills,
        isAdmin
      );
      setAllAdmins(res?.data?.allAdmins);
    } else {
      // Register new admin
      const res = await registerAdmin(
        name,
        email,
        phone,
        roleType,
        password,
        designation,
        cities,
        categories,
        skills,
        isAdmin
      );
      setAllAdmins(res?.data?.allAdmins);
    }
    setIsAddAdminOn(false);
  };

  const toggleCityDropdown = () => {
    if (!isDeletingTag) setIsCityDropdownOpen(!isCityDropdownOpen);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const toggleSkillDropdown = () => {
    setIsSkillDropdownOpen(!isSkillDropdownOpen);
  };

  const handleCitySelect = (city) => {
    setCities((prev) => [...prev, city]);
    setIsCityDropdownOpen(false);
  };

  const handleCategorySelect = (category) => {
    setCategories((prev) => [...prev, category]);
    setIsCategoryDropdownOpen(false);
  };

  const handleSkillSelect = (skill) => {
    setSkills((prev) => [...prev, skill]);
    setIsSkillDropdownOpen(false);
  };

  const removeTagsHandler = (tag, setState) => {
    setIsDeletingTag(true);
    setState((prev) => prev?.filter((el) => el !== tag));
    setIsDeletingTag(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(".dropdown")) return;
    setIsCityDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        event.target.closest(".dropdown") ||
        event.target.closest(".input-field")
      )
        return;

      setIsCityDropdownOpen(false);
      setIsCategoryDropdownOpen(false);
      setIsSkillDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isDeletingTag) {
      setIsCityDropdownOpen(false);
      setIsCategoryDropdownOpen(false);
      setIsSkillDropdownOpen(false);
    }
  }, [isDeletingTag]);

  useEffect(() => {
    console.log(data);
    if (editing) {
      setName(data?.name);
      setEmail(data?.email);
      setPhone(data?.phone);
      setDesignation(data?.designation);
      setRoleType(data?.roleType);
      setCategories(data?.categoryAssigned);
      setSkills(data?.skillAssigned);
      setCities(data?.cityAssigned);
      setIsAdmin(data?.isAdmin);
    }
  }, []);

  return (
    <div className="fixed inset-0 h-full  flex flex-col items-center justify-center bg-black bg-opacity-50 ">
      <div className="w-full h-full max-w-lg p-8 bg-white rounded-md shadow-lg overflow-y-auto">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-900">
          {!editing ? "Create an account" : "Edit Details"}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-3  flex flex-col">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="Name"
            />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Email address"
            />
            <input
              id="phone"
              name="phone"
              type="phone"
              autoComplete="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field"
              placeholder="Phone"
            />
            <input
              id="designation"
              name="designation"
              type="text"
              autoComplete="designation"
              required
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="input-field"
              placeholder="Designation"
            />
            <select
              value={roleType}
              onChange={(e) => setRoleType(e.target.value)}
              className="input-field"
            >
              <option value="">Select Role type</option>
              <option value="Full-time">Full-time</option>
              <option value="Intern">Intern</option>
            </select>
            {!editing && (
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Password"
              />
            )}
            <div className="relative">
              <div className=" flex flex-wrap">
                {cities?.length
                  ? cities?.map((city, i) => (
                      <div
                        key={i}
                        className=" inline-block relative border p-1 px-5 rounded-sm bg-purple-600 text-white text-xs"
                      >
                        {city}
                        <p
                          onClick={() => removeTagsHandler(city, setCities)}
                          className=" absolute right-1 -top-1 text-black cursor-pointer hover:text-white"
                        >
                          x
                        </p>
                      </div>
                    ))
                  : ""}
              </div>
              <div
                className="input-field text-start cursor-pointer"
                onClick={toggleCityDropdown}
              >
                Assign City
              </div>
              {isCityDropdownOpen && (
                <Dropdown options={citiesInIndia} onSelect={handleCitySelect} />
              )}
            </div>
            <div className="relative">
              <div className=" flex flex-wrap">
                {categories?.length
                  ? categories?.map((category, i) => (
                      <div
                        key={i}
                        className=" inline-block relative border p-1 px-5 rounded-sm bg-purple-600 text-white text-xs"
                      >
                        {category}
                        <p
                          onClick={() =>
                            removeTagsHandler(category, setCategories)
                          }
                          className=" absolute right-1 -top-1 text-black cursor-pointer hover:text-white"
                        >
                          x
                        </p>
                      </div>
                    ))
                  : ""}
              </div>
              <div
                className="input-field text-start flex flex-wrap cursor-pointer"
                onClick={toggleCategoryDropdown}
              >
                Assign Category
              </div>
              {isCategoryDropdownOpen && (
                <ul
                  value=""
                  // onChange={(e) => handleCategorySelect(e.target.value)}
                  className="input-field text-start"
                  required
                >
                  {Object.keys(skillsByCategory).map((cat) => (
                    <li
                      key={cat}
                      value={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative">
              <div className=" flex flex-wrap">
                {skills?.length
                  ? skills?.map((skill, i) => (
                      <div
                        key={i}
                        className=" inline-block relative border p-1 px-5 rounded-sm bg-purple-600 text-white text-xs "
                      >
                        {skill}
                        <p
                          onClick={() => removeTagsHandler(skill, setSkills)}
                          className=" absolute right-1 -top-1 text-black cursor-pointer hover:text-white"
                        >
                          x
                        </p>
                      </div>
                    ))
                  : ""}
              </div>
              <div
                className="input-field text-start "
                onClick={toggleSkillDropdown}
              >
                <div className=" flex flex-wrap gap-1 cursor-pointer">
                  Assign Skill
                </div>
              </div>
              {isSkillDropdownOpen && (
                <ul
                  value=""
                  onChange={(e) => handleSkillSelect(e.target.value)}
                  className="input-field text-start"
                  required
                >
                  {categories.length > 0 &&
                    skillsByCategory[categories[categories.length - 1]].map(
                      (s) => (
                        <li
                          key={s}
                          value={s}
                          onClick={() => handleSkillSelect(s)}
                          className=" cursor-pointer hover:bg-gray-50"
                        >
                          {s}
                        </li>
                      )
                    )}
                </ul>
              )}
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <label htmlFor="isAdmin">Is Admin?</label>
              <select
                id="isAdmin"
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value === "true")}
                required
                className="input-field cursor-pointer"
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
              <p className="text-xs text-slate-600">*can be changed later</p>
            </div>
          </div>

          <div className="flex flex-col space-y-1 ">
            <button type="submit" className="primary-btn capitalize">
              {editing ? "Save" : "Create Admin"}
            </button>
            <button
              onClick={() => setIsAddAdminOn(false)}
              className="secondary-btn"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterAdmin;
