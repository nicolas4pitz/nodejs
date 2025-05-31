
import express from "express"
import dotenv from "dotenv/config"
import jwt from "jsonwebtoken"

const app = express()

const port = process.env.PORT

export const loginCaller = app.post("/login", (req, res) => {
  const data = req.body
  console.log(data)
})


app.listen(port, () => console.log(`Porta aberta ${port}`))