// eslint-disable-next-line no-unused-vars
const Produtor = require("../models/produtores.model");

// exports.test = function (req, res) {
//  res.send("Olá! Teste ao Controller");
// };

module.exports = {
  async findAll(req, res) {
    try {
      const todos = await Produtor.findAll();
      return res.json(todos);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  async test(req, res) {
    res.send("problemas");
  },

  async create(req, res) {
    const produtor = new Produtor({
      nome: req.body.nome,
      senha: req.body.senha,
    });
    produtor.save((err) => {
      if (err) {
        return next(err);
      }
      res.send("Registro de produtor criado com sucesso");
    });
  },
};

exports.all = async function (req, res) {
  try {
    const todos = await Produtor.findAll();
    // eslint-disable-next-line no-undef
    return res.json(todos);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.details = function (req, res) {
  // eslint-disable-next-line consistent-return
  Produtor.findById(req.params.id, (err) => {
    // eslint-disable-next-line no-undef
    if (err) return next(err);
    res.send(Produtor);
  });
};
