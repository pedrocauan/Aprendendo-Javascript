//No javascript  os tipos de dados primitivos são imutáveis
//primitivos -> string, number, boolean, undefined,null(bigint, symbol) - Valor

//Embora a string seja um array de caracteres ela não é imutável
let nome = "Pedro";
nome[0] = "R";

console.log(nome[0]);

//Quando fazemos isso, o que ocorre é uma cópia do conteúdo de a para b
let var1 = 'a';
let var2 = var1;

//Existem também tipos de dados passados por referencia (mutáveis)
//Eles possuem esse nome porque referenciam o mesmo endereço de memória
//referêccia -> array, object, function

//Neste caso, tanto o array cesta quanto o array frutas compartilham o mesmo endereço de memória
let cesta = ["banana", "morango", "maçã"];
let frutas = cesta; //frutas referencia o mesmo endereço que a cesta

console.log(frutas);
cesta.push("kiwi"); //Tanto a cesta quanto a fruta vão ter kiwi pois as frutas estão dentro da cesta
console.log(cesta, frutas);

frutas.pop();
console.log(cesta, frutas);

//para objetos também  ocorre o mesmo
const pessoa1 = {nome:"pedro", apelido:"suquinho"};
const pessoa2 = pessoa1;
pessoa1.nome = "luiz"
console.log(pessoa2.nome); // pessoa 2 também recebe pessoa 1



//é possível copiar um array pra outro da seguinte forte:
let numeros = [1,2,3,4];
let guardaNumeros = [...numeros]; //spread - o endereço de memória ja nao é o mesmo
console.log(numeros, guardaNumeros);
numeros.pop(); //Apaga apenas o ultimo numero desse array
console.log(numeros, guardaNumeros);

