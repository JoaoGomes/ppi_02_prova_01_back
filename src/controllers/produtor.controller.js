const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());

const Produtor = require("../models/produtores.model");

const accessTokenSecret = "yoursecret";

module.exports = {
  async create(req, res) {
    try {
      const produtor = new Produtor({
        nome: req.body.nome,
        senha: req.body.senha,
      });

      produtor.save();
      return res.json(produtor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const produtor = await Produtor.findOne({
        where: { nome: req.params.nome },
      });
      await produtor.update(req.body);
      // eslint-disable-next-line no-undef
      return res.json({ produtor });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async destroy(req, res) {
    try {
      // eslint-disable-next-line no-unused-vars
      const produtor = await Produtor.findByIdAndRemove(req.params.id);
      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async all(req, res) {
    try {
      const produtor = await Produtor.find();
      return res.json(produtor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async specific(req, res) {
    try {
      const produtor = await Produtor.findOne({ _id: req.params.id});
      return res.json(produtor.nome);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },


  async login(req, res) {
    try {
      const findProducer = await Produtor.findById(req.body.id);
      
      if (findProducer.id === req.body.id && findProducer.senha === req.body.senha) {
        // Gera um token de acesso
        const accessToken = jwt.sign(
          { nome: findProducer.nome },
          accessTokenSecret,
          // eslint-disable-next-line prettier/prettier
          { expiresIn: "2m" },
        );
        const user = findProducer.nome;
        const id = findProducer.id;
        console.log(`Entramos como cooperado: ${findProducer.nome}`);

        return res.json({
          accessToken,
          user, id
        });
      }
      return res.status(400).json({ error: "Erro" });
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  },
};
