const path = require("path")
const caminhoArquivo = path.resolve(__dirname, "teste.json")
const escreve = require("./modules/escrever.js")
const ler = require("./modules/ler")

// const pessoas = [
//     {nome: "pedro"},
//     {nome: "maria"},
//     {nome: "carlos"},
//     {nome: "eduardo"},
//     {nome: "luiza"},
//     {nome: "andre"},

// ]

// const json = JSON.stringify(pessoas, "", 2)
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
    const dadosDoArquivo = await ler(caminho)
    renderizaDados(dadosDoArquivo)


}
function renderizaDados(dados) {
    //converte a promise para JSON
    dados = JSON.parse(dados)
    //Imprime os dados do json na tela
    dados.forEach(val => {
        console.log(val.nome)
    })
}

leArquivo(caminhoArquivo)

