var express = require("express");
var router = express.Router();
// const sendMail = require("../utils/mail");
const roleController = require("../controllers/role.controller");
const permission = require("../middlewares/permission.middleware");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { req });
});

router.get("/roles", permission("roles.read"), roleController.index);
router.get("/roles/add", permission("roles.create"), roleController.add);
router.post("/roles/add", permission("roles.create"), roleController.handleAdd);
router.get("/roles/edit/:id", permission("roles.update"), roleController.edit);
router.post(
  "/roles/edit/:id",
  permission("roles.update"),
  roleController.handleEdit,
);
router.post(
  "/roles/delete/:id",
  permission("roles.delete"),
  roleController.delete,
);

// router.get("/send-mail", async (req, res) => {
//   const info = await sendMail(
//     "hoangan@fullstack.edu.vn",
//     "Xin chào lớp Fullstack K2",
//     "Tôi là giảng viên lớp Fullstack K2",
//   );
//   res.json(info);
// });

module.exports = router;
