import express from "express";
import userOrder from "./userOrder.js";
import userController from "../controllers/user.controller.js";
const router = express.Router();
// -> /users
router.get("/", userController.index);
// -> /users/add
router.get("/add", userController.add);
// -> /users/active
router.get("/active/:userId", userController.active);

router.use("/orders", userOrder);

export default router;
