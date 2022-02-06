const express = require("express");
const cors = require("cors");

const router = express.Router();
router.all("*", cors());

const produtorController = require("../controllers/produtor.controller");
const custoController = require("../controllers/custo.controller");
const producaoController = require("../controllers/producao.controller");
const empregadoController = require("../controllers/empregado.controller");
const unificadoController = require("../controllers/unificado.controller");

// Rotas relativas aos Produtores/Cooperados
router.post("/produtores/create", cors(), produtorController.create);
router.delete("/produtores/:id", cors(), produtorController.destroy);
router.get("/produtores/all", cors(), produtorController.all);
router.post("/produtores/login", cors(), produtorController.login);
router.get("/produtores/:id", cors(), produtorController.specific);

// Rotas relativas aos Empregados
router.post("/empregados/create", cors(), empregadoController.create);
router.delete("/empregados/:id", cors(), empregadoController.destroy);
router.get("/empregados/all", cors(), empregadoController.all);
router.post("/empregados/login", cors(), empregadoController.login);

// Rotas relativas aos custos
router.post("/custo/create", cors(), custoController.create);
router.delete("/custo/:id", cors(), custoController.destroy);
router.get("/custo/all", cors(), custoController.all);
router.get("/custo/:id", cors(), custoController.specific);

// Rotas relativas as produções
router.post("/producao/create", cors(), producaoController.create);
router.delete("/producao/:id", cors(), producaoController.destroy);
router.get("/producao/all", cors(), producaoController.all);
router.get("/producao/:id", cors(), producaoController.specific);

// Rotas relativas aos unificados
router.post("/unificado/create", cors(), unificadoController.create);
router.delete("/unificado/:id", cors(),  unificadoController.destroy);
router.get("/unificado/all", cors(),  unificadoController.all);
router.get("/unificado/:id/:gte/:lte", cors(),  unificadoController.specific);


module.exports = router;
