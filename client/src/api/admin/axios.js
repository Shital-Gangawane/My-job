import axios from "axios";

const url = process.env.REACT_APP_API_URL || "http://localhost:8000";

//Admin register
export const registerAdmin = async (email, password) => {
  try {
    const res = await axios.post(`${url}/api/admin/register`, {
      email,
      password,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

//Admin login
export const loginAdmin = async (email, password) => {
  try {
    const res = await axios.post(`${url}/api/admin/login`, { email, password });
    return res;
  } catch (error) {
    return error.response;
  }
};
