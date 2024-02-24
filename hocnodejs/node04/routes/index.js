var express = require("express");
var router = express.Router();
const { addJob } = require("../core/queue");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/send-mail", async (req, res) => {
  // const emails = [
  //   "hoangan@f8team.dev",
  //   "hoangan.web@gmail.com",
  //   "luuanhquan@gmail.com",
  // ];
  const email = req.query.email;
  await addJob("sendEmailSubscribe", [email]);
  res.json({ status: "success" });
});

module.exports = router;
