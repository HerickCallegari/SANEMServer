const pool = require('../db')

const create = async (item) => {
  const query = `
    INSERT INTO Item (tipo, tamanho, quantidade)
    VALUES ($1, $2, $3)
    RETURNING *
  `
  const values = [item.tipo, item.tamanho, item.quantidade]
  const result = await pool.query(query, values)
  return result.rows[0]
}

const getAll = async () => {
  const result = await pool.query('SELECT * FROM Item')
  return result.rows
}

const getById = async (idItem) => {
  const result = await pool.query('SELECT * FROM Item WHERE idItem = $1', [idItem])
  return result.rows[0]
}

const update = async (idItem, item) => {
  const query = `
    UPDATE Item
    SET tipo = $1, tamanho = $2, quantidade = $3
    WHERE idItem = $4
    RETURNING *
  `
  const values = [item.tipo, item.tamanho, item.quantidade, idItem]
  const result = await pool.query(query, values)
  return result.rows[0]
}

const remove = async (idItem) => {
  await pool.query('DELETE FROM Item WHERE idItem = $1', [idItem])
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
}
