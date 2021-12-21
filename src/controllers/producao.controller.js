const router = require('express').Router();
let Producao = require('../models/producao.model');

router.route('/all').get((req, res) => {
  Producao.find()
    .then(producoes => res.json(producoes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  const quantidade = Number(req.body.quantidade);
  const valor = Number(req.body.valor);
  const status = Boolean(req.body.status);
  const id_dono = req.body.id_dono;

  const novoCusto = new Custo({
    quantidade,
    valor,
    status,
    id_dono,
  });

  novaProducao.save()
  .then(() => res.json('Produção adicionada!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Producao.findById(req.params.id)
    .then(producao => res.json(producao))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Producao.findByIdAndDelete(req.params.id)
    .then(() => res.json('Produção removida!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Producao.findById(req.params.id)
    .then(producao => {
      producao.quantidade = Number(req.body.quantidade);
      producao.valor = Number(req.body.valor);
      producao.status = Boolean(req.body.status);
      producao.id_dono = req.body.id_dono;

      producao.save()
        .then(() => res.json('Produção atualizada!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;