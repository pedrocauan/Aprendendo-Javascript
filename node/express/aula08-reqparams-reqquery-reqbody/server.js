const express = require("express")

const app = express()
// ==url params ==
// /profiles/12345?
// campanha=googleads & 
// nome_campanha=seila

//
app.use(express.urlencoded({ extended: true }))

//exibe a requisição na tela do usuario
app.get("/teste/:id_user?/:parametro?", (req,res) => {
    console.log(req.params) // pega os dados DENTRO da rota 
    console.log(req.query) // pega os dados da query ->  /rota?chave1=blabla&chave2=blabla
    res.send(req.query.facebookprofile)
})

app.get("/", (req,res) => {
    res.send(`
        <form action="/" method="POST">
            nome do cliente: <input type="text" name="nome">
            idade: <input type="text" name="idade">

            <input type="submit" value="acomi teu cu">
        </form>
    
    `)
})

app.post("/", (req, res) => {
    console.log(req.body)
    res.send(`O que voce me enviou foi: ${req.body.nome}`)
})


app.listen(3000, () => {
    console.log("https://localhost:3000")
    console.log("rodando na 3000")
})


