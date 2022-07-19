
/*Clousure é a habilidade que a função tem de acessar o seu escopo léxico*/

// const valor = 0 /* e também a esses caras*/
// const nome2 = "maria"

// function retornaFuncao(nome/*esse cara*/){
//     return function(){
//         return nome /* esse cara tem acesso a*/
//     }
// }

// const funcao = retornaFuncao("Joao")
// const funcao2 = retornaFuncao("Pedro")
// console.dir(funcao()) /*vai exibir o joao no closure*/
// console.dir(funcao2()) /*vai exibir o pedro no closure*/





//Todo vez que alguém entra no comodo, essa pessoa olha para janela
// let janela
// function porta(comodo){
//     return function(){
//         janela = `Olhei pela janela de dentro do ${comodo}`
//         console.log(janela)
//         return comodo
//     }
// }

// const porta = function(comodo) {
//     return function() {
//         janela = `Olhei pela janela de dentro do ${comodo}`
//         console.log(janela)
//         return comodo
//     }
// }

//Diz qual comodo a pessoa acessou
const porta = (comodo) => () => `Você acessou o comodo: ${comodo}`


const banheiro = porta("Banheiro")
const cozinha = porta("Cozinha")

console.log(banheiro())
console.log(cozinha())
