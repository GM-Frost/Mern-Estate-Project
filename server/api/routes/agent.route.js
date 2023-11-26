import express from "express";
import {
  getAgentDetails,
  getAllAgents,
} from "../controllers/agent.controller.js";

const router = express.Router();

//API Routes
router.get("/listings/:listingId", getAgentDetails);
router.get("/getAgents", getAllAgents);
export default router;
