const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
const Unificado = require("../models/unificados.model");

module.exports = {
    async create(req, res) {
      try {
        const unificado = new Unificado({
          nome: req.body.nome,
          quantidade: req.body.quantidade,
          valor: req.body.valor,
          status: req.body.status,
          id_dono: req.body.id_dono,
          id_cadastrador: req.body.id_cadastrador,
          credito: req.body.credito,
          data: req.body.data,
        });

        console.log(unificado.data);
        unificado.save();
        return res.json(unificado);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },

    async destroy(req, res) {
      try {
        const unificado = await Unificado.findByIdAndRemove(req.params.id);
        return res.json();
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },

    async all(req, res) {
      try {
        const unificado = await Unificado.find();
        return res.json(unificado);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },

    async specific_cost(req, res) {
      try {
        const unificado = await Unificado.find( { id_dono: req.params.id, credito: 'false' });
        return res.json(unificado);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    },

    async production(req, res) {
        try {
          const unificado = await Unificado.find( {credito: 'true' });
          return res.json(unificado);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },

    async specific_production(req, res) {
        try {
          const unificado = await Unificado.find({id_dono: req.params.id, credito: 'true' });
          return res.json(unificado);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },
  
    async specific_time(req, res) {
        try {
          const unificado = await Unificado.find( {id_dono: req.params.id, 
                                                      data: {$gte: req.params.gte,
                                                            $lte: req.params.lte} });
          return res.json(unificado);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },
};