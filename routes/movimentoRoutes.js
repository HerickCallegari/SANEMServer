const express = require('express');
const movimentoController = require('../controllers/movimentoController');

const router = express.Router();

router.post('/', movimentoController.criarMovimento);
router.get('/', movimentoController.listarMovimentos);
router.get('/:id', movimentoController.buscarMovimento);
router.put('/:id', movimentoController.atualizarMovimento);
router.delete('/:id', movimentoController.deletarMovimento);

module.exports = router;
