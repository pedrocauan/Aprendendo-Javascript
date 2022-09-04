module.exports = class Cachorro {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca


    }

    latir() {
        console.log(`${this.nome} está fazendo au au`)
    }
}

/* Uma vez que o module.exports tem seu valor alterado para uma função
   é possível utiliza-lo como uma*/

// console.log(module.exports(2,2))