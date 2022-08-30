
function rand(min= 0, max = 3) {
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

/* esperaAi("Fase1", rand())
.then(fase => {
    console.log(fase)
    return esperaAi(`fase2`, rand())
})
.then(fase => {
    console.log(fase)
    return esperaAi(`fase3`, rand())
})
.then(fase => {
    console.log(`terminamos na fase ` + fase)
})
.catch(e => console.log(e)) */

async function executa() {
    try{
        const fase1 =  esperaAi("Fase1",  1000) /*promise pendente*/
        console.log(fase1)
   
        setTimeout(function(){
            console.log("essa promisse estava pendente:", fase1) /*mostra qual é a promise pendente*/
        } , 1100)
        const fase2 = await esperaAi("fase2", rand())
        console.log(fase2)
   
        const fase3 = await esperaAi("fase3", rand())
        console.log(fase3)
   
        console.log(`terminamos na ${fase3}`)
    } catch(e) {
        console.log(e)
    }
}
executa()

//as promises tem 3 estados:
/**
 * 1 - pending -> promessa pendente
 * 2 - fullfilled -> promessa resolvida (precisa ser resolve)
 * 3 - rejected -> promessa rejeitada (precisa ser reject)
 */

