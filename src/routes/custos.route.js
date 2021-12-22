const express = require("express");
const cors = require("cors");

const router = express.Router();
router.all("*", cors());

const custoController = require("../controllers/custo.controller");

router.get("/custo/testar", cors(), custoController.test);
router.post("/custo/create", cors(), custoController.create);

module.exports = router;
