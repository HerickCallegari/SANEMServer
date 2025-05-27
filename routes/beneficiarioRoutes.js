const express = require('express');
const controller = require('../controllers/beneficiarioController');

const router = express.Router();

router.post('/', controller.criarBeneficiario);
router.get('/', controller.listarBeneficiarios);
router.get('/:id', controller.buscarBeneficiario);
router.put('/:id', controller.atualizarBeneficiario);
router.delete('/:id', controller.deletarBeneficiario);

module.exports = router;
