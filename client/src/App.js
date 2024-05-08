// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.js/Layout";
import Nav from "./components/Nav/Nav";
import LandingPage from "./pages/LandingPage/Index";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";
import AdminDashboard from "./pages/Admin/Dashboard";
import CandidateDashboard from "./pages/Candidate/CandidateDashboard";
import Candidate from "./pages/Candidate/Candidate";
import CandidateModule from "./pages/Admin/CandidateModule";
import Jobs from "./pages/Admin/Jobs";
import Employers from "./pages/Admin/Employers";
import AdminApp from "./pages/Admin/AdminApp";
import AdminModule from "./pages/Admin/AdminModule";
import SearchedJobs from "./pages/Candidate/SearchedJobs";
import Job from "./pages/Job/Job";
import ViewJob from "./pages/Job/ViewJob";
import Employer from "./pages/Employer/Employer";
import EmployerDetails from "./components/Admin/EmployerDetails";
import Empdashboard from "./pages/Employer/Empdashboard";
import Userdashboard from "./pages/Employer/DashboardData/Userdashboard";
import Profile from "./pages/Employer/DashboardData/Profile";
import Myjobs from "./pages/Employer/DashboardData/Myjobs";
import Submitjobs from "./pages/Employer/DashboardData/Submitjobs";
import Applicantsjobs from "./pages/Employer/DashboardData/Applicantsjobs";
import Shortlistcandidate from "./pages/Employer/DashboardData/Shortlistcandidate";
import Candidatealerts from "./pages/Employer/DashboardData/Candidatealerts";
import Packages from "./pages/Employer/DashboardData/Packages";
import Messages from "./pages/Employer/DashboardData/Messages";
import Changepassword from "./pages/Employer/DashboardData/Changepassword";
import Deleteprofile from "./pages/Employer/DashboardData/Deleteprofile";
import Logout from "./pages/Employer/DashboardData/Logout";
import Meeting from "./pages/Employer/DashboardData/Meeting";
import UserContextProvider from "./context/userContext";
import Slidebar from "./pages/Employer/DashboardData/Slidebar";
import RegisterAdmin from "./components/Admin/RegisterAdmin";
import ProfileMembers from "./pages/Employer/DashboardData/ProfileComps/ProfileMembers/ProfileMembers";

// import { useSelector } from "react-redux";
// import { SelectUser } from "./features/userSlice";
// import Logout from "./pages/Logout/Logout";

// import Navcontents from "./components/Nav/Navcontents";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Login";
// import Home from "./components/home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="profilemember" element={<ProfileMembers />} />

      <Route path="" element={<LandingPage />} />
      {/*searched Jobs on landing page*/}
      <Route path="job" element={<Job />}>
        <Route path="search-results" element={<SearchedJobs />} />
        <Route path=":jobTitle" element={<ViewJob />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="admin" element={<AdminApp />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="candidates" element={<CandidateModule />} />
        <Route path="employers" element={<Employers />}>
          {/* <Route path=":_id" element={<EmployerDetails />} /> */}
        </Route>
        <Route path="jobs" element={<Jobs />} />
        <Route path="admins" element={<AdminModule />} />
      </Route>
      <Route path="candidate" element={<Candidate />}>
        <Route path="dashboard" element={<CandidateDashboard />} />
      </Route>
      <Route path="employer" element={<Employer />}>
        <Route path="dashboard" element={<Empdashboard />} />
        {/* <Route path="slidebar" element={<Slidebar />} /> */}
        <Route path="userdashboard" element={<Userdashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="myjobs" element={<Myjobs />} />
        <Route path="submitjobs" element={<Submitjobs />} />
        <Route path="applicantjobs" element={<Applicantsjobs />} />
        <Route path="shortlistcandidate" element={<Shortlistcandidate />} />
        <Route path="candidatealerts" element={<Candidatealerts />} />
        <Route path="packages" element={<Packages />} />
        <Route path="messages" element={<Messages />} />
        <Route path="meeting" element={<Meeting />} />
        <Route path="changepassword" element={<Changepassword />} />
        <Route path="deleteprofile" element={<Deleteprofile />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Route>
  )
);

function App() {
  // const user=useSelector(SelectUser)
  // return(
  //   <div>
  //     <Navcontents/>
  //     <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home/>}></Route>
  //       <Route path="/Register" element={<Register />}></Route>
  //         <Route path="/Login" element={<Login />}></Route>
  //     </Routes>
  //     </BrowserRouter>
  //   </div>
  // )

  return (
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
  );
}

export default App;
