const Pessoa = require('../models/Pessoa');
const pessoaRepository = require('../repositories/pessoaRepository');

const criarPessoa = async (req, res) => {
  try {
    const { nome, telefone, endereco, RG, CPF } = req.body;

    if (!nome || !RG || !CPF) {
      return res.status(400).json({ error: 'Nome, RG e CPF são obrigatórios' });
    }

    const pessoa = new Pessoa(null, nome, telefone, endereco, RG, CPF);
    const novaPessoa = await pessoaRepository.create(pessoa);

    res.status(201).json(novaPessoa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar pessoa' });
  }
};

const listarPessoas = async (req, res) => {
  try {
    const pessoas = await pessoaRepository.getAll();
    res.status(200).json(pessoas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar pessoas' });
  }
};

const buscarPessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const pessoa = await pessoaRepository.getById(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    res.status(200).json(pessoa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar pessoa' });
  }
};

const atualizarPessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone, endereco, RG, CPF } = req.body;

    const pessoa = new Pessoa(id, nome, telefone, endereco, RG, CPF);
    const pessoaAtualizada = await pessoaRepository.update(id, pessoa);

    if (!pessoaAtualizada) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    res.status(200).json(pessoaAtualizada);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar pessoa' });
  }
};

const deletarPessoa = async (req, res) => {
  try {
    const { id } = req.params;
    await pessoaRepository.remove(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar pessoa' });
  }
};

module.exports = {
  criarPessoa,
  listarPessoas,
  buscarPessoa,
  atualizarPessoa,
  deletarPessoa
};
