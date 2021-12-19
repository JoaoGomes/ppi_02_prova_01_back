// eslint-disable-next-line no-unused-vars
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());

const Produtor = require("../models/produtores.model");

const accessTokenSecret = "yoursecret";

module.exports = {
  async test(req, res) {
    res.send("Sem problemas");
  },

  async create(req, res) {
    try {
      const produtor = new Produtor({
        nome: req.body.nome,
        senha: req.body.senha,
        role: req.body.role,
      });
      //console.log(req.body.nome);
      //console.log(produtor.role);
      produtor.save();
      return res.json(produtor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  // Pesquisa por nome não esta funcionando
  async show(req, res) {
    try {
      console.log(req.params.nome.toString());
      const produtor = await Produtor.findOne({
        nome: req.params.nome.toString(),
      });
      return res.json(produtor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async show_id(req, res) {
    try {
      const produtor = await Produtor.findById(req.params.id);
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
      // produtor.destroy();
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

  async login(req, res) {
    try {
      const findProducer = await Produtor.findById(req.body.id);
      
      // console.log(`1 - Body ${req.body}`);
      // console.log(`2 - id ${id}`);
      // console.log(`3 - senha ${senha}`);
      // console.log(`4 - Id ${req.body.id} e senha: ${req.body.senha}`);
      // console.log(`5 - Id ${findProducer.id} e senha: ${findProducer.senha}`);

      if (findProducer.id === req.body.id && findProducer.senha === req.body.senha) {
        // Gera um token de acesso
        const accessToken = jwt.sign(
          { nome: findProducer.nome, /*role: findProducer.role*/ },
          accessTokenSecret,
          // eslint-disable-next-line prettier/prettier
          { expiresIn: "2m" },
        );
        const user = findProducer.nome;
        const role = findProducer.role;
        const id = findProducer.id;
        console.log(`Entramos aqui2.${findProducer.nome}`);

        return res.json({
          accessToken,
          user, role, id
        });
      }
      console.log(findProducer.nome);
      // res.send('Nome de usuário ou senha incorretos');
      return res.status(400).json({ error: "Erro" });
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  },
};
