// try{
//     console.log(error);

// } catch(err) {
//     console.log(`Não existo, não existe`);
// }
const soma = (n1,n2) => {
    if(n1 !== Number || n2 !== Number)
        //Throw gera um erro quando uma condição é feita
        throw new TypeError("Nao é um número");

    return n1+ n2;
}

//Executa  o bloco caso o erro não exista
try {
    console.log(soma(2,2));
    console.log(soma("p", 2));
    

} catch(error) {
    console.log(error);
}
