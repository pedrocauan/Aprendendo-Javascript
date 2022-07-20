//funcao construtora -> constrói objetos
//Construtora -> Pessoa (new)

//Uma função construtora constrói um objeto a partir de uma instancai NEW
const Pessoa = function(nome,sobrenome) {
    //declara const dentro de uma constructor function faz com que o atributo seja privado

    //privados
    const ID = 192
    const internal = () => {

    }

    //atributos ou metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = () => {
        console.log(this.nome + " Sou um metodo")
    }
}

const p1 = new Pessoa("pedro","Cauan")
const p2 = new Pessoa("joao","carlos")

p2.metodo()