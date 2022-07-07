//1 - Somar todos os números de 1 a 50 (ou qualquer outro número de sua escolha)

const numbers = [50,100,200];
const numbers2 = [1,2,3,4];

// Soma elementos de um array
const sumNumbers = (array) => array.reduce((number,accumulator) => number + accumulator,0);


console.log(sumNumbers(numbers2));

