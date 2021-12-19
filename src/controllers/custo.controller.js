// eslint-disable-next-line no-unused-vars
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());

const Custo = require("../models/custos.model");
const { Mongoose } = require("mongoose");

const accessTokenSecret = "yoursecret";

module.exports = {
    async test(req, res) {
      res.send("Sem problemas");
    },
  
    async create(req, res) {
      try {
        const custo = new Custo({
          nome: req.body.nome,
          valor: req.body.valor,
          status: req.body.status,
          //data: Mongoose.prototype.now(),
          id_dono: req.body.id_dono,
        });

        console.log(custo.data);
        custo.save();
        return res.json(custo);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },

    async destroy(req, res) {
      try {
        // eslint-disable-next-line no-unused-vars
        const custo = await Custo.findByIdAndRemove(req.params.id);
        return res.json();
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },

    async all(req, res) {
      try {
        const custo = await Custo.find();
        return res.json(custo);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },
};