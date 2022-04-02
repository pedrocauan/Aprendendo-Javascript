/**
 * O javascript possui diversos tipos de dados, alguns deles são
 * 
 * String
 * Number
 * Boolean
 * Undefined
 * Null
 * Array
 * Function
 */
//1
const nome = 'pedro'; //String
console.log(nome, typeof nome);

const sobrenome = "Santos"; //String
console.log(sobrenome, typeof sobrenome);

const sigla = `PS`; //String
console.log(sigla, typeof sigla);


const num = 1; //Number
console.log(num, typeof num);

const num2 = 1.5; //Number
console.log(num2, typeof num2);


//2
let vagaDeCarro; //Undefined (não aponta pra lugar nenhum na memória)
console.log(vagaDeCarro, typeof vagaDeCarro);

const caixa = null; //Nulo (não aponta pra lugar nenhum na memória)
console.log(caixa, typeof caixa);


//3
const aprovado = true; //Bolean
console.log(aprovado, typeof aprovado);

const reprovado = false; //bolean
console.log(reprovado, typeof reprovado);


//4
const frutas = ["maçã", "banana", "uva", "morango"];
console.log(frutas, typeof frutas);

//5 Sim, é possivel guardar funções em variaveis no javascript
const funcao = function(){return 2+2};
console.log(funcao, typeof funcao);

