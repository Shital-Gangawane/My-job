const express = require("express");
const { searchJobs } = require("../../controllers/candidate/searchJobs.js");

const router = express.Router();

router.get("/candidate/searchJobs", searchJobs);

module.exports = router;
