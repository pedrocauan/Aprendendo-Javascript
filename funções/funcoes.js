
//Toda função antes de ser usada é declarada
function cumprimento(nome){
    
    return `Bom dia ${nome}`;
    
    //caso uma função nao retor nada, ela retorna por padrao undefined
}


function soma(num1=null, num2=null){
    const result = num1+num2;
    
    return result;
}


//é possivel guardar funções em variaveis
// const raiz = function(num){
//     return num**0.5;
// };

// ===AROW FUNCTION É A MESMA COISA QUE A FUNÇÃO ACIMA ===
const raiz = num => num**0.5;
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(4));


//arrow fun


