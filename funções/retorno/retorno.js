// return -> retorna valor 
// return -> termina função

/*=== RETORNO DA FUNÇÃO ===*/
//Retorna o resultado da soma para a variavel s1
// function soma(a,b) {
//     return a+b
// }
// let s1 = soma(5, 2)
// console.log(s1)

// //mostra o valor de a + b na tela
// function soma2(a, b){
//     console.log(a + b)
// }

// soma2(5,2)

/* === RETORNANDO OBJETO === */
// const criaPessoa = function(nome, sobrenome){
//     return {nome, sobrenome}
// }


// const p1 = criaPessoa("pedro", "pipi")
// const p2 = criaPessoa("joao",  "popo")
// console.log(p1)
// console.log(p2)

// === RETORNANDO UMA FUNÇÃO DENTRO DE OUTRA FUNÇÃO ===
// function criaMultiplicador(multiplicador){
//     function multiplicacao() {
//         return n * multiplicador
//     }
//     return multiplicacao
// }

// const criaMultiplicador = function(multiplicador) {
//     //multiplicador
//     const multiplicacao = function (n) {
//         return n * multiplicador
//     }

//     return multiplicacao 
// }

// const criaMultiplicador = (multiplicador) => {
//     const multiplicacao = (n) => {
//         return n * multiplicador
//     }
//     return multiplicacao
// }

const criaMultiplicador = (multiplicador) => (n) => n*multiplicador 

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))