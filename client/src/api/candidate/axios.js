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
<<<<<<< HEAD
// };
=======
// };
>>>>>>> fa409242698a4f1a712c0949421441beef547860
