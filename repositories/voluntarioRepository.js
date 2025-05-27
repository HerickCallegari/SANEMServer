const pool = require('../db');

const create = async (voluntario) => {
  // 1. Cria a Pessoa
  const queryPessoa = `
    INSERT INTO Pessoa (nome, telefone, endereco, RG, CPF)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING idPessoa
  `;
  const pessoaResult = await pool.query(queryPessoa, [
    voluntario.nome,
    voluntario.telefone,
    voluntario.endereco,
    voluntario.RG,
    voluntario.CPF
  ]);
  const idPessoa = pessoaResult.rows[0].idpessoa;

  // 2. Cria o Voluntario
  const queryVoluntario = `
    INSERT INTO Voluntario (idVoluntario, senha)
    VALUES ($1, $2)
    RETURNING *
  `;
  const result = await pool.query(queryVoluntario, [idPessoa, voluntario.senha]);

  return { ...result.rows[0], idPessoa }; // retorna os dados do voluntário
};

const getAll = async () => {
  const query = `
    SELECT v.idVoluntario, p.nome, p.telefone, p.endereco, p.RG, p.CPF, v.senha
    FROM Voluntario v
    JOIN Pessoa p ON v.idVoluntario = p.idPessoa
  `;
  const result = await pool.query(query);
  return result.rows;
};

const getById = async (id) => {
  const query = `
    SELECT v.idVoluntario, p.nome, p.telefone, p.endereco, p.RG, p.CPF, v.senha
    FROM Voluntario v
    JOIN Pessoa p ON v.idVoluntario = p.idPessoa
    WHERE v.idVoluntario = $1
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const update = async (id, voluntario) => {
  await pool.query(
    `
    UPDATE Pessoa SET nome = $1, telefone = $2, endereco = $3, RG = $4, CPF = $5
    WHERE idPessoa = $6
  `,
    [voluntario.nome, voluntario.telefone, voluntario.endereco, voluntario.RG, voluntario.CPF, id]
  );

  const result = await pool.query(
    `
    UPDATE Voluntario SET senha = $1
    WHERE idVoluntario = $2
    RETURNING *
  `,
    [voluntario.senha, id]
  );

  return result.rows[0];
};

const remove = async (id) => {
  await pool.query('DELETE FROM Pessoa WHERE idPessoa = $1', [id]); // cascata remove o voluntário
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
};
