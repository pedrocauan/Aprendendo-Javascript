/**
 *  - Crie um programa que calcule a área de uma circunferencia.
 *  
 *  - A area de uma circunferencia é definida através da multiplicação 
 *    de uma constante pi pelo quadrado do raio da circunferência.
 * 
 *    Area = pi x raio²
 * 
 *  - Mostre as informações na tela
 * 
 */

//inicio
let area; //metros quadrados
let raio = 300;
const pi = 3.14;

console.log(`======= Calculo da area de uma circunferência ========\n`);

//Mostrando os valores da area, raio e de pi
console.log(`Area = ${area}`);
console.log(`Raio = ${raio}`);
console.log(`pi = ${pi}`);
console.log(`\nArea = pi x Raio²`);
console.log(`Area = ${pi} x ${raio}²`);

//Calculando a area da circunferencia
area = pi* (raio*raio);

console.log(`Area = ${area}m²`);
console.log(`A area da circunferência é de ${area} metros quadrados`);







