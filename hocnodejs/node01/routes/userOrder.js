import express from "express";
const router = express.Router();
// -> /users/orders
router.get("/", (req, res) => {
  res.send("<h1>Danh sách đơn hàng</h1>");
});
// -> /users/orders/completed
router.get("/completed", (req, res) => {
  res.send("<h1>Danh sách đơn hàng hoàn thành</h1>");
});
// -> /users/orders/cancel
router.get("/cancel", (req, res) => {
  res.send("<h1>Danh sách đơn hàng đã hủy</h1>");
});
export default router;
