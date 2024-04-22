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
import CandidateDashboard from "./pages/Candidate/Dashboard";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
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
          <Route path=":_id" element={<EmployerDetails />} />
        </Route>
        <Route path="jobs" element={<Jobs />} />
        <Route path="admins" element={<AdminModule />} />
      </Route>
      <Route path="candidate" element={<Candidate />}>
        <Route path="dashboard" element={<CandidateDashboard />} />
      </Route>
      <Route path="employer" element={<Employer />}>
        <Route path="dashboard" element={<CandidateDashboard />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
