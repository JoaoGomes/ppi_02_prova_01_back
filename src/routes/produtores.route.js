const express = require("express");
const cors = require("cors");

const router = express.Router();
router.all("*", cors());

const produtorController = require("../controllers/produtor.controller");
const custoController = require("../controllers/custo.controller2");
const producaoController = require("../controllers/producao.controller");

router.get("/testar", cors(), produtorController.test);
router.post("/create", cors(), produtorController.create);
router.get("/nome/:nome", cors(), produtorController.show);
router.get("/id/:id", cors(), produtorController.show_id);
router.put("/produtores/:nome", cors(), produtorController.update);
router.delete("/produtores/:id", cors(), produtorController.destroy);
router.get("/all", cors(), produtorController.all);
router.post("/login", cors(), produtorController.login);

router.post("/custo/create", cors(), custoController.create);
router.get("/custo/teste", cors(), custoController.test);
router.delete("/custo/:id", cors(), custoController.destroy);
router.get("/custo/all", cors(), custoController.all);

router.post("/producao/create", cors(), producaoController.create);
router.get("/producao/teste", cors(), producaoController.test);
router.delete("/producao/:id", cors(), producaoController.destroy);

module.exports = router;
