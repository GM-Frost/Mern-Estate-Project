//PROXY
import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

//API Routes

router.get("/test", test);

export default router;
