function Pessoa(nome,sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    Object.freeze(this) //impete alteração das propriedades do objeto

}

const p1 = new Pessoa("Pedro", "Cauan")
delete p1.nome
const p2 = new Pessoa("Joao", "Carlos")

console.log(p1)
console.log(p2)

