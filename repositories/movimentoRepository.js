const pool = require('../db');

const create = async (movimento) => {
  const query = `
    INSERT INTO Movimento (data, tipo, idVoluntario, idBeneficiario)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [movimento.data, movimento.tipo, movimento.idVoluntario, movimento.idBeneficiario];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getAll = async () => {
  const result = await pool.query('SELECT * FROM Movimento');
  return result.rows;
};

const getById = async (idMovimento) => {
  const result = await pool.query('SELECT * FROM Movimento WHERE idMovimento = $1', [idMovimento]);
  return result.rows[0];
};

const update = async (idMovimento, movimento) => {
  const query = `
    UPDATE Movimento
    SET data = $1, tipo = $2, idVoluntario = $3, idBeneficiario = $4
    WHERE idMovimento = $5
    RETURNING *
  `;
  const values = [movimento.data, movimento.tipo, movimento.idVoluntario, movimento.idBeneficiario, idMovimento];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const remove = async (idMovimento) => {
  await pool.query('DELETE FROM Movimento WHERE idMovimento = $1', [idMovimento]);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
};
