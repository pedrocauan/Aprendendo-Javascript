class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const nome = "PEdro"
const sobrenome = "santos"


exports.outraCoisa = "outracoisa"
module.exports = {
    nome,
    sobrenome,
    Pessoa
}

