const pessoas = [
    {id:2, nome: "pedro"},
    {id: 3, nome: "Gustavo"},
    {id: 1, nome: "julia"},
]

// const novasPessoas = {}
// for(const pessoa of pessoas){
//     const { id } = pessoa
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map()

for(const pessoa of pessoas){
    const { id } = pessoa
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas)