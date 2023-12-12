import express from "express";
import authController from "../controllers/auth.controller.js";
const router = express.Router();
//http get
router.get("/dang-nhap", authController.login);

//http post
router.post("/dang-nhap", authController.handleLogin);
export default router;
