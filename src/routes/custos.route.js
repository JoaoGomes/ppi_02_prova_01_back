const express = require("express");
const cors = require("cors");

const router = express.Router();
router.all("*", cors());

const custoController = require("../controllers/custo.controller");

router.get("/custo/testar", cors(), custoController.test);
router.post("/custo/create", cors(), custoController.create);
//router.get("/nome/:nome", cors(), produtorController.show);
//router.get("/id/:id", cors(), produtorController.show_id);
//router.put("/produtores/:nome", cors(), produtorController.update);
//router.delete("/produtores/:id", cors(), produtorController.destroy);
//router.get("/all", cors(), produtorController.all);
//router.post("/login", cors(), produtorController.login);

module.exports = router;
