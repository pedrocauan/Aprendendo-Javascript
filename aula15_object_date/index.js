/**
 * Para usar o objeto Date, é necessário criar um objeto.
 * A criação do objeto é definida pela palavra new seguida de um construtor
 * Um constructor cria um objeto, esse objeto ele passa a ser acessível com a palavra new
 * Essa variavel 
 * */ 


/**
 * Como funciona o Date?
 * - O date pega a quantidade de milisegundos que se passaram
 *   desde 1970, que é a epoca do unix.
 * - Se o objeto date nao passar parametro, ele vai pegar o ano atual
 */
const date = new Date();

//Mostra a data na tela com o horario
console.log("Data atual:\n" + date.toString() + "\n");

/*Caso coloquemos 0, ele vai pegar a primeira data registrada*/
let firstDate = new Date(0);
console.log("Primeira data registrada:\n" + firstDate.toString() + "\n");

/**A data no javascript é registrada em milisegundos
 * 60s = 1 min
 * 60min = 1hr
 * 1hr_em_javascript = 1 * 1000;
 * 
 * 60s = 1min
 * 60s * 60s = 1hr
 * 60*60*1000 = 1 hora em javascript
*/
const horaQueVoceQuer = 3;
const tresHoras = 60*60 * horaQueVoceQuer * 1000;
/*Se a gente somar tres horas com o 0 no objeto date, conseguimos a data de 01/01/1970*/
firstDate = new Date(0 + tresHoras);
console.log("Primeira data registrada:\n" + firstDate.toString() + "\n");

/*A partir disso é possível manipular o objeto Date para ir um dia para frente*/
const minutes = 60;
const hour = minutes*minutes;
const day = hour * 24 * 1000;

/*somando isso com o valor anterior temos o dia 02/01/1970*/
firstDate = new Date(0 + tresHoras + day);

console.log("02/01/1970: \n" + firstDate.toString() + "\n");

/*É possivel criar um objeto date com  ano/mes/dia também*/
/**
 * PARAMETROS:
 * 1 - ano
 * 2 - mes (sempre colocar um a menos. ex: junho = mês 5. isso acontece pq começa do 0)
 * 3 - dia
 * 4 - hora
 * 5 - minutos
 * 6 - segundos
 * 7 - milisegundos (vai até 1000)
 */
let hoje = new Date(2022, 5, 1, 8,38, 30);
console.log("A data de hoje é:\n" + hoje.toString() + "\n");

/**
 * Data string
 * - O jeito mais facil de declarar uma data
*/
hoje = new Date("2022-06-01 8:34:00");
console.log("A data em hoje (em dataString): \n" + hoje.toString());

/*Pegando o dia do mes*/
console.log("\nHoje é dia: " + date.getDate());
console.log("O mês é: " + date.getMonth());
console.log("Estamos no ano de: " + date.getFullYear()); 
console.log(`Estamos no dia da  semana: ${date.getDay()}`);
console.log(`Agora são ${date.getHours()} horas e ${date.getMinutes()} minutos`);

/*Date.now*/
hoje = Date.now(); //Pega os milisegundos que representam a data atual
let data = new Date(hoje);
console.log("\ndata de hoje com o data.now: "+ data.toString() + "\n");

/*A partir disso é possível formatar as datas*/

const zeroEsquerda = (num) => num >= 10 ? num : `0${num}`;

const formataData = (data) => {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1); //Pra ele ir pro mes certo
    const ano = zeroEsquerda(data.getFullYear());

    return `${dia}/${mes}/${ano}`;
 }



const dataTeste = new Date();
const dataBrasil = formataData(dataTeste);
console.log(dataBrasil);








