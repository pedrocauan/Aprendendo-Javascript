/**       ======================  APRESENTAÇÃO =============================
 * 
 * Variaveis são espaços na memória do computador que são utilizadas para
 * guardar um valor que vai ser utilizado no programa. O conceito de variavel pode ser facilmente 
 * relacionado com as incognitas da matemática (o 'x'), a diferença é que ela não só
 * PODE mudar o seu valor como também guarda um conteúdo.
 */

//As variaveis são criadas com nomes que indicam aquilo que elas guardam ex:
let nome = "Pedro";
console.log(nome, `Nasceu em 2000`);

//Se mudarmos o conteudo da variavel, o resultado na tela também muda
nome = "Joãozin";
console.log(nome, `Nasceu em 200`);

//Se a variavel for declarada e nao tiver um valor, o console.log vai exibir UNDEFINED
let numero;
console.log(numero); //Não defini um valor para ser guardado na variavel número(UNDEFINED)

/** Regras para criar variaveis 
 *  1 - Não podem ser palavras reservadas ex: let, console
 *  2 - Não podem começar com número ex: 1nome
 *  3 - Não podem conter espaços ou caracteres especiais ex: nome um, nome-um
 *  4 - Elas precisam ter significado. ex: variavel nome guarda nome, idade guarda idade
 *  5 - É ideal seguir o modelo carmelcase. ex: nomeDaMinhaVariavel
 *  6 - Não se pode criar duas variaveis com mesmo nome e valores diferentes ao mesmo tempo
 */



