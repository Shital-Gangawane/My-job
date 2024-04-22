const express = require("express");
const { searchJobs } = require("../../controllers/candidate/searchJobs.js");

const router = express.Router();

//Authentication
// router.post("/candidate/register", registerCandidate);
// router.post("/candidate/login", loginCandidate);

router.get("/candidate/searchJobs", searchJobs);

module.exports = router;
