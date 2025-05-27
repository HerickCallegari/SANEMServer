const express = require('express');
const pessoaController = require('../controllers/pessoaController');

const router = express.Router();

router.post('/', pessoaController.criarPessoa);
router.get('/', pessoaController.listarPessoas);
router.get('/:id', pessoaController.buscarPessoa);
router.put('/:id', pessoaController.atualizarPessoa);
router.delete('/:id', pessoaController.deletarPessoa);

module.exports = router;
