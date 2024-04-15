import axios from "axios";

// const url = process.env.REACT_APP_SERVER_API_URL || "http://localhost:8000";
const url = "http://localhost:8000";

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
