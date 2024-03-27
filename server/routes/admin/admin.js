import express from "express";
import { registerAdmin } from "../../controllers/admin/registerAdmin.js";
import { loginAdmin } from "../../controllers/admin/loginAdmin.js";

const router = express.Router();

router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

export default router;
