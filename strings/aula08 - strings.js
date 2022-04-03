let umaString = "Um Texto";
console.log(umaString);

//se quiser colocar uma barra invertida utilize -> \\
umaString = "facebook.com\\usuario\\perfil";
console.log(umaString);

/**
 * Strings são VETORES DE CARACTERES, portanto você pode indexar elas
 * exemplo:
 *   a palavra NOME possui 4 letras
 *   'n' primeira
 *   'o' segunda
 *   'm' terceira
 *   'e' quarta
 * 
 *   no javascript voce pode selecionar a letra de uma string percorrendo do indice
 *   letra 'n' = indice 0
 *   letra 'o' = indice 1
 *   letra 'm' = indice 2
 *   letra 'e' = indice 4
 * 
 *   Portanto, se a variavel nome contém a string nome desta forma:
 *   nome = "nome";
 *   para selecionar a letra, selecionariamos o indice que ela está guardada, ex:
 *     nome[0] -> letra 'n'
 *     nome[1] -> letra 'o'
 *     nome[2] -> letra 'm'
 *     nome[3] -> letra 'e'
 */
let nome = "nome";
console.log(nome[0]);
console.log(nome[1]);
console.log(nome[2]);
console.log(nome[3]);

//Se quiser pegar uma letra dentro de uma posiçao é possivel fazer assim
console.log(nome.charAt(2)); //Pega a letra m

//Concatenação
let junta = "junta";
let palavra = "Palavra";

console.log(junta.concat(palavra));

//IndexOf -> retorna -1 se nao encontrar o indice
let frase = "O Rato Roeu";
let indice = frase.indexOf("Rato");
console.log(`A palavra RATO começa no indice: ${indice}`);

// Da pra procurar a partir de um indice também
frase = "abcdeef"
indice = frase.indexOf("d",2);
console.log(`A letra 'd' está na posição: ${indice}`);

//last index of -> começa do final do vetor
indice = frase.lastIndexOf("e");
console.log(indice);

//substituir palavra
const fruta = "banana";
console.log(`Fruta: ${fruta}`);

const novaFruta = fruta.replace("banana", "maçã");
console.log(`Nova fruta: ${novaFruta}`);

//tamanho 
const cachorro = "Bobby";
const tam = cachorro.length;

console.log(`Tamanho da palavra ${cachorro}: ${tam}`);

//cortar palavra;
let respeito = "Desrespeito";
respeito = respeito.slice(3); // DESrespeito; corta tudo o que tiver antes do indice selecionado
console.log(respeito);

