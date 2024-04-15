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

const router = express.Router();

//Authentication
router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

//Features
router.post("/admin/postJob", authMiddleware, postJobByAdmin);
router.get("/admin/fetchJobs", authMiddleware, fetchJobsAdmin);
router.get("/admin/fetchAdmins", authMiddleware, fetchAllAdmins);
router.patch("/admin/approveAdmin", authMiddleware, approveAdmin);
router.put("/admin/update/:adminId", updateAdmin);
router.delete("/admin/:adminId", deleteAdmin);

module.exports = router;
