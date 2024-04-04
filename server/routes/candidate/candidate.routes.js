import express from "express";
import { searchJobs } from "../../controllers/candidate/searchJobs.js";

const router = express.Router();

router.get("/candidate/searchJobs", searchJobs);

export default router;
