const express = require('express');
const router = express.Router();
const itemMovimentoController = require('../controllers/itemMovimentoController');

router.post('/', itemMovimentoController.criar);
router.get('/', itemMovimentoController.listar);
router.get('/:id', itemMovimentoController.buscarPorId);
router.delete('/:id', itemMovimentoController.deletar);

module.exports = router;
