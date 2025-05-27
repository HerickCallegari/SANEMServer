const Voluntario = require('../models/Voluntario');
const voluntarioRepository = require('../repositories/voluntarioRepository');

const criarVoluntario = async (req, res) => {
  try {
    const { nome, telefone, endereco, RG, CPF, senha } = req.body;

    if (!nome || !RG || !CPF || !senha) {
      return res.status(400).json({ error: 'Nome, RG, CPF e senha são obrigatórios' });
    }

    const voluntario = new Voluntario(null, nome, telefone, endereco, RG, CPF, senha);
    const novo = await voluntarioRepository.create(voluntario);
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar voluntário' });
  }
};

const listarVoluntarios = async (req, res) => {
  try {
    const lista = await voluntarioRepository.getAll();
    res.status(200).json(lista);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar voluntários' });
  }
};

const buscarVoluntario = async (req, res) => {
  try {
    const { id } = req.params;
    const v = await voluntarioRepository.getById(id);
    if (!v) return res.status(404).json({ error: 'Voluntário não encontrado' });
    res.status(200).json(v);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar voluntário' });
  }
};

const atualizarVoluntario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone, endereco, RG, CPF, senha } = req.body;

    const voluntario = new Voluntario(id, nome, telefone, endereco, RG, CPF, senha);
    const atualizado = await voluntarioRepository.update(id, voluntario);

    if (!atualizado) return res.status(404).json({ error: 'Voluntário não encontrado' });

    res.status(200).json(atualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar voluntário' });
  }
};

const deletarVoluntario = async (req, res) => {
  try {
    const { id } = req.params;
    await voluntarioRepository.remove(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar voluntário' });
  }
};

module.exports = {
  criarVoluntario,
  listarVoluntarios,
  buscarVoluntario,
  atualizarVoluntario,
  deletarVoluntario
};
