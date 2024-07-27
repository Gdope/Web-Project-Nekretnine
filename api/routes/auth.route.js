import express, { Router } from "express";
import {
  google,
  signin,
  signOut,
  signup,
} from "../controllers/auth.controller.js";
import { sign } from "jsonwebtoken";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);

export default router;
