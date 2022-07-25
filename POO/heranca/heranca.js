
// Produto -> aumento, desconto
// camiseta = cor , caneca = material
// 1 - camiseta e canecas são produtos
// 2 - Um produto tem um preço, nome e pode sofrer alterações no preço
// 3 - O preço pode ser aumentado ou diminuido com desconto

//Cada função construtora tem seu próprio prototype

// ======= PRODUTO ========
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

//Aumenta preço do produto
Produto.prototype.aumento = function(qnt){
    this.preco += qnt;

}

//Da o desconto pro cliente
Produto.prototype.desconto = function(qnt) {
    this.preco  -= qnt
}


function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco) //liga com o constructor produto pra herdar as propriedades nome e preco
    this.cor = cor
}

// ======= CAMISETA =======

//Faz camisa usar o mesmo prototype do produto
Camiseta.prototype = Object.create(Produto.prototype)
//Coloca o construtor
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percent) {
    this.preco += (this.preco *(percent / 100))
}


// ====== CANECA ======
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco) //faz herança
    this.material = material
    this.estoque = estoque

    Object.defineProperty(this, "estoque", {
        enumerable:true, 
        configurable: false,

        get: function(){
            return estoque
        },

        set: function(qnt){
            if(!Number.isInteger(qnt))
                return console.log("Quantidade inválida !! a quantidade precisa ser um número inteiro maior ou igual a zero")

            estoque = qnt
        },


    
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camiseta = new Camiseta("regata", 7.5, "Preta")
const caneca = new Caneca("Caneca Homem Aranha", 10, "ceramica", 20)
caneca.estoque = 100

console.log(camiseta)
console.log(caneca)
console.log(caneca.estoque)

