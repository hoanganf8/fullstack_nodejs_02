var express = require("express");
var router = express.Router();
const homeController = require("../controllers/home.controller");
/* GET home page. */
router.get("/", homeController.index);
router.get("/add", homeController.add);
router.post("/add", homeController.handleAdd);

module.exports = router;
