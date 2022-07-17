// === O arquivo prática é usado para  praticar durante as video aulas ===

// function funcao(a,b,c){
//     //Dentro  do escopo existe uma variavel chamada arguments que guarda todos os valores passados na chamada dela
//     //argument n existe em arrow function
//     let total = 0
//     for (let argument of arguments){
//         total+= argument
//     }
//     console.log(`Parametros-> a: ${a}, b: ${b}, c: ${c}`)
//     console.log(`Quantidade de argumentos: ${arguments.length}`)
//     console.log(`Soma dos arguments: ${total}`) //Retorna 15 (soma de todos os arguments)
// }

// funcao(1,2,3,4,5)

/*caso um parametro não seja passado, ele fica como  o valor padrao undefined*/
// function funcao(a,b,c,d,e,f) {
//     console.log(a,b,c,d,e,f)
// }

// funcao(1,2,3)

// == PARAMETROS COM VALOR DEFAULT VIA SHORT CIRCUIT ==
// function funcao(a,b){
//     b = b || 0 /*é possivel resolver com short circuit*/
//     console.log(a+b)
// }

// funcao(2)

/* == PARAMETROS COM VALOR DEFAULT == */
// function funcao(a,b = 2, c = 4){

//     console.log(a+b+c) /*exibe 22 )*/
// }
// //Para fazer com que um arg receba o valor padrao de um parametro, passe undefined
// funcao(2,undefined, 20)

/* == ATRIBUIÇÃO VIA DESESTRUTURAÇÃO == */
// function funcao({nome, sobrenome, idade}){

//     console.log(nome, sobrenome, idade)
// }
// //criação do objeto
// const pessoa = {nome:"pedro", sobrenome: "cauan", idade: 20}
// //passagem dele como parametro
// funcao(pessoa)


// === ATRIBUIÇÃO VIA DESESTRUTURAÇÃO DE ARRAY ===

function funcao([valor1,valor2,valor3]) {
    console.log(valor1,valor2,valor3)
}

funcao(['Pedrinho', 'doze', 30])
