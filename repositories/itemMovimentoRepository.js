const pool = require('../db');

const create = async (itemMovimento) => {
  const query = `
    INSERT INTO ItemMovimento (idItem, idMovimento, quantidade)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const values = [itemMovimento.idItem, itemMovimento.idMovimento, itemMovimento.quantidade];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getAll = async () => {
  const result = await pool.query('SELECT * FROM ItemMovimento');
  return result.rows;
};

const getById = async (id) => {
  const result = await pool.query('SELECT * FROM ItemMovimento WHERE idItemMovimento = $1', [id]);
  return result.rows[0];
};

const update = async (id, itemMovimento) => {
  const query = `
    UPDATE ItemMovimento
    SET idItem = $1, idMovimento = $2, quantidade = $3
    WHERE idItemMovimento = $4
    RETURNING *
  `;
  const values = [itemMovimento.idItem, itemMovimento.idMovimento, itemMovimento.quantidade, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const remove = async (id) => {
  await pool.query('DELETE FROM ItemMovimento WHERE idItemMovimento = $1', [id]);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
};
