// . -> diretorio atual
// .. -> volta pasta


/*caminho do arquivo -> ex: node/aula02/app.js*/
// console.log(__filename)


/*caminho do diretorio ex: node/aula/02*/
// console.log(__dirname)

//path.resolve(dur) -> resolve o caminho do diretório 
const path = require("path")
console.log(__dirname)
console.log(path.resolve(__dirname, ".", ".", "POO", "Classes"))