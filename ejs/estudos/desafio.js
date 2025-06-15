
import express from "express"
import path from "path"

const app = express();

let listaDeCompras = [{
  nome: "Leite",
  quantidade: 2,
  comprado: true
}, {
  nome: "Cebola",
  quantidade: 1,
  comprado: false
}]

app.set("views", path.join(import.meta.dirname, "views"))
app.set("view engine", "ejs")


app.get("/", (req, res) =>{
  res.render("desafio_index", { listaDeCompras })
})

app.listen(3000, () =>{
  console.log("Servidor aberto na porta 3000")
})