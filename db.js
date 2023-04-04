const mongoose = require("mongoose");
require("dotenv").config();
//-----------------------CONEXAO COM O BANCO DE DADOS MONGODB----------------------------------------
//entregar uma porta para o servidor e conectar ao banco de dados
//const DB_User = process.env.USER_DB //usuario do banco de dados
//const DB_Pass = process.env.PASSWORD_DB //senha do usuario do banco de dados
const DB_User = process.env.DB_USER
const DB_Pass = process.env.DB_PASS

const DB_Host = process.env.DB_HOST
const DB_Port = process.env.DB_PORT
const DB_Name = process.env.DB_NAME

const DB = `mongodb://${DB_User}:${DB_Pass}@${DB_Host}:${DB_Port}/${DB_Name}`;
mongoose
  .connect(DB)
  .then(() => {
    console.log("Conectado!");
  })
  .catch((err) => console.log("Erro ao conectar: " + err));
