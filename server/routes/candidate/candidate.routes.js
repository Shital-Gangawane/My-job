const express = require("express");
const { searchJobs } = require("../../controllers/candidate/searchJobs.js");
const { login } = require("../../controllers/login.js");
const {
  registerCandidate,
} = require("../../controllers/candidate/registerCandidate.js");
const { applyJob } = require("../../controllers/candidate/applyJob.js");
const { myresume } = require("../../controllers/candidate/myresume.js");
const { uploadResume } = require("../../middlewares/multer/resumeMulter.js");
const { cpUpload } = require("../../middlewares/multer/multer.js");
const { saveProfile } = require("../../controllers/candidate/saveProfile.js");
const {
  fetchCandidateData,
} = require("../../controllers/candidate/fetchCandidateData.js");
const {
  checkIfRegistered,
} = require("../../controllers/candidate/checkIfRegistered.js");
const {
  followEmployer,
} = require("../../controllers/candidate/followEmployer.js");
const {
  fetchFollowingEmployers,
} = require("../../controllers/candidate/fetchFollowingEmployers.js");
const { setJobAlert } = require("../../controllers/candidate/setJobAlert.js");

const router = express.Router();

//Authentication
router.post("/candidate/register", registerCandidate);
router.post("/login", login);

//Fetch Candidate Data
router.get("/candidate/fetch", fetchCandidateData);
router.get("/candidate/isRegistered", checkIfRegistered);

//Save Profile & resume
router.put("/candidate/saveProfile/:id", cpUpload, saveProfile);
router.put("/candidate/myresume/:id", uploadResume.single("resume"), myresume);

//Follow employer
router.put("/candidate/followEmployer", followEmployer);

//Fetch Following employers
router.get("/candidate/fetchFollowingEmployers", fetchFollowingEmployers);

//Job Alert
router.put("/candidate/setJobAlert", setJobAlert);
// router.get("/candidate/fetchJobAlert", fetchJobAlert);

//Job
router.get("/candidate/searchJobs", searchJobs);
router.post("/candidate/applyJob", applyJob);

module.exports = router;