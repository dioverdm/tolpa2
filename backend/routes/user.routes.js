import express from "express";
import { getContactList, getMe } from "../controllers/user.controllers.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.get("/me", isAuthenticatedUser, getMe);
router.get("/contacts", isAuthenticatedUser, getContactList);

export default router;
