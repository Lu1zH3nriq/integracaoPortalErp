const mongoose = require("mongoose")
require('dotenv').config()
//-----------------------CONEXAO COM O BANCO DE DADOS MONGODB----------------------------------------
//entregar uma porta para o servidor e conectar ao banco de dados
const PRE_DB = process.env.PREFIXO_DB
const URL_DB = process.env.URL_DB
const DB_User = process.env.USER.DB 
const DB_Pass = process.env.PASSWORD_DB 
mongoose.connect(`${PRE_DB}//${DB_User}:${DB_Pass}@${URL_DB}`)
    .then(() => {
        console.log('Conectado!')
    })
    .catch((err) => console.log('Erro ao conectar: ' + err)
)
