import axios from "axios";

const url = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
// const url = "http://localhost:8000";

//Employer Register
export const registerEmployer = async (email, password) => {
  try {
    const res = await axios.post(`${url}/api/employer/register`, {
      email,
      password,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

//Employer or candidate login
export const login = async (email, password) => {
  try {
    const res = await axios.post(`${url}/api/employer/login`, {
      email,
      password,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

//Edit employer
export const updateEmployer = async (
  employerId,
  companyName,
  aboutCompany,
  industries,
  phoneNumber,
  email,
  website,
  isApproved
) => {
  try {
    const res = await axios.put(
      `${url}/api/admin/employer/update/${employerId}`,
      {
        companyName,
        aboutCompany,
        industries,
        phoneNumber,
        email,
        website,
        isApproved,
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};
