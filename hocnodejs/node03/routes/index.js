var express = require("express");
var router = express.Router();
const sendMail = require("../utils/mail");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { req });
});

router.get("/send-mail", async (req, res) => {
  const info = await sendMail(
    "hoangan@fullstack.edu.vn",
    "Xin chào lớp Fullstack K2",
    "Tôi là giảng viên lớp Fullstack K2",
  );
  res.json(info);
});

module.exports = router;
