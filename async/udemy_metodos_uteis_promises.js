
function rand(min, max) {
    min *=  1000 /*converte para milisegundos*/
    max *= 1000 /*converte para milisegundos*/
    return Math.floor(Math.random() * ((max - min) + min))
}

function esperaAi(msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof msg !== `string`){
                reject("cai no erro")
                return
            }
            resolve(msg.toUpperCase() + ' - passei na promise')
        }, tempo)
    })
}

//Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    esperaAi(`Primeira Promise`, rand(1,5) ),
    esperaAi(`Segunda Promise`, rand(1,5) ),
    esperaAi(`terceira Promise`, rand(1,5) ),
]

//resolve todas as promises
/* Promise.all(promises)
.then(function(valor){
    console.log(valor)
})
.catch( function(e) {
    console.log(e)
}) */

//retorna a promise com tempo de resposta mais rapido
/* Promise.race(promises)
.then(function(valor){
    console.log(valor)
})
.catch( function(e) {
    console.log(e)
}) */

function baixaPagina() {
    const emCache = true
    if(emCache){
        return Promise.reject("Página rejeitada")
    } else{
        return esperaAi("Baixei  a pagina", 3000)
    }
}

baixaPagina()
.then((dadosPagina) =>{
    console.log(dadosPagina)
})
.catch(e => {
    console.log('erro', e)

})