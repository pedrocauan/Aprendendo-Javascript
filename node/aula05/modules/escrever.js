const fs = require("fs").promises

//Função que escreve  os dados no json
module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'})
}
