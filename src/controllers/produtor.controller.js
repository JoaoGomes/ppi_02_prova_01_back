// eslint-disable-next-line no-unused-vars
const Produtor = require("../models/produtores.model");

module.exports = {
  async test(req, res) {
    res.send("Sem problemas");
  },

  async create(req, res) {
    try {
      const produtor = new Produtor({
        nome: req.body.nome,
        senha: req.body.senha,
      });
      console.log(req.body.nome);
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
};
