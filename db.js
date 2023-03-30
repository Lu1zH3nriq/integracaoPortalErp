const mongoose = require("mongoose")
require('dotenv').config()
//-----------------------CONEXAO COM O BANCO DE DADOS MONGODB----------------------------------------
//entregar uma porta para o servidor e conectar ao banco de dados
const DB_User = process.env.USER.DB //usuario do banco de dados
const DB_Pass = process.env.PASSWORD_DB //senha do usuario do banco de dados
mongoose.connect(`mongodb+srv://${DB_User}:${DB_Pass}@apicluster.pbksx7x.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado!')
    })
    .catch((err) => console.log('Erro ao conectar: ' + err)
)
