//declaração
class Pessoa {
    //construtor
    constructor(nome, sobrenome, idade) {
        //atributos que ficam dentro do construtor
        this.nome = nome 
        this.sobrenome = sobrenome
        this.idade = idade
    }

    //metodos
    falar() {
        console.log(this.nome + " está falando")
    }   
}

//é a mesma coisa
function Pessoa2(nome,sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade

}

Pessoa2.prototype.falar =  function() {
    console.log(this.nome + " Está falando")
}



const p1 =  new Pessoa("pedro", "doze", 22)
const p2 = new Pessoa2("Joao", "carlos", 19)
console.log(p1)
console.log(p2.falar())
