const express = require("express");
const { login } = require("../../controllers/login.js");
const {
  registerEmployer,
} = require("../../controllers/employer/registerEmployer.js");
const {
  fetchEmployerData,
} = require("../../controllers/employer/fetchEmployerData.js");
const { saveProfile } = require("../../controllers/employer/saveProfile.js");
const { cpUpload } = require("../../middlewares/multer/multer.js");
const { fetchJobs } = require("../../controllers/employer/fetchJobs.js");
const { fetchOneJob } = require("../../controllers/employer/fetchOneJob.js");
const { authMiddleware } = require("../../middlewares/admin/authMiddleware.js");
const {
  postJobByEmployer,
} = require("../../controllers/employer/postJobByEmployer.js");
const {
  fetchAppsCandidates,
} = require("../../controllers/employer/fetchAppsCandidates.js");
const {
  updateJobByEmployer,
} = require("../../controllers/employer/updateJobByEmployer.js");
const {
  shortlistCandidate,
} = require("../../controllers/employer/shortlistCandidate.js");
const {
  updateCandidateStatus,
  updateShortlistCandidateStatus,
} = require("../../controllers/employer/updateCandidateStatus.js");
const {
  fetchPackages,
} = require("../../controllers/employer/fetchPackages.js");
const {
  checkIfRegistered,
} = require("../../controllers/candidate/checkIfRegistered.js");
const {
  fetchApplications,
} = require("../../controllers/employer/fetchApplications.js");
const {
  fetchShortlisted,
} = require("../../controllers/employer/fetchShortlisted.js");
const {
  declineCandidate,
} = require("../../controllers/employer/declineCandidate.js");
const {
  changePassword,
} = require("../../controllers/employer/changePassword.js");

const router = express.Router();

//Authentication
router.post("/employer/register", registerEmployer);

//Login for both Employer and candidate
router.post("/login", login);

//ChangePassword for both Employer and candidate
router.patch("/changePassword", authMiddleware, changePassword);

//Fetch Employer Data
router.get("/employer/fetch", fetchEmployerData);
router.get("/employer/fetchJobs", fetchJobs);

//Post job & update JOb
router.post("/employer/postJob", authMiddleware, postJobByEmployer);
router.put("/employer/updateJob", authMiddleware, updateJobByEmployer);

//Shortlist candidates
router.put("/employer/:employerId/shortlist/:candidateId", shortlistCandidate);
router.put("/employer/:employerId/decline/:candidateId", declineCandidate);

//Update application status
router.put("/employer/updateCandidateStatus", updateCandidateStatus);
router.put(
  "/employer/updateShortlistCandidateStatus",
  updateShortlistCandidateStatus
);

//fetch on job
router.get("/employer/jobs/:jobId", fetchOneJob);
router.get("/employer/isRegistered", checkIfRegistered);

//fetch applications/candidates
router.get("/employer/applications/:ids", fetchAppsCandidates);
router.get("/employer/applications", fetchApplications);
router.get("/employer/fetchShortlisted", fetchShortlisted);

//fetch packages
router.get("/employer/fetchPackages/:employerId", fetchPackages);

//Save Profile
router.put("/employer/saveProfile/:id", cpUpload, saveProfile);

module.exports = router;
