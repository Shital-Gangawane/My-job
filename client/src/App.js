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
import PostNewJob from "./pages/Employer/DashboardData/SubmitJobsComps/PostNewJob";
import JobDetails from "./pages/Employer/DashboardData/JobDetails";
import EmployerProfile from "./pages/Employer/EmployerProfile";
import PackageModule from "./pages/Admin/PackageModule";

import CandidateUserDashboard from "./pages/Candidate/DashboardData/Userdashboard";
import CandidateProfile from "./pages/Candidate/DashboardData/Profile";
import MyApplied from "./pages/Candidate/DashboardData/MyApplied";
import MyResume from "./pages/Candidate/DashboardData/MyResume";
import CandidateMessages from "./pages/Candidate/DashboardData/Messages";
import CandidateMeetings from "./pages/Candidate/DashboardData/Meeting";
import ShortlistJobs from "./pages/Candidate/DashboardData/ShortlistJobs";
import JobAlerts from "./pages/Candidate/DashboardData/JobAlerts";
import CandidateChangePassword from "./pages/Candidate/DashboardData/Changepassword";
import FollowingEmployers from "./pages/Candidate/DashboardData/FollowingEmployers";

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

      {/* Admin Panel */}
      <Route path="admin" element={<AdminApp />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="candidates" element={<CandidateModule />} />
        <Route path="employers" element={<Employers />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="admins" element={<AdminModule />} />
        <Route path="packages" element={<PackageModule />} />
      </Route>

      <Route path="candidate" element={<Candidate />}>
        <Route path="dashboard" element={<CandidateDashboard />}>
          <Route path="" element={<CandidateUserDashboard />} />
          <Route path="profile" element={<CandidateProfile />} />
          <Route path="myresume" element={<MyResume />} />
          <Route path="appliedjobs" element={<MyApplied />} />
          <Route path="shortlistjobs" element={<ShortlistJobs />} />
          <Route path="jobalerts" element={<JobAlerts />} />
          <Route path="messages" element={<CandidateMessages />} />
          <Route path="meetings" element={<CandidateMeetings />} />
          <Route path="following-employers" element={<FollowingEmployers />} />
          <Route path="changepassword" element={<CandidateChangePassword />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Route>

      {/* Employer */}
      <Route path="employer" element={<Employer />}>
        <Route path="dashboard" element={<Empdashboard />}>
          <Route path="" element={<Userdashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myjobs" element={<Myjobs />} />
          <Route path="submitjobs" element={<Submitjobs />} />
          <Route path="applicantjobs" element={<Applicantsjobs />} />
          <Route path="shortlistcandidates" element={<Shortlistcandidate />} />
          <Route path="candidatealerts" element={<Candidatealerts />} />
          <Route path="packages" element={<Packages />} />
          <Route path="messages" element={<Messages />} />
          <Route path="meetings" element={<Meeting />} />
          <Route path="changepassword" element={<Changepassword />} />
          <Route path="deleteprofile" element={<Deleteprofile />} />
          <Route path="logout" element={<Logout />} />
          <Route path="postnewjob" element={<PostNewJob />} />
        </Route>
      </Route>

      {/* For employer */}
      <Route path="/jobs/:jobTitle/:id" element={<JobDetails />} />
      <Route
        path="/employer-profile/:employerId"
        element={<EmployerProfile />}
      />
    </Route>
  )
);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
  );
}

export default App;
