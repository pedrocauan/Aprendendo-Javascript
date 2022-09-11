require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")
//link da database
//conecta com a database
mongoose.connect(process.env.CONNECTIONSTRING/*guarda a conexao da db em um arquivo*/)
    .then(() => {
        //emite um sinal pra database
        app.emit("pronto")
    })
    .catch(e => console.log(e))



const routes = require("./routes")
const path = require("path")
const { middlewareGlobal, outroMiddleware } = require("./src/middlewares/middleware.js")


app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, "public")))


//path.resolve -> informa o caminho absoluto do arquivo
app.set("views",path.resolve(__dirname, "src", "views") )
app.set("view engine", "ejs")

//Nossos próprios middlewares
app.use(middlewareGlobal)
app.use(outroMiddleware)

// ROTAS
app.use(routes)

//se ele pegar o sinal, conecta com a database na porta 3000
app.on("pronto", () => {
    app.listen(3000, () => {
        console.log("https://localhost:3000")
        console.log("rodando na 3000")
    })

})


