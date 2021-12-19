const express = require("express");
const cors = require("cors");

const router = express.Router();
router.all("*", cors());

const producaoController = require("../controllers/producao.controller");

router.get("/producao/testar", cors(), producaoController.test);
router.post("/producao/create", cors(), producaoController.create);

module.exports = router;
