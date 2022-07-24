function Produto(nome, preco, estoque) {
    let privado = estoque
    this.nome = nome,
    this.preco = preco,
    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra chave
        configurable: true, //reconfigura chave  
        get: function() {
            return privado
        },

        set: function(valor){
            if(typeof valor !== 'number')
                throw new TypeError("O ESTOQUE PRECISA SER UM NÚMERO !!")
            privado = valor
        }
        

    })

}

function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            valor = valor.replace("jeans", "")
            nome =  valor
        }
    }
}

const produto = criaProduto("Camisa")
console.log(produto.nome)
produto.nome = "calça jeans"
console.log(produto.nome)

// const p1 = new Produto("Camiseta", 20, 3)
// p1.estoque = "AAAA"
// console.log(p1.estoque)