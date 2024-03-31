import express from "express";
import { getLastMessage, getMessages, sendMessage } from "../controllers/message.controller.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", isAuthenticatedUser, getMessages);
router.post("/send/:id", isAuthenticatedUser, sendMessage);
router.get("/:userId/lastmessage", isAuthenticatedUser, getLastMessage);

export default router;
