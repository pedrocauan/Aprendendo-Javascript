/** ======== APRESENTAÇÃO ========
 *  Constantes nada mais são do que variaveis que não podem
 *  ter o seu valores alterado durante o código. Ou seja, assim
 *  como as variaveis, elas guardam um valor na memória mas 
 *  esse valor não pode ser alterado depois de ser declarado
 */
const nome = "Pedro";
console.log(nome);

/*!--NÃO É POSSÍVEL DECLARAR SEM ATRIBUIR UM VALOR A ELA. --!*/
// !-- const sobrenome; --!; 

const primeiroNumero = 5;
console.log(`Primeiro número: ${primeiroNumero}`);

const segundoNumero = 10;
console.log(`Segundo número: ${segundoNumero}`);

const resultado = primeiroNumero/*5*/ * segundoNumero/*10*/;
console.log(`Resultado: ${primeiroNumero} x ${segundoNumero} = ${resultado} `); 


const resultadoDuplicado = resultado/*50*/  * 2;
console.log(`Resultado duplicado: ${resultadoDuplicado}`);

