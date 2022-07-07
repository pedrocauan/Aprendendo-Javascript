// const ages =  [14, 28, 27, 32];

// const pares = ages.filter((age) => age % 2 === 0);

// console.log(pares);

// const numbers =  [1,2,3,4,5,6];

// const numbersMultipliyedByTwo = numbers.map(function(number){
//     return number * 2;
// });

// === Filter filtra todos os elementos de um array para executar uma ação ===
const ages = [8,13,27,30,22, 40];

const evenAges = ages.filter( function(age) {
    return age % 2 === 0;
});

console.log(evenAges);


