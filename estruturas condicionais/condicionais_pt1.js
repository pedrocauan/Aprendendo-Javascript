/**
 * Estrururas condicionais estabelecem condições no código
 * ex: se a hora for menor que meio dia, dê bom dia.
 * 
 * a sintaxe de uma condicional é:
 * if(true)
 * {
 * 
 * } onde: 
 *  -if ---> é a palavra reservada 
 *  -true ---> signifnica que a estrutura só vai executar o que está no bloco se
 *              a condição for verdadeira  
*/

//--> Estruturas condicionais simples: <--
 //Verifica se a cor é azul
 console.log("\nPrimeiro exemplo:")
 const cor = "azul";
 if(cor === "azul")
    console.log("A cor é azul");

// --> Estruturas condicionais compostas: <--
 //Verifica se a pessoa  é maior de idade
 console.log("\nSegundo exemplo:");
 const idade = 18;
 if(idade >= 18)
    console.log(`${idade} anos É MAIOR DE IDADE`);
 else
    console.log(`${idade} anos é MENOR DE IDADE`);


// --> Estruturas condicionais encadeadas: <--
 //Verifica se pode tirar  CNH
 console.log("\nTerceiro exemplo:");
 const IDADE = 18;
 const naoPossuiCNH = true;
 if(naoPossuiCNH)
 {
    if(IDADE >= 18)
        console.log("Essa pessoa pode tirar CNH")
    else
        console.log("Menores de idade não podem tirar CNH");
 }
 else
    console.log(`Esta pessoa já possui CNH`);



//
// Entre 0 - 12 -> Bom dia
// Entre 12 - 18 -> Boa tarde
// Entre 18 - 23 -> boa noite
console.log("\nExercicio do curso:");
const hora = 12;

if(hora >=0 && hora <= 12){
    console.log(`${hora}hrs, Bom dia`);
}
else if(hora > 12 && hora <= 18){
    console.log(`${hora}hrs, Boa tarde`);
}
else if(hora > 18 && hora <= 23){
    console.log(`${hora}hrs, Boa noite`);
}
else {
    console.log("Seja bem vindo !!");
}