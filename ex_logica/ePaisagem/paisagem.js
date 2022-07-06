//Escreva uma função chamada epaisagem que recebe dois argumentos, largura e altura
//de uma imagem (number)
//Retorne true se a imagem tiver no modo paisagem

//paisagem ->  larg > alt
//retrato -> larg < alt

//é paisagem quando largura é maior que a altura



// == Primeira forma ==
// const ePaisagem = function(larg, alt) {
//     if(larg > alt)
//         return true;
//     if(larg < alt)
//         return false;
//     if(larg === alt)
//         return false;
// }


// == Segunda forma ==
// const ePaisagem = (larg, alt) => {
//     return larg > alt;
// }


// == Ultima forma ==
const ePaisagem  = (larg, alt) => larg > alt ? true: false;




console.log(ePaisagem(1980,1080));