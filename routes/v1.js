var express = require("express");
var router = express.Router();
const findAllRepositories = require("../controllers/git.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getRepositories", findAllRepositories);

module.exports = router;
