import express from "express";
import { getContactList, getMe, searchUser } from "../controllers/user.controllers.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.get("/me", isAuthenticatedUser, getMe);
router.get("/contacts", isAuthenticatedUser, getContactList);
router.get("/search", isAuthenticatedUser, searchUser);

export default router;
