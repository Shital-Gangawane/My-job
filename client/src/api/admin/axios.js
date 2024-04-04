import axios from "axios";

const url = "https://app.gigworker.co.in:8000";

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

//Admin Post job
export const postJobByAdmin = async (jobData, token) => {
  try {
    const res = await axios.post(
      `${url}/api/admin/postJob`,
      { jobData },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

//Fetch all posted jobs
export const fetchPostedJobs = async (token) => {
  try {
    // Make a GET request to fetch all jobs
    const response = await axios.get(`${url}/api/admin/fetchJobs`, {
      headers: {
        Authorization: token,
      },
    });
    // Update jobs state with the fetched jobs
    return response;
  } catch (error) {
    return error;
  }
};
