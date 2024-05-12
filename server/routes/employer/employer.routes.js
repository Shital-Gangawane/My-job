const express = require("express");
const { login } = require("../../controllers/login.js");
const {
  registerEmployer,
} = require("../../controllers/employer/registerEmployer.js");
const {
  fetchEmployerData,
} = require("../../controllers/employer/fetchEmployerData.js");

const router = express.Router();

//Authentication
router.post("/employer/register", registerEmployer);
router.post("/employer/login", login);

router.get("/employer/fetch", fetchEmployerData);

module.exports = router;
