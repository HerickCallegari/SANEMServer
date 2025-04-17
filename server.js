const express = require('express')
const pool = require('./db') 
const app = express()
const port = 3000

app.use(express.json())

app.post('/Pessoa', async (req, res) => {
    try {
        const { nome, idade } = req.body

        if (!nome || !idade) {
            return res.status(400).json({ error: 'Nome e idade são obrigatórios' })
        }

        const query = 'INSERT INTO usuario (nome, idade) VALUES ($1, $2) RETURNING *'
        const result = await pool.query(query, [nome, idade])

        res.status(201).json({
            message: 'Usuario cadastrado com sucesso',
            usuario: result.rows[0]
        })
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})


app.get('/Pessoa', async (req, res) => {
    const query = 'select * from usuario'
    try {
        const result = await pool.query(query)
        const users = result.rows
        res.status(200).send(users)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})


app.get('/setup', async (req, res) => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(50),
                idade VARCHAR(50)
            )
        `)
        res.status(200).send('Tabela usuarios criada com sucesso')
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

// Inicia o servidor
app.listen(port, () => {
    console.log(`server esta funcionando na porta ${port}`)
})
