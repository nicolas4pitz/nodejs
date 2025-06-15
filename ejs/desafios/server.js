import express from "express"
import ejs from "ejs"
import path from "path"
const PORT = 3000


const produtos = [{
  id: 1,
  nome: "Cebola",
  preco: 5,
  categoria: "Alimento",
  imagemUrl: "placeholder.com",
  emEstoque: true
}]


const app = express()

app.set("views", path.join(import.meta.dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("homepage")
})

app.listen(PORT, () => {
  console.log(`Porta aberta na Porta ${PORT}`)
})

