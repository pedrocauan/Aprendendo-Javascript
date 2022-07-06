//Escreva uma função  que recebe um número e
// retorne o seguinte:
// Número É divisivel por 3 = Fizz
// Número É divisível por 5 = Buzz
// Número É divisivel por 3 e por 5 = FizzBuzz
// Número não é divisivel por 3 e 5 = Retorna o próprio número 
// use a função com números de 0 a 100


// == primeira forma ==
// const fizzBuzz = function(n) {
//     //Ve se nao é um número
//     if(!Number(n))
//         return "Não é um número";
//     //0 número ta de 0 a 100
//     if(n < 0 || n > 100)
//         return "O número nao esta entre 0 e 100";
//     //não é divisivel por  5 e por 3
//     if(n % 3 !== 0 && n % 5 !== 0)
//         return n;
//     //É divisivel por 5 e por 3
//     if(n % 3 === 0 && n % 5 === 0)
//         return "FizzBuzz";
//     // é divisivel por 5
//     if( n % 5 === 0)
//         return "Buzz";
//     // é divisivel por 3
//     if(n % 3 === 0)
//         return "Fizz";
// }

// == Segunda forma ==
const FizzBuzz = (n) => {
    //Ve se o cara ta digitando um numero
    if(!Number(n))
        return "Não é um número";
    //ve se o numero ta entre 0 e 100
    if(n < 0 || n >100)
        return "O número não está entre 0 e 100";
    if(n % 3 !== 0 && n % 5 !== 0)
        return n;
    if(n % 3 === 0 && n % 5 === 0)
        return "FizzBuzz";
    if(n % 5 === 0)
        return "Buzz";
    if(n % 3 === 0)
        return "Fizz";
}



