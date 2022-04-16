/***
 * Temos os operadores lógicos && e ||.
 *  && -> Só Retorna true se todas as sentenças relacionais forem true
 *  || -> Só retorna false se todas as sentenças relacionais forem falsas
 * 
 *  - Short circuit (avaliação de circuito) -> Quando encontra um valor falso na sentença
 *    ele para de fazer as comparações
 *  - Em javascript tudo pode ser avaliado em verdadeiro ou falso
 */

/***
 * 
 * FALSY VALUES-> No javascript o valor false pode ser representado das seguintes formas:
 * false (valor literal falso)
 * 0
 * NaN
 * '' `` ""
 * null/undefined 
 * 
 *  --> QUALQUER EXPRESSÃO QUE NÃO CONTENHA  ALGUM DESSES TIPOS DE DADO SERÃO AVALIADOS EM TRUE
 *      E O JAVASCRIPT VAI RETORNAR O ULTIMO VALOR COMPARADO COM && e O PRIMEIRO COMPARADO em || <---
 */
//Primeiro exemplo:
console.log("Primeiro exemplo:")
console.log(`${6 && 0}`); //Retorna o valor falso 0
console.log(`${3 && 7}`); //Retorna o ultimo valor true 7
console.log(null || 0 || '' || "6" || NaN); //Retorna 6 que é o unico valor verdadeiro

//Segundo exemplo:
console.log("\nSegundo exemplo:");
console.log("Pedro" && ''); //Retorna o valor falso ''
console.log("Pedro" && "Santos"); //Retorna o ultimo valor true Santos
console.log(null || 0 || '' || "Pedro" || NaN); //Retorna PEDRO que é o unico valor verdadeiro

//Terceiro exemplo:
console.log("\nTerceiro exemplo:")
console.log(6 && 0 && 7); //Retorna o valor falso 0
console.log(6 || 0 || 7); //Retorna o valor verdadeiro 6
console.log(3 && 7 && 6); //Retorna o ultimo valor true 6
console.log(3 || 7 || 6); //Retorna o primeiro valor true 3

//Exemplo de aplicação
console.log("\nExemplo pratico: ")
function falaOi() {
    return "oi";
}

let executar = false; //Evita a chamada da função falaOi()
console.log(executar && falaOi()); //Ele da curto circuito (não exibe nada na tela)
executar = true; //Muda a condição e agora exibe oi na tela.
console.log(executar && falaOi()); 

//Quarto exemplo:
console.log("\nQuarto exemplo:");
const corUsuario = null;

//Se o usuario selecionou uma cor ele vai colocar a cor do usuario, se não, ele coloca a cor preta padrao
const corPadrao = corUsuario || "black"; 

 //o SHORT CIRCUIT PERMITE A GENTE FAZER CONDICIONAIS SIMPLES NO SITE SÓ COM OS OPERADORES LÓGICOS

console.log(corPadrao);



