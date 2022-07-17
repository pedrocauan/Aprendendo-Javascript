// Escopo lexico é a capacidade que uma função tem de acessar os "vizinhos" dela dentro do escopo
// ex:
const nome = "joao" /* vizinho */
const falaNome = function() {
    console.log(nome) /* acessa o vizinho (joao)*/
}

const usaFalaNome = function(){
    falaNome() /*acessa o vizinho vizinho (joao)*/
}


usaFalaNome()