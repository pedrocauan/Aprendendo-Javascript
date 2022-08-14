function Produto(nome,preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque
    //define propriedade por propriedade
    Object.defineProperty(this, "estoque", {
        enumerable: true, //fala se ele é visivel
        configurable: true, //pergunta se pode reconfigurar 
        get: function() {
            return estoquePrivado
        },
        set: function(valor){
            if(!Number.isInteger(valor))
                throw new TypeError("O estoque precisa ser um numero inteiro")
            estoquePrivado = valor
        }
    }) 

}


function criaProduto(nome) {
    let nomeRecebido = nome
    return {
        
        get nome() {
            return  nomeRecebido
        },

        set nome(valor){
            if(valor.length > 10)
                throw new TypeError("NOME DO PRODUTO MUITO GRANDE")
            nomeRecebido = valor
        }
    }
}

//get e set com a função construtora
const p1 = new Produto("camiseta",20, 3);
p1.estoque = 3;
console.log(p1)

//get e set com a função factory
const p2 = new criaProduto("camisa")
console.log(p2)