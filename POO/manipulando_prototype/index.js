function Produto (nome,preco){
    this.nome = nome
    this.preco = preco

}

//Colocando os metodos em prototype
Produto.prototype.desconto = function(percent){
    this.preco -= (this.preco *  (percent/100))

}

Produto.prototype.aumento = function(percent){
    this.preco += (this.preco *  (percent/100))
}

//Instancia
const p1 = new Produto("Camisa", 50)



//Literal
const p2 = {
    nome: "Caneca",
    preco: 15
}

//Faz o p2  poder acessar as funções de aumento e desconto
Object.setPrototypeOf(p2, Produto.prototype)
// console.log(p2)

//Seta o prototype depois coloca as chaves do objeto
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }
})

p3.aumento(10)
console.dir(p3)


// //new Object -> Object.prototype
// const objA = {
//     chaveA: "A"
//     // __proto__: Object.prototype
// }


// const objB = {
//     chaveB: "B"
//     // __proto__: ObjA
// }

// objC = new Object()
// objC.chaveC = "C"

// //Prototype do B passa a ser o mesmo do A
// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)
// console.log(objA.chaveB)

// //Nao é recomendado usar o __proto__