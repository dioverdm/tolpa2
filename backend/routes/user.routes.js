import express from "express";
import { getContactList, getMe, searchUser, updateProfile } from "../controllers/user.controllers.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.get("/me", isAuthenticatedUser, getMe);
router.post("/update/profile", isAuthenticatedUser, updateProfile);
router.get("/contacts", isAuthenticatedUser, getContactList);
router.get("/search", isAuthenticatedUser, searchUser);
// router.get("/updatelastseen", isAuthenticatedUser, updateLastSeen);

export default router;
