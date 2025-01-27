import axios from "axios";

const url = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";

// const url = "http://localhost:8000";

//Admin register
export const registerAdmin = async (
  name,
  email,
  phone,
  roleType,
  password,
  designation,
  city,
  category,
  skill,
  isAdmin
) => {
  try {
    const res = await axios.post(`${url}/api/admin/register`, {
      name,
      email,
      phone,
      roleType,
      password,
      designation,
      city,
      category,
      skill,
      isAdmin,
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

export const fetchAllAdmins = async (token) => {
  try {
    // Make a GET request to fetch all jobs
    const response = await axios.get(`${url}/api/admin/fetchAdmins`, {
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

//Approve admin
export const approveAdmin = async (adminId, token) => {
  try {
    const res = await axios.patch(
      `${url}/api/admin/approveAdmin`,
      { adminId },
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

//Admin Editing
export const updateAdmin = async (
  adminId,
  name,
  email,
  phone,
  roleType,
  designation,
  city,
  category,
  skill,
  isAdmin
) => {
  try {
    const res = await axios.put(`${url}/api/admin/update/${adminId}`, {
      name,
      email,
      phone,
      roleType,
      designation,
      city,
      category,
      skill,
      isAdmin,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

//Delete Admin
export const deleteAdmin = async (adminId) => {
  try {
    const res = await axios.delete(`${url}/api/admin/${adminId}`);
    return res;
  } catch (error) {
    return error.response;
  }
};

//Employer Module

// export const fetchAllEmployer = async (token) => {
//   try {
//     // Make a GET request to fetch all jobs
//     const response = await axios.get(`${url}/api/admin/fetchAdmins`, {
//       headers: {
//         Authorization: token,
//       },
//     });
//     // Update jobs state with the fetched jobs
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

//Approve Employer
export const approveEmployer = async (employerId, token) => {
  try {
    const res = await axios.patch(
      `${url}/api/admin/approveEmployer`,
      { employerId },
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

//Delete Employer
export const deleteEmployer = async (employerId) => {
  try {
    const res = await axios.delete(`${url}/api/admin/employer/${employerId}`);
    return res;
  } catch (error) {
    return error.response;
  }
};

//Approve Candidate
export const approveCandidate = async (candidateId, token) => {
  try {
    const res = await axios.patch(
      `${url}/api/admin/approveCandidate`,
      { candidateId },
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

//Delete Candidate
export const deleteCandidate = async (candidateId) => {
  try {
    const res = await axios.delete(`${url}/api/admin/candidate/${candidateId}`);
    return res;
  } catch (error) {
    return error.response;
  }
};

//Package creation for employer
export const createEmployerPackage = async (packageInfo, token) => {
  try {
    const res = await axios.post(
      `${url}/api/admin/employer/package/create`,
      { packageInfo },
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
