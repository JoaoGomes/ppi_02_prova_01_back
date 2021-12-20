const router = require('express').Router();
let Custo = require('../models/custos.model');

router.route('/all').get((req, res) => {
  Custo.find()
    .then(custos => res.json(custos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  const nome = req.body.nome;
  const valor = Number(req.body.valor);
  const status = Boolean(req.body.status);
  const id_dono = req.body.id_dono;

  const novoCusto = new Custo({
    nome,
    valor,
    status,
    id_dono,
  });

  novoCusto.save()
  .then(() => res.json('Custo adicionado!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Custo.findById(req.params.id)
    .then(custo => res.json(custo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Custo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Custo removido!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Custo.findById(req.params.id)
    .then(custo => {
      custo.nome = req.body.nome;
      custo.valor = Number(req.body.valor);
      custo.status = Boolean(req.body.status);
      custo.id_dono = req.body.id_dono;

      custo.save()
        .then(() => res.json('Custo atualizado!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;