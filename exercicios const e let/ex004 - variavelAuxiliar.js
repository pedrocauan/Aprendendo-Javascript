/**
 * 1 - Crie duas variaveis, a variavel amor com a string "amor" e a variavel ódio com a string "ódio"
 * 2 - Coloque o conteúdo da variável amor na variável ódio e o conteúdo da variável ódio na  variável amor
 */

let amor = "Amor";
let odio = "Ódio";
let amorGuardado; //variavel auxiliar para guardar o conteúdo de amor

//conteúdo inicial
console.log(`Amor: ${amor}`);
console.log(`Odio: ${odio}`);

//atribui amor em ódio e ódio em amor
amorGuardado = amor;
amor = odio;
odio = amorGuardado;

//Resultado final
console.log(`\nAmor: ${amor}`);
console.log(`Odio: ${odio}`);

