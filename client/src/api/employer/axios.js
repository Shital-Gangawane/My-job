import axios from "axios";

const url = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
// const url = "http://localhost:8000";

//Employer Register
export const registerEmployer = async (phoneNumber, password) => {
  try {
    const res = await axios.post(`${url}/api/employer/register`, {
      phoneNumber,
      password,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

//Employer or candidate login
export const login = async (phoneNumber, password) => {
  try {
    const res = await axios.post(`${url}/api/login`, {
      phoneNumber,
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
  postJobCredits,
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
        postJobCredits,
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
      `${url}/api/employer/saveProfile/${id}`,
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

//Fetch all posted jobs of an Employer

export const fetchJobs = async (userId) => {
  try {
    const res = await axios.get(
      `${url}/api/employer/fetchJobs?userId=${userId}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const fetchOneJob = async (jobId) => {
  try {
    const res = await axios.get(`${url}/api/employer/jobs/${jobId}`);
    return res;
  } catch (error) {
    return error.response;
  }
};

// Post job
export const postJobByEmployer = async (jobData, token) => {
  try {
    const res = await axios.post(
      `${url}/api/employer/postJob`,
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

// Post job
export const updateJobByEmployer = async (jobData, jobId, token) => {
  try {
    const res = await axios.put(
      `${url}/api/employer/updateJob`,
      { jobData, jobId },
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

//Fetch applications candidates
export const fetchAppliedCandidates = async (ids) => {
  try {
    const res = await axios.get(`${url}/api/employer/applications/${ids}`);
    return res;
  } catch (error) {
    return error.response;
  }
};

//Fetch shortlisted candidates
export const fetchShortlisted = async (employerId) => {
  try {
    const res = await axios.get(
      `${url}/api/employer/fetchShortlisted?employerId=${employerId}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

//Fetch applications
export const fetchApplications = async (employerId) => {
  try {
    const res = await axios.get(
      `${url}/api/employer/applications?employerId=${employerId}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

// SHortlist candidate
export const shortlistCandidates = async (employerId, candidateId, jobId) => {
  try {
    const res = await axios.put(
      `${url}/api/employer/${employerId}/shortlist/${candidateId}`,
      { jobId }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

//Decline candidate
export const declineCandidates = async (employerId, candidateId, jobId) => {
  try {
    const res = await axios.put(
      `${url}/api/employer/${employerId}/decline/${candidateId}`,
      {
        jobId,
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

// Update status of application
export const updateCandidateStatus = async (
  employerId,
  candidateId,
  jobId,
  status,
  note
) => {
  try {
    const res = await axios.put(`${url}/api/employer/updateCandidateStatus`, {
      employerId,
      candidateId,
      jobId,
      status,
      note,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

// Update status of Shortlisted candidates
export const updateShortlistCandidateStatus = async (
  employerId,
  candidateId,
  jobId,
  status,
  note
) => {
  try {
    const res = await axios.put(
      `${url}/api/employer/updateShortlistCandidateStatus`,
      {
        employerId,
        candidateId,
        jobId,
        status,
        note,
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

//Fetch Packages
export const fetchPackages = async (employerId) => {
  try {
    const res = await axios.get(
      `${url}/api/employer/fetchPackages/${employerId}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

//upload documents
export const uploadDocuments = async (employerId, formData) => {
  try {
    const res = await axios.post(
      `${url}/api/employers/upload-documents/${employerId}`,
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
