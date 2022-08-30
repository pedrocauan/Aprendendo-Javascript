
//cria numero aleatorio
function rand(min, max) {
    min *=  1000 /*converte para milisegundos*/
    max *= 1000 /*converte para milisegundos*/
    return Math.floor(Math.random() * ((max - min) + min))
}

function esperaAi(msg, tempo, cb) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== `string`)
            reject(new Error(`Erro`))
        setTimeout(()=>{
            resolve(msg)
        }, tempo)
    })
}

//executar as 3 funções bagunçadas de maneira ordenada


esperaAi("conexao com o db", rand(1,3))
.then( resposta => {
    console.log(resposta)
    return esperaAi(`buscando dados da BASE`, rand(1,3))
})
.then( resposta => {
    console.log(resposta)
    return esperaAi(222, rand(1,3))
})
.then(resposta => {
    console.log(resposta)
}).then( () => {
    console.log(`mostrando os dados na tela`)
}) 
.catch(e => console.log( e))
console.log(`isso aqui vai ser exibido primeira pq executa antes da promise`)





 
