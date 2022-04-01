/**
 * - Crie 5 constantes: ano_nascimento, anoatual, peso, altura e nome.  DUAS variaveis: IMC, idade
 * - Atribua um valor a cada uma das constantes
 * - Calcule a idade com base na data de nascimento
 * - Calcule o IMC com peso e altura
 * FORMULA IMC -> imc = peso / altura²
 * - Mostre os dados na tela com console.log
 */

//Inicio
const nome = "Pedro";
const sobrenome = "Santos";
let idade;
const altura = 1.75; //metros
const peso = 76;
let imc; 
const anoNascimento = 2000;
const anoAtual = 2022;

//Calcula idade
idade =  anoAtual - anoNascimento;

//Calcula IMC
imc = peso / (altura*altura);

//Mostrando os resultados finais na tela
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura`);
console.log(`IMC: ${imc}`);

