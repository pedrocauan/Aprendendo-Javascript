/*Arrays são como se fossem listas, ou, um conjunto de variaveis  criadas na memória
  de uma vez só. cada variavel que compõem o array tem um índice. esse indice é
  o endereço dele na memória*/


  //           indice 0  indice1 indice 2
const frutas = ['Maçã', 'Banana', 'Caju'];


console.log(frutas); //Imprime a lista toda
console.log(frutas[0]); //imprime a primeira fruta (Maçã)
console.log(frutas[1]); //imprime a segunda fruta (banana)

frutas[0] = 'Morango'; // troca a MAÇÃ da lista por uma  MORANGO
console.log(frutas[0]); //Imprime morango na tela

//===== É possível adicionar mais itens no array das seguintes formas: ====

//Esta não é recomendada porque voce precisaria saber o tamanho do array
frutas[3] = 'Abacate';
console.log(frutas);

//Nesta voce pega o tamanho no array e adiciona o novo indice
frutas[frutas.length] = 'Limão'
console.log(frutas);

//Esta é a opção mais simples (COLOCA UM NOVO ITEM NO ARRAY)
frutas.push('Uva');
console.log(frutas);

//Adiciona o item no começo do array
frutas.unshift("Pêssego");
console.log(frutas);

//Remove o ultimo elemento do array
frutas.pop(); //Elimina a Uva da lista de frutas
console.log(frutas);

//É possivel guardar o item removido em uma variável
const removido = frutas.pop() //Remove o Limão da lista e guarda ele na variavel
console.log(`fruta removida: ${removido}`);
console.log(frutas);

//Remove o primeiro elemento
frutas.shift(); //Remove o pêssego da lista
console.log(frutas);

//Remove somente o conteúdo do elemento sem mexer no indice
delete frutas[0]; //deleta o morango da lista mas deixa seu indice vazio
console.log(frutas);




//corta do começo até o fim
const nome = ['José', 'Ana', 'Pedro','Paulo'];
console.log(nome.slice(0,1)); // Vai cortar todos e deixar só o josé

//corta do fim até o começo
const objetos = ['Caneta', 'Lapis', 'Bola', 'Borracha'];
console.log(objetos.slice(0,-1)); //Vai cortar só o ultimo elemento (borracha)

//Vetores são do tipo de dado Objeto
console.log(typeof objetos);

//Contudo, é possivel verificar se ele  é uma instancia da classe Array
console.log(objetos instanceof Array);

 