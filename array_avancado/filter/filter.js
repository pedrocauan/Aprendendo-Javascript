//retorne os numeros maiores que 10
//filter vai sempre retornar um array com a mesma quantidade de elementos ou menos

//Filter passa como paremetro uma callback que pede o valor, indice e o array
//ela itera sobre cada um dos elementos e pega como retorno TRUE pro novo array filtrado
// const numerosFiltrados = numeros.filter( (valor) => valor > 50)

//                  0   1   2  3  4...
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 8, 7, 11, 15, 22, 27]



// function callbackFilter (valor, indice, array){
//     console.log(`valor: ${valor}`)
//     console.log(`indice: ${indice}\n`)
//     if(valor > 10)
//         return true
//     if(valor < 10)
//         return false
// }

// const numerosFiltrados = numeros.filter(callbackFilter)
// console.log(`Numeros maiores que 10: ${numerosFiltrados}`)





//retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas  cujo nome termina com a letra [a]
const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Leticia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 45}
]

//Pessoas com  5 letras ou mais
const fiveLettersMore = pessoas.filter((obj) => obj.nome.length >= 5)

//Pessoas com idade mairo que 50
const fiftyYearsMore = pessoas.filter((obj) => obj.idade > 50)

//pessoas com a ultima letra sendo a
const lastLetterA = pessoas.filter(obj => {
    //endsWith -> ve se a string termina com a letra passada no parametro
    return obj.nome.toLowerCase().endsWith("a")
})

// Resultado na tela
console.log(`\nMais de 5 letras:\n `, fiveLettersMore)
console.log(`\nMais de 50 anos:\n `,fiftyYearsMore)
console.log(`\nultima letra termina com [a]:\n `, lastLetterA)

