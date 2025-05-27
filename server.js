const express = require('express')
const pool = require('./db') 
const app = express()
const port = 3000;

app.use(express.json())


const itemRoutes = require('./routes/itemRoutes')
app.use('/item', itemRoutes)

const pessoaRoutes = require('./routes/pessoaRoutes');
app.use('/pessoa', pessoaRoutes);

const movimentoRoutes = require('./routes/movimentoRoutes');
app.use('/movimento', movimentoRoutes);

const itemMovimentoRoutes = require('./routes/itemMovimentoRoutes');
app.use('/item-movimento', itemMovimentoRoutes);

const voluntarioRoutes = require('./routes/voluntarioRoutes');
app.use('/voluntario', voluntarioRoutes);

const beneficiarioRoutes = require('./routes/beneficiarioRoutes');
app.use('/beneficiario', beneficiarioRoutes);




// Inicia o servidor
app.listen(port, () => {
    console.log(`server esta funcionando na porta ${port}`)
})
