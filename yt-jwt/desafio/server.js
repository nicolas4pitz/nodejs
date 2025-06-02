
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
  const {username, password} = req.body
  
  const user = obj.find(u => u.username === username && u.password === password)

  if(user){
    const token = generateAcessToken({username: user.username})
    return res.json({acessToken: token})
  } else{
    return res.status(401).json({error: "Usuario Invalido"})
  }
  }
)

const routeProfile = app.get("/profile", authenticateToken, (req, res) =>{
 res.json(obj.filter(i => i.username === req.username))
})


function generateAcessToken(user){
  return jwt.sign(user, acessToken)
}

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if(token === null) return res.sendStatuis

  jwt.verify(token, acessToken, (err, user) => {
    if(err) return res.sendStatus(403)
    req.username = user
    next()
  })
}


app.listen(port, () => console.log(`Porta aberta ${port}`))