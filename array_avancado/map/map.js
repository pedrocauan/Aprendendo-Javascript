// Map sempre vai ter o valor do array original, ele aplica uma mudança pra cada um dos elementos do array


// Dobre o valor destes numeros
//                  0   1   2  3  4...
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 8, 7, 11, 15, 22, 27]
// const dobro = numeros.map(function(valor) {
//     return valor*2
// })

// console.log(dobro)














// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova a chave  "nome do objeto"
// adiciona a chave id em cada objeto
const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Leticia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 45}
]

//Retornando uma string com os nomes
const names = pessoas.map(obj => obj.nome
)
console.log(names)

//Removendo a chave "nome" do objeto

//const removeName = pessoas.map(obj => ({ idade: obj.idade })   )/*outra forma*/
const removeName = pessoas.map(obj => {
    const  pessoa = {...obj}
    delete pessoa.nome
    return pessoa
})
console.log(removeName)

//Adicione uma chave id em cada objeto
const pessoasComId = pessoas.map(function(obj, indice){
    const addId = {...obj} //Copia o objeto pra uma outra constante
    addId.id = indice+1
    return addId
})
console.log(pessoasComId)

