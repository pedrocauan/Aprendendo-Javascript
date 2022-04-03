/**
 * === Apresentação ==
 * 
 * Operadores aritméticos servem para realizar procedimentos matemáticos dentro
 * do código feito em javascript
 * 
 * Aritméticos -> +, -, *, /, %, **
 * + >> Adição
 * - >> Subtração
 * * >> Multiplicação
 * / >> Divisão
 * % >> resto de divisão
 * ** >> potenciação
 * 
 * Concatenação -> + ,
 * + >> junta sem espaçamento
 * , >> da um espaço antes de juntar
 */

/** === \/ Precedencia \/ ===
 * 1o - ()
 * 2o -> ** potenciação
 * 3o -> *, /, %
 * 4o -> + -
 */

let num = 10;
let num2 = 2;

// + >> Adição
console.log(num + num2);

// - >> Subtração
console.log(num - num2);

// * >> Multiplicação
console.log(num * num2);

// / >> Divisão
console.log(num / num2);

// % >> Resto de divisão
console.log(num % num2);

// ** >> Potenciação
console.log(num ** num2);

// + >> concatenação
let palavra = "por";
let palavra2 = "que";
console.log(palavra + palavra2);

//, >> concatenação com espaço
console.log(palavra, palavra2);
//===============================
/**
 * ++ -> incremento
 * +=
 * *=
 * **=
 * -- -> Decremento
 */

let somatoria = 1;


//incrementa +1 na somatória e exibe o valor incrementado
console.log(++somatoria); // somatoria = 2

//exibe o valor antigo e depois incrementa +1 na somatória
console.log(somatoria++); //somatoria = 3 mas na tela aparece 2 q e o valor antigo

//INCREMENTO
somatoria = 1;
somatoria++; // somatoria = 2
somatoria++; // somatoria = 3
somatoria++; // somatoria = 4
console.log(somatoria++); //somatoria = 5, mas nas tela aparece o valor anterior 4

somatoria = 2;
somatoria *= 2; // somatoria = 4
somatoria *= 2; // somatória = 8
console.log(somatoria);

// DECREMENTO
somatoria = 10;
somatoria--; // somatoria = 9
somatoria--; // somatoria = 8
somatoria--; // somatoria = 7
console.log(somatoria--); //somatoria = 6, mas nas tela aparece o valor anterior 7 

