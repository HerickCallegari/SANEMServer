const Beneficiario = require('../models/Beneficiario');
const beneficiarioRepository = require('../repositories/beneficiarioRepository');

const criarBeneficiario = async (req, res) => {
  try {
    const { nome, telefone, endereco, RG, CPF, contaCorrente, email, aprovado } = req.body;

    if (!nome || !RG || !CPF || !email || !contaCorrente) {
      return res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
    }

    const beneficiario = new Beneficiario(null, nome, telefone, endereco, RG, CPF, contaCorrente, email, aprovado);
    const novo = await beneficiarioRepository.create(beneficiario);
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar beneficiário' });
  }
};

const listarBeneficiarios = async (req, res) => {
  try {
    const lista = await beneficiarioRepository.getAll();
    res.status(200).json(lista);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar beneficiários' });
  }
};

const buscarBeneficiario = async (req, res) => {
  try {
    const { id } = req.params;
    const b = await beneficiarioRepository.getById(id);
    if (!b) return res.status(404).json({ error: 'Beneficiário não encontrado' });
    res.status(200).json(b);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar beneficiário' });
  }
};

const atualizarBeneficiario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone, endereco, RG, CPF, contaCorrente, email, aprovado } = req.body;

    const beneficiario = new Beneficiario(id, nome, telefone, endereco, RG, CPF, contaCorrente, email, aprovado);
    const atualizado = await beneficiarioRepository.update(id, beneficiario);

    if (!atualizado) return res.status(404).json({ error: 'Beneficiário não encontrado' });

    res.status(200).json(atualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar beneficiário' });
  }
};

const deletarBeneficiario = async (req, res) => {
  try {
    const { id } = req.params;
    await beneficiarioRepository.remove(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar beneficiário' });
  }
};

module.exports = {
  criarBeneficiario,
  listarBeneficiarios,
  buscarBeneficiario,
  atualizarBeneficiario,
  deletarBeneficiario
};
