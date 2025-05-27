const pool = require('../db');

const create = async (beneficiario) => {
  const resultPessoa = await pool.query(`
    INSERT INTO Pessoa (nome, telefone, endereco, RG, CPF)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING idPessoa
  `, [
    beneficiario.nome,
    beneficiario.telefone,
    beneficiario.endereco,
    beneficiario.RG,
    beneficiario.CPF
  ]);

  const idPessoa = resultPessoa.rows[0].idpessoa;

  const result = await pool.query(`
    INSERT INTO Beneficiario (idBeneficiario, contaCorrente, email, aprovado)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [idPessoa, beneficiario.contaCorrente, beneficiario.email, beneficiario.aprovado]);

  return { ...result.rows[0], idPessoa };
};

const getAll = async () => {
  const result = await pool.query(`
    SELECT b.idBeneficiario, p.nome, p.telefone, p.endereco, p.RG, p.CPF,
           b.contaCorrente, b.email, b.aprovado
    FROM Beneficiario b
    JOIN Pessoa p ON b.idBeneficiario = p.idPessoa
  `);
  return result.rows;
};

const getById = async (id) => {
  const result = await pool.query(`
    SELECT b.idBeneficiario, p.nome, p.telefone, p.endereco, p.RG, p.CPF,
           b.contaCorrente, b.email, b.aprovado
    FROM Beneficiario b
    JOIN Pessoa p ON b.idBeneficiario = p.idPessoa
    WHERE b.idBeneficiario = $1
  `, [id]);
  return result.rows[0];
};

const update = async (id, beneficiario) => {
  await pool.query(`
    UPDATE Pessoa SET nome = $1, telefone = $2, endereco = $3, RG = $4, CPF = $5
    WHERE idPessoa = $6
  `, [
    beneficiario.nome,
    beneficiario.telefone,
    beneficiario.endereco,
    beneficiario.RG,
    beneficiario.CPF,
    id
  ]);

  const result = await pool.query(`
    UPDATE Beneficiario SET contaCorrente = $1, email = $2, aprovado = $3
    WHERE idBeneficiario = $4
    RETURNING *
  `, [beneficiario.contaCorrente, beneficiario.email, beneficiario.aprovado, id]);

  return result.rows[0];
};

const remove = async (id) => {
  await pool.query(`DELETE FROM Pessoa WHERE idPessoa = $1`, [id]);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
};
