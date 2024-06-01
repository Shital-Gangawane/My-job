import axios from "axios";

const url = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
// const url = "http://localhost:8000";

//Fetch all posted jobs
export const searchJobs = async (searchText, city) => {
  try {
    const params = new URLSearchParams();

    // Only add searchText and city to the parameters if they are truthy
    if (searchText) params.append("searchText", searchText);
    if (city) params.append("city", city);

    console.log("Requesting jobs with:", searchText, city);
    // Make a GET request to fetch all jobs
    const response = await axios.get(`${url}/api/candidate/searchJobs`, {
      params,
    });

    // Update jobs state with the fetched jobs
    return response;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return error;
  }
};

//Check if Candidate Registered
export const checkIfRegistered = async (phoneNumber, userType) => {
  try {
    const res = await axios.get(
      `${url}/api/${userType}/isRegistered?phoneNumber=${phoneNumber}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

//Candidate Register
export const registerCandidate = async (phoneNumber, password) => {
  try {
    const res = await axios.post(`${url}/api/candidate/register`, {
      phoneNumber,
      password,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

//Candidate login
export const loginCandidate = async (phoneNumber, password) => {
  try {
    const res = await axios.post(`${url}/api/candidate/login`, {
      phoneNumber,
      password,
    });
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

//My Resume
export const myResume = async (formData, id) => {
  try {
    const res = await axios.put(
      `${url}/api/candidate/myresume/${id}`,
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

export const followEmployer = async (candidateId, employerId) => {
  try {
    const res = await axios.put(`${url}/api/candidate/followEmployer`, {
      candidateId,
      employerId,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const fetchFollowingEmployers = async (candidateId) => {
  try {
    const res = await axios.get(
      `${url}/api/candidate/fetchFollowingEmployers?candidateId=${candidateId}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const changePassword = async (oldPass, newPass, token) => {
  try {
    const res = await axios.patch(
      `${url}/api/changePassword`,
      { oldPass, newPass },
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

// Job Alert

export const myJobAlert = async (candidateId, formData) => {
  try {
    const res = await axios.put(
      `${url}/api/candidate/setJobAlert?candidateId=${candidateId}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};
