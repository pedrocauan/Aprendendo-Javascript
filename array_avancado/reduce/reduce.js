// O reduce, como o próprio nome ja diz, reduz o array a um elemento só
// a redução varia da condição desejada




//retorne a pessoa mais velha
const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 12000},
    {nome: "Leticia", idade: 200},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 32}
]

// const maisVelho = pessoas.reduce(function(maiorIdade, pessoaAtual){
//     if(maiorIdade.idade > pessoaAtual.idade)
//         return maiorIdade
//     return pessoaAtual
// })

const old = pessoas.reduce((greater, current) => greater.idade > current.idade? greater: current )

const maisVelho = pessoas.reduce((maior, atual) => maior.idade > atual.idade? maior: atual)


console.log(maisVelho)