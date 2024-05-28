const express = require("express");
const { registerAdmin } = require("../../controllers/admin/registerAdmin.js");
const { loginAdmin } = require("../../controllers/admin/loginAdmin.js");
const { postJobByAdmin } = require("../../controllers/admin/postJobByAdmin.js");
const { authMiddleware } = require("../../middlewares/admin/authMiddleware.js");
const { fetchJobsAdmin } = require("../../controllers/admin/fetchJobsAdmin.js");
const { fetchAllAdmins } = require("../../controllers/admin/fetchAllAdmins.js");
const { approveAdmin } = require("../../controllers/admin/approveAdmin.js");
const { updateAdmin } = require("../../controllers/admin/updateAdmin.js");
const { deleteAdmin } = require("../../controllers/admin/deleteAdmin.js");
const {
  approveEmployer,
} = require("../../controllers/admin/approveEmployer.js");
const { updateEmployer } = require("../../controllers/admin/updateEmployer.js");
const { deleteEmployer } = require("../../controllers/admin/deleteEmployer.js");
const {
  approveCandidate,
} = require("../../controllers/admin/approveCandidate.js");
const {
  deleteCandidate,
} = require("../../controllers/admin/deleteCandidate.js");
const { createPackage } = require("../../controllers/admin/createPackage.js");

const router = express.Router();

//Authentication
router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

//Features
router.post("/admin/postJob", authMiddleware, postJobByAdmin);
router.get("/admin/fetchJobs", authMiddleware, fetchJobsAdmin);

//Admin Module
router.get("/admin/fetchAdmins", authMiddleware, fetchAllAdmins);
router.patch("/admin/approveAdmin", authMiddleware, approveAdmin);
router.put("/admin/update/:adminId", updateAdmin);
router.delete("/admin/:adminId", deleteAdmin);

//Employer Module
// router.get("/admin/fetchEmployers", authMiddleware, fetchEmployers);
router.patch("/admin/approveEmployer", authMiddleware, approveEmployer);
router.put("/admin/employer/update/:employerId", updateEmployer);
router.delete("/admin/employer/:employerId", deleteEmployer);

//Candidate Module
router.patch("/admin/approveCandidate", authMiddleware, approveCandidate);
router.delete("/admin/candidate/:candidateId", deleteCandidate);

//Create packages
router.post("/admin/employer/package/create", authMiddleware, createPackage);

module.exports = router;
