
import express from "express"
import path from "path"

const app = express();

app.set("views", path.join(import.meta.dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("homepage", { message : "Hello World" })
})

app.listen(3000, () => {
  console.log("App Listening on port 3000")
})