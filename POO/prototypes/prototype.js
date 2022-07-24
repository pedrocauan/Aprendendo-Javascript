/* 
Javascript é baseado em protótipos para passar propriedades e métodos de um
objeto para outro.

Definição de protótipo:
Protótipo  é o termo usado para se referir ao que foi criado pela  primeira vez,
servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referencia interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para cria-lo.
Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar
encontrar  este membro no  próprio objeto e depois a cadeia do JS vai tentar encontrar
este membro no pŕoprio objeto e depois a cadeia de protótipos é usada até o topo (null) até
encontrar (ou não) tal membro.
*/

// constructor  -> molde (class)
function Pessoa(nome, sobrenome){
    /* primeiro ele olha aqui*/
    this.nome = nome,
    this.sobrenome = sobrenome
    this.nomeCompleto = () => "Original: " + this.nome + " " + this.sobrenome
}

// Pessoa.prototype === pessoa1.__proto__


Pessoa.prototype.nomeCompleto = function(){
    /* Depois ele procura aqui*/
    return "PROTOTYPE: " + this.nome + " " + this.sobrenome
}

// instancia

/*ORDEM DE BUSCA*/

// pessoa1 -> Pessoa.prototype -> Object.prototype
const pessoa1 = new Pessoa("Luiz", "O.") // <-- Pessoa = Função Construtora
const pessoa2 = new Pessoa ("Maria", "A.") // <-- Pessoa = Função construtora

/*ORDEM DE BUSCA*/
// data -> Date.prototype -> Object.prototype
const data = new Date()

console.dir(pessoa1)
console.dir(data)