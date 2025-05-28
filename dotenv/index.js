import 'dotenv/config'

const hostname = process.env.HOST
const user = process.env.USER
const api = process.env.API_KEY
const db = process.env.DB_PASS
const port = process.env.PORT

console.log(`Host do banco de dados ${hostname}`)
console.log(`Usuario do banco de dados ${user}`)
console.log(`Senha do banco de dados ${db ? "******" : "NÃO DEFINIDA"}`)
console.log(`Chave da API: ${api ? "******" : "NÃO DEFINIDA"}`)
console.log(`Porta do Servidor ${port}`)