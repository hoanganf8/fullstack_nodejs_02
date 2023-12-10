import express from "express";
import homeController from "../controllers/home.controller.js";
import productController from "../controllers/product.controller.js";
const router = express.Router();
router.get("/", homeController.index);

router.get("/san-pham", productController.index);

export default router;
