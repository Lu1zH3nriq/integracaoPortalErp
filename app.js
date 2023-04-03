//importações
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const portal = require('./portal')
require('./db')


//fazer o app ler arquivos json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(3000);

// ------------------------------CHAMA ROTA DO PORTAL----------------------------------------------------------------

app.get('/buscaERP', portal)
app.get('/buscaLancamentos', portal)
app.get('/totalLancamentos', portal)



//-----------------------------------Comentários-------------------------------------------------------------------
/*


*/
