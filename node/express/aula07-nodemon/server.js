const express = require("express")

const app = express()
//         CRIAR   LER    ATT    APAGAR
// CRUD -> Create, Read, Update,  Delete
//         POST    GET    PUT    DELETE 

// https://meusite.com/ <- GET -> Entregue a pagina  /
// https://meusite.com/sobre <- GET -> entre a pagina /sobre
// https://meusite.com/contato <- GET -> entregue a pagina /contato 

app.get("/", (req,res) => {
    res.send(`
        <form action="/" method="POST">
            nome do cliente: <input type="text" name="nome">
            <input type="submit" value="acomi teu cu">
        </form>
    
    `)
})

app.post("/", (req, res) => {
    res.send(`recebi o formulário`)
})

app.get("/contato", (req,res) => {
    res.send("Obrigado por estrar em contato com a gente")
})

app.listen(3000, () => {
    console.log("https://localhost:3000")
    console.log("rodando na 3000")
})


