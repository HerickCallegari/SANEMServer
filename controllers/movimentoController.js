const Movimento = require('../models/Movimento');
const movimentoRepository = require('../repositories/movimentoRepository');

const criarMovimento = async (req, res) => {
  try {
    const { data, tipo, idVoluntario, idBeneficiario } = req.body;

    if (!tipo || !idVoluntario) {
      return res.status(400).json({ error: 'Tipo e idVoluntario são obrigatórios' });
    }

    const movimento = new Movimento(null, data ? new Date(data) : new Date(), tipo, idVoluntario, idBeneficiario);
    const novoMovimento = await movimentoRepository.create(movimento);

    res.status(201).json(novoMovimento);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar movimento' });
  }
};

const listarMovimentos = async (req, res) => {
  try {
    const movimentos = await movimentoRepository.getAll();
    res.status(200).json(movimentos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar movimentos' });
  }
};

const buscarMovimento = async (req, res) => {
  try {
    const { id } = req.params;
    const movimento = await movimentoRepository.getById(id);

    if (!movimento) {
      return res.status(404).json({ error: 'Movimento não encontrado' });
    }

    res.status(200).json(movimento);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar movimento' });
  }
};

const atualizarMovimento = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, tipo, idVoluntario, idBeneficiario } = req.body;

    const movimento = new Movimento(id, data ? new Date(data) : new Date(), tipo, idVoluntario, idBeneficiario);
    const movimentoAtualizado = await movimentoRepository.update(id, movimento);

    if (!movimentoAtualizado) {
      return res.status(404).json({ error: 'Movimento não encontrado' });
    }

    res.status(200).json(movimentoAtualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar movimento' });
  }
};

const deletarMovimento = async (req, res) => {
  try {
    const { id } = req.params;
    await movimentoRepository.remove(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar movimento' });
  }
};

module.exports = {
  criarMovimento,
  listarMovimentos,
  buscarMovimento,
  atualizarMovimento,
  deletarMovimento
};
