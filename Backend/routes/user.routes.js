import express from "express";
import {
  generateApiKey,
  getMe,
  login,
  LogOut,
  register,
} from "../controller/user.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/user/register", register);
router.post("/user/login", login);
router.get("/user/logout", LogOut);
router.get("/user/profile/me", isAuthenticated, getMe);
router.get("/user/api-key", isAuthenticated, generateApiKey);

export default router;
