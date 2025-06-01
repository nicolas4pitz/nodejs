
import express from "express"
import dotenv from "dotenv/config"
import jwt from "jsonwebtoken"

const app = express()
app.use(express.json())

const port = process.env.PORT
const acessToken = process.env.ACESS_TOKEN

//Gerar token de acesso
//node > require('crypto').randomBytes(64).toString('hex')

const obj = [{
  username: "xxx",
  password: "xxx"
},{
  username: "zzz",
  password: "zzz"
}]

app.get("/", (req, res) => {
  console.log("3000")
  res.send("Porta")
})

export const loginCaller = app.post("/login", (req, res) => {
  const data = req.body
  
  const token = generateAcessToken(data)
  for(let i = 0; i < obj.length; i++){
    if (token == generateAcessToken(obj[0])){
    res.end.json({acessToken: token})
  }
  res.send("Erro")
  }
  
  
})

function generateAcessToken(user){
  return jwt.sign(user, acessToken)
}


app.listen(port, () => console.log(`Porta aberta ${port}`))