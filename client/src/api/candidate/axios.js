import axios from "axios";

const url = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
// const url = "http://localhost:8000";

//Fetch all posted jobs
export const searchJobs = async (searchText, city) => {
  try {
    console.log(searchText, city);
    // Make a GET request to fetch all jobs
    const response = await axios.get(
      `${url}/api/candidate/searchJobs?searchText=${searchText}&city=${city}`
    );
    // Update jobs state with the fetched jobs
    return response;
  } catch (error) {
    return error;
  }
};

//Candidate Register
export const registerCandidate = async (email, password) => {
  try {
    const res = await axios.post(`${url}/api/candidate/register`, {
      email,
      password,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

//Candidate login
export const loginCandidate = async (email, password) => {
  try {
    const res = await axios.post(`${url}/api/candidate/login`, {
      email,
      password,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

//Edit Candidate
export const updateCandidate = async (
  candidateId,
  fullName,
  aboutDescription,
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
      `${url}/api/admin/candidate/update/${candidateId}`,
      {
        fullName,
  aboutDescription,
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

//Job apply
export const applyJob = async (userId, jobId) => {
  try {
    const res = await axios.post(`${url}/api/candidate/applyJob`, {
      userId,
      jobId,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

//Get Employer or candidate info
export const fetchUser = async (userType, userId) => {
  try {
    const res = await axios.get(
      `${url}/api/${userType}/fetch?userId=${userId}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

//Save Profile
export const saveProfile = async (formData, id) => {
  try {
    const res = await axios.put(
      `${url}/api/candidate/saveProfile/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};
