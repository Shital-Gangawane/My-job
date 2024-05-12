const express = require("express");
const { searchJobs } = require("../../controllers/candidate/searchJobs.js");
const { login } = require("../../controllers/login.js");
const {
  registerCandidate,
} = require("../../controllers/candidate/registerCandidate.js");

const router = express.Router();

//Authentication
router.post("/candidate/register", registerCandidate);
router.post("/candidate/login", login);

router.get("/candidate/searchJobs", searchJobs);

module.exports = router;
