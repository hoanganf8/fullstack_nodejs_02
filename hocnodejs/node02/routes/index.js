var express = require("express");
var router = express.Router();
const homeController = require("../controllers/home.controller");
/* GET home page. */
router.get("/", homeController.index);
router.get("/add", homeController.add);
router.post("/add", homeController.handleAdd);
router.get("/edit/:id", homeController.edit);
router.post("/edit/:id", homeController.handleEdit);
router.post("/delete/:id", homeController.delete);

module.exports = router;
