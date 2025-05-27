const pool = require('../db');

const create = async (pessoa) => {
  const query = `
    INSERT INTO Pessoa (nome, telefone, endereco, RG, CPF)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
  const values = [pessoa.nome, pessoa.telefone, pessoa.endereco, pessoa.RG, pessoa.CPF];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getAll = async () => {
  const result = await pool.query('SELECT * FROM Pessoa');
  return result.rows;
};

const getById = async (idPessoa) => {
  const result = await pool.query('SELECT * FROM Pessoa WHERE idPessoa = $1', [idPessoa]);
  return result.rows[0];
};

const update = async (idPessoa, pessoa) => {
  const query = `
    UPDATE Pessoa
    SET nome = $1, telefone = $2, endereco = $3, RG = $4, CPF = $5
    WHERE idPessoa = $6
    RETURNING *
  `;
  const values = [pessoa.nome, pessoa.telefone, pessoa.endereco, pessoa.RG, pessoa.CPF, idPessoa];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const remove = async (idPessoa) => {
  await pool.query('DELETE FROM Pessoa WHERE idPessoa = $1', [idPessoa]);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
};
