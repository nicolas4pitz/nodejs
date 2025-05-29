
import express from "express"
import dotenv from "dotenv/config"
import jwt from "jsonwebtoken"

const app = express()
const PORT = 4000

app.use(express.json())

const refreshTokens = []

app.post("/token", (req, res) => {
    const refreshToken = req.body.token

    if(refreshToken == null) return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        const accessTokent = generateAcessToken({name: user.name})
        res.json({accessToken: accessTokent})
    })
})

app.delete("/logout", (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})

app.post("/login", (req, res) => {
    //Autentication User

    const username = req.body.username

    const user = {name: username}

    const accessToken = generateAcessToken(user)
    const refreshTokent = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshTokent)
    res.json({accessToken: accessToken, 
        refreshTokent: refreshTokent})

})

function generateAcessToken(user){
    return jwt.sign(user, process.env.ACESS_TOKEN_SECRET, {expiresIn: "15s"})
    
}

app.listen(PORT)