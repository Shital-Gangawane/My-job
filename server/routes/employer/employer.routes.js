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
} = require("../../controllers/employer/updateCandidateStatus.js");
const {
  fetchPackages,
} = require("../../controllers/employer/fetchPackages.js");

const router = express.Router();

//Authentication
router.post("/employer/register", registerEmployer);
router.post("/employer/login", login);

//Fetch Employer Data
router.get("/employer/fetch", fetchEmployerData);
router.get("/employer/fetchJobs", fetchJobs);

//Post job & update JOb
router.post("/employer/postJob", authMiddleware, postJobByEmployer);
router.put("/employer/updateJob", authMiddleware, updateJobByEmployer);

//Shortlist candidates
router.put("/employer/:employerId/shortlist/:candidateId", shortlistCandidate);

//Update application status
router.put("/employer/updateCandidateStatus", updateCandidateStatus);

//fetch on job
router.get("/employer/jobs/:jobId", fetchOneJob);

//fetch applications/candidates
router.get("/employer/applications/:ids", fetchAppsCandidates);

//fetch packages
router.get("/employer/fetchPackages/:employerId", fetchPackages);

//Save Profile
router.put("/employer/saveProfile/:id", cpUpload, saveProfile);

module.exports = router;
