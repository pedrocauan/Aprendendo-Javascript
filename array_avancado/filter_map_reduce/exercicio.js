//Retorne a soma de todos os pares
// -> Filtrar todos os pares [ ]
// -> Dobrar os valores
// -> Reduzir (somar tudo)



const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
console.log(numeros)



// const pares = numeros.filter(function(num){
//     return num % 2 === 0
// })
// console.log("\npares:",  pares)

// const dobro = pares.map(function(num){
//     return num * 2
// })
// console.log("\ndobro:", dobro)

// const somatoria = dobro.reduce(function(acum,num){
//     return acum += num
// }, 0)
// console.log("\nsoma dos pares:", somatoria)

/*=== SEGUNDA FORMA === */
const pares = numeros.filter(n => n % 2 === 0)
console.log("\npares:", pares)


const dobro = pares.map(n => n * 2)
console.log("\ndobro:", dobro)

const somatoria = dobro.reduce((acum, n) => acum += n)
console.log("\nsoma dos pares:", somatoria)

/*== Somatória em uma unica linha ===*/
// const somatoria = numeros.filter(n => n % 2 === 0).map(n => n * 2).reduce((acum, n) => acum += n)
// console.log(somatoria)

/* === QUARTA FORMA ===*/
const somaPares = numeros.filter( (n) =>  {
    return n % 2 === 0
}).map( (n) =>  {
    return n * 2
}).reduce((acum, n) => {
    return acum += n
}, 0)


// console.log(somaPares)