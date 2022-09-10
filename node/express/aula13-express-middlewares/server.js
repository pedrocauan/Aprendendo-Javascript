//MIDDLEWARE -> UMA CAMADA DE SOFTWARE QUE SERÁ UTILIZADA PARA FAZER UM TRATAMENTO ANTES
//DE CHEGAR NO CONTROLLER

const express = require("express")
const app = express()
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


app.listen(3000, () => {
    console.log("https://localhost:3000")
    console.log("rodando na 3000")
})


