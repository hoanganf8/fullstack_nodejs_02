var express = require("express");
var router = express.Router();
const userController = require("../controllers/api/v1/user.controller");
router.get("/v1/users", userController.index);
router.post("/v1/users", userController.store);
router.get("/v1/users/:id", userController.find);
router.put("/v1/users/:id", userController.update);
router.patch("/v1/users/:id", userController.update);

module.exports = router;
