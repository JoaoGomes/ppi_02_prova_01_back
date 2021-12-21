// eslint-disable-next-line no-unused-vars
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());

const Empregado = require("../models/empregados.model");

const accessTokenSecret = "yoursecret";

module.exports = {
  async test(req, res) {
    res.send("Sem problemas");
  },

  async create(req, res) {
    try {
      const empregado = new Empregado({
        nome: req.body.nome,
        senha: req.body.senha,
      });
      //console.log(req.body.nome);
      //console.log(produtor.role);
      empregado.save();
      return res.json(empregado);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  // Pesquisa por nome não esta funcionando
  async show(req, res) {
    try {
      console.log(req.params.nome.toString());
      const empregado = await Empregado.findOne({
        nome: req.params.nome.toString(),
      });
      return res.json(produtor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async show_id(req, res) {
    try {
      const empregado = await Empregado.findById(req.params.id);
      return res.json(empregado);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const empregado = await Empregado.findOne({
        where: { nome: req.params.nome },
      });
      await empregado.update(req.body);
      // eslint-disable-next-line no-undef
      return res.json({ empregado });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async destroy(req, res) {
    try {
      // eslint-disable-next-line no-unused-vars
      const empregado = await Empregado.findByIdAndRemove(req.params.id);
      // produtor.destroy();
      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async all(req, res) {
    try {
      const empregado = await Empregado.find();
      return res.json(empregado);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async login(req, res) {
    try {
      const findEmpregado = await Empregado.findById(req.body.id);
      
      // console.log(`1 - Body ${req.body}`);
      // console.log(`2 - id ${id}`);
      // console.log(`3 - senha ${senha}`);
      // console.log(`4 - Id ${req.body.id} e senha: ${req.body.senha}`);
      // console.log(`5 - Id ${findProducer.id} e senha: ${findProducer.senha}`);

      if (findEmpregado.id === req.body.id && findEmpregado.senha === req.body.senha) {
        // Gera um token de acesso
        const accessToken = jwt.sign(
          { nome: findEmpregado.nome, /*role: findProducer.role*/ },
          accessTokenSecret,
          // eslint-disable-next-line prettier/prettier
          { expiresIn: "2m" },
        );
        const user = findEmpregado.nome;
        const id = findEmpregado.id;
        console.log(`Entramos como empregado: ${findEmpregado.nome}`);

        return res.json({
          accessToken,
          user, id
        });
      }
      console.log(findEmpregado.nome);
      // res.send('Nome de usuário ou senha incorretos');
      return res.status(400).json({ error: "Erro" });
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  },
};