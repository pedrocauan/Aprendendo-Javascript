const nome = "pedro"
const sobrenome = "doze"
const idade = 22
const cpf = 11111111111
function soma(n1, n2) {
    return n1 + n2
}

export class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

export default (age) => age >= 18? true: false

export { nome, sobrenome, idade, soma }