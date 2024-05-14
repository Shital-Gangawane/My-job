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
// export const updateCandidate = async (
//   employerId,
//   companyName,
//   aboutCompany,
//   industries,
//   phoneNumber,
//   email,
//   website,
//   isApproved
// ) => {
//   try {
//     const res = await axios.put(
//       `${url}/api/admin/employer/update/${employerId}`,
//       {
//         companyName,
//         aboutCompany,
//         industries,
//         phoneNumber,
//         email,
//         website,
//         isApproved,
//       }
//     );
//     return res;
//   } catch (error) {
//     return error.response;
//   }
// };
