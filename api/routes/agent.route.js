import express from "express";
import { getAgentDetails } from "../controllers/agent.controller.js";

const router = express.Router();

//API Routes
router.get("/listings/:listingId", getAgentDetails);

export default router;
