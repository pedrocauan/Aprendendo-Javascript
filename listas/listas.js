const names = ["Pedro", "Joao", "Ana", "Gustavo"];

const joao = names[1];

//Coloca elemento no final da lista
names.push("Pedrones");

//Adiciona no inicio do array
names.unshift(20);

//Tira o ultimo elemento do array
names.pop();

//Altera elemento de um array
names[3] = "pedrones";

//Pega o indice de um elemento do array
console.log(names.indexOf("pedrones"));

//Organiza a lista alfabeticamente
const sortedNames = names.sort();
console.log(sortedNames);


