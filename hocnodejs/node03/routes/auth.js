var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth.controller");
const passport = require("passport");

router.get("/login", authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  }),
  // (req, res) => {
  //   const user = req.user;
  //   res.json({ user });
  // },
);
router.get("/google/redirect", passport.authenticate("google"));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  }),
  // (req, res) => {
  //   res.send("ok");
  // },
);
router.get("/logout", (req, res) => {
  req.logout((err) => {});
  return res.redirect("/auth/login");
});

module.exports = router;
