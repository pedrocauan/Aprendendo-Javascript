// defineProperty - defineProperty

function Produto(nome,preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    //define propriedade por propriedade
    Object.defineProperty(this, "estoque", {
        enumerable: true, //fala se ele é visivel
        value: estoque, //valor do atributo
        writable: false, //pode alterar
        configurable: true //pergunta se pode reconfigurar 
    }) 


    //define todas de uma vez
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //fala se ele é visivel
            value: nomecd , //valor do atributo
            writable: true, //pode alterar
            configurable: true //pergunta se pode reconfigurar 
        },

        preco: {
            enumerable: true, //fala se ele é visivel
            value: preco, //valor do atributo
            writable: true, //pode alterar
            configurable: true //pergunta se pode reconfigurar 
        }
    });
}



const p1 = new Produto("camiseta",20, 3)
console.log(Object.keys(p1))

