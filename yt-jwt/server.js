
import express from "express"
import dotenv from "dotenv/config"
import jwt from "jsonwebtoken"

const app = express()
const PORT = process.env.PORT

app.use(express.json())

const posts = [{
    username: "Kyle",
    title: "POST 1"
},{
    username: "Jim",
    title: "POST 2"
}]

app.get("/posts", authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})


function authenticateToken(req, res, next){
    
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        res.send("Mensagem Criada")
        next()
    })
    
}

app.listen(PORT)