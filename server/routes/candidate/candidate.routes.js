const express = require("express");
const { searchJobs } = require("../../controllers/candidate/searchJobs.js");
const { login } = require("../../controllers/login.js");
const {
  registerCandidate,
} = require("../../controllers/candidate/registerCandidate.js");
const { applyJob } = require("../../controllers/candidate/applyJob.js");
const { myresume } = require("../../controllers/candidate/myresume.js");
const { uploadResume } = require("../../middlewares/multer/resumeMulter.js");

const router = express.Router();

//Authentication
router.post("/candidate/register", registerCandidate);
router.post("/candidate/login", login);

//Profile & resume
router.put("/candidate/myresume/:id", uploadResume.single("resume"), myresume);

router.get("/candidate/searchJobs", searchJobs);

//Job
router.post("/candidate/applyJob", applyJob);

module.exports = router;
