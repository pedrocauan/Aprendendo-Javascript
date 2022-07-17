// === O arquivo prática é usado para  praticar durante as video aulas ===


// Escopo lexico é a capacidade que uma função tem de acessar os "vizinhos" dela
// ex:
const falaNome = function() {
    const nome = "joao" /* vizinho */
    console.log(nome) /* acessa o vizinho (joao)*/
}

falaNome()

// const usaFalaNome = function(){
//     falaNome() /*acessa o vizinho vizinho (joao)*/
// }


// usaFalaNome()


