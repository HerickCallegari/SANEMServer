const Item = require('../models/Item')
const itemRepository = require('../repositories/itemRepository')

const criarItem = async (req, res) => {
  try {
    const { tipo, tamanho, quantidade } = req.body

    if (!tipo) {
      return res.status(400).json({ error: 'Tipo é obrigatório' })
    }

    const item = new Item(null, tipo, tamanho, quantidade || 0)
    const novoItem = await itemRepository.create(item)
    res.status(201).json(novoItem)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao criar item' })
  }
}

const listarItens = async (req, res) => {
  try {
    const itens = await itemRepository.getAll()
    res.status(200).json(itens)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao listar itens' })
  }
}

const buscarItem = async (req, res) => {
  try {
    const { id } = req.params
    const item = await itemRepository.getById(id)

    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado' })
    }

    res.status(200).json(item)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao buscar item' })
  }
}

const atualizarItem = async (req, res) => {
  try {
    const { id } = req.params
    const { tipo, tamanho, quantidade } = req.body

    const item = new Item(id, tipo, tamanho, quantidade)
    const itemAtualizado = await itemRepository.update(id, item)

    if (!itemAtualizado) {
      return res.status(404).json({ error: 'Item não encontrado' })
    }

    res.status(200).json(itemAtualizado)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao atualizar item' })
  }
}

const deletarItem = async (req, res) => {
  try {
    const { id } = req.params
    await itemRepository.remove(id)
    res.status(204).send()
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao deletar item' })
  }
}

module.exports = {
  criarItem,
  listarItens,
  buscarItem,
  atualizarItem,
  deletarItem
}
