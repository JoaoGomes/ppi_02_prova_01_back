const express = require("express");
const cors = require("cors");

const router = express.Router();
router.all("*", cors());

const produtorController = require("../controllers/produtor.controller");

router.get("/testar", cors(), produtorController.test);
router.post("/create", cors(), produtorController.create);
router.get("/nome/:nome", cors(), produtorController.show);
router.get("/id/:id", cors(), produtorController.show_id);
router.put("/produtores/:nome", cors(), produtorController.update);
router.delete("/produtores/:id", cors(), produtorController.destroy);
// router.get("/all", produtorController.findAll);

module.exports = router;
