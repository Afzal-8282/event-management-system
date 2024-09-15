// routes/eventRoutes.js
import express from "express";
import { createEvent, getEvents } from "../controllers/eventController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createEvent);
router.get("/", authMiddleware, getEvents);

export default router;
