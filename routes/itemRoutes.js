const express = require('express')
const itemController = require('../controllers/itemController')

const router = express.Router()

router.post('/', itemController.criarItem)
router.get('/', itemController.listarItens)
router.get('/:id', itemController.buscarItem)
router.put('/:id', itemController.atualizarItem)
router.delete('/:id', itemController.deletarItem)

module.exports = router
