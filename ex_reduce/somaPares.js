//Soma Numeros de um array
const sumNumbers = (array) => array.reduce((number,accumulator) => number + accumulator,0);

//Pega os números pares de um array
const evenNumbers = (arrayNumbers) => arrayNumbers.filter((n) => n % 2 === 0 );
const numbers = [1,2,3,4];

//Soma os números pares
const sumEvenNumbers = (array) => sumNumbers(evenNumbers(numbers));


console.log(sumNumbers(numbers));



















// const sumEvenNumbers = function(arrayNumbers) {
//     const evens = evenNumbers(arrayNumbers); //Guarda os pares em uma variavel
//     const sumEvens = sumNumbers(evens); //Soma os pares gaurdados
//     return sumEvens;
// }