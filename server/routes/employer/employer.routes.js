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

const router = express.Router();

//Authentication
router.post("/employer/register", registerEmployer);
router.post("/employer/login", login);

router.get("/employer/fetch", fetchEmployerData);

//Save Profile
router.put("/employer/saveProfile/:id", cpUpload, saveProfile);

module.exports = router;
