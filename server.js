const express = require('express')
const pool = require('./db') 
const app = express()
const port = 3000;

app.use(express.json())


const itemRoutes = require('./routes/itemRoutes')
app.use('/item', itemRoutes)


// Inicia o servidor
app.listen(port, () => {
    console.log(`server esta funcionando na porta ${port}`)
})
