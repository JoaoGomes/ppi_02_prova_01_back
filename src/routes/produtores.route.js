const express = require("express");
const cors = require("cors");

const router = express.Router();
router.all("*", cors());

const produtorController = require("../controllers/produtor.controller");
const custoController = require("../controllers/custo.controller2");
const producaoController = require("../controllers/producao.controller2");
const empregadoController = require("../controllers/empregado.controller");

//router.get("/testar", cors(), produtorController.test);
//router.get("/nome/:nome", cors(), produtorController.show);
//router.get("/id/:id", cors(), produtorController.show_id);
//router.put("/produtores/:nome", cors(), produtorController.update);
router.post("/produtores/create", cors(), produtorController.create);
router.delete("/produtores/:id", cors(), produtorController.destroy);
router.get("/produtores/all", cors(), produtorController.all);
router.post("/produtores/login", cors(), produtorController.login);

router.post("/empregados/create", cors(), empregadoController.create);
router.delete("/empregados/:id", cors(), empregadoController.destroy);
router.get("/empregados/all", cors(), empregadoController.all);
router.post("/empregados/login", cors(), empregadoController.login);

router.post("/custo/create", cors(), custoController.create);
router.delete("/custo/:id", cors(), custoController.destroy);
router.get("/custo/:id", cors(), custoController.specific);
router.get("/custo/all", cors(), custoController.all);

router.post("/producao/create", cors(), producaoController.create);
router.delete("/producao/:id", cors(), producaoController.destroy);
router.get("/producao/:id", cors(), producaoController.specific);
router.get("/producao/all", cors(), producaoController.all);

module.exports = router;
