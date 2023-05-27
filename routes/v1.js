var express = require("express");
var router = express.Router();
const findAllRepositories = require("../controllers/git.controller");
const formRegisterContact = require("../controllers/user.controller");
const chatUser = require("../controllers/chat.controller");
const dictionaryActions = require("../controllers/dictionary.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getRepositories", findAllRepositories);

// {
//   "name":"",
//   "email":"",
//   "cellphone":"",
//   "topic": "",
//   "message":"",
//   "asociate_data":{
//       "ip":"",
//       "browser":""
//   }
// }
router.post("/formContact", formRegisterContact);

router.post("/message", chatUser);

router.all("/dictionary", dictionaryActions);

module.exports = router;
