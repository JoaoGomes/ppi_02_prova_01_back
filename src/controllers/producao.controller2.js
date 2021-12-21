const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
const Producao = require("../models/producao.model");

module.exports = {
    async test(req, res) {
      res.send("Sem problemas");
    },
  
    async create(req, res) {
      try {
        const producao = new Producao({
          quantidade: req.body.quantidade,
          valor: req.body.valor,
          status: req.body.status,
          id_dono: req.body.id_dono,
        });

        console.log(producao.data);
        producao.save();
        return res.json(producao);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },

    async destroy(req, res) {
      try {
        const producao = await Producao.findByIdAndRemove(req.params.id);
        return res.json();
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },

    async all(req, res) {
      try {
        const producao = await Producao.find();
        return res.json(producao);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },

  
};