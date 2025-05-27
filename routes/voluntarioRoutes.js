const express = require('express');
const controller = require('../controllers/voluntarioController');

const router = express.Router();

router.post('/', controller.criarVoluntario);
router.get('/', controller.listarVoluntarios);
router.get('/:id', controller.buscarVoluntario);
router.put('/:id', controller.atualizarVoluntario);
router.delete('/:id', controller.deletarVoluntario);

module.exports = router;
