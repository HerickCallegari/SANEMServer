const express = require('express')
const pool = require('./db') 
const app = express()
const port = 3000;

app.use(express.json())


const itemRoutes = require('./routes/itemRoutes')
app.use('/item', itemRoutes)



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
