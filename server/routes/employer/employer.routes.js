const express = require("express");
const {
  loginEmployer,
} = require("../../controllers/employer/loginEmployer.js");
const {
  registerEmployer,
} = require("../../controllers/employer/registerEmployer.js");

const router = express.Router();

//Authentication
router.post("/employer/register", registerEmployer);
router.post("/employer/login", loginEmployer);

module.exports = router;
