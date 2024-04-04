import express from "express";
import { registerAdmin } from "../../controllers/admin/registerAdmin.js";
import { loginAdmin } from "../../controllers/admin/loginAdmin.js";
import { postJobByAdmin } from "../../controllers/admin/postJobByAdmin.js";
import { authMiddleware } from "../../middlewares/admin/authMiddleware.js";
import { fetchJobsAdmin } from "../../controllers/admin/fetchJobsAdmin.js";

const router = express.Router();

//Authentication
router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

//Features
router.post("/admin/postJob", authMiddleware, postJobByAdmin);
router.get("/admin/fetchJobs", fetchJobsAdmin);
export default router;
