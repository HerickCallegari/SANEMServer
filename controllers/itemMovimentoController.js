const itemMovimentoRepository = require('../repositories/itemMovimentoRepository');

const criar = async (req, res) => {
  try {
    const novoItemMovimento = await itemMovimentoRepository.create(req.body);
    res.status(201).json(novoItemMovimento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar ItemMovimento' });
  }
};

const listar = async (req, res) => {
  try {
    const itens = await itemMovimentoRepository.getAll();
    res.json(itens);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar ItemMovimento' });
  }
};

const buscarPorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const item = await itemMovimentoRepository.getById(id);
    if (!item) {
      return res.status(404).json({ error: 'ItemMovimento não encontrado' });
    }
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar ItemMovimento' });
  }
};

const deletar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await itemMovimentoRepository.remove(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar ItemMovimento' });
  }
};

module.exports = {
  criar,
  listar,
  buscarPorId,
  deletar
};
