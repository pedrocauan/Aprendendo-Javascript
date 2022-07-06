// try {
//     //Executa quando não há erros
//     console.log("abri o arquivo");
//     console.log("Manipulei e gerou um erro");
//     console.log("fechei o arquivo");
//     //Erro dentro do erro
//     try{
//         console.log(b);
//     }
//     catch(e){
//         console.log("Deu erro");
//     }
//     finally {
//         console.log("Também sou Finally");
//     }
// }
// catch(e){
//     //Executa quando há erros
//     console.log("Tratando o erro");
// }
// finally{
//     // Sempre é executado.
//     console.log("FINALLY: Eu sempre sou executado");
// }

//Função que pega a hora
const hour = (date) => {
    //Se  não for uma instancia do objeto date ele dá erro
    if(date && !(date instanceof Date))
        throw new TypeError("Esperando instancia de Date");
    //Se não for uma data ele coloca uma data na variavel
    if(!date)
        date = new Date(); 
    //Retorna a hora 
    return date.toLocaleTimeString("pt-BR", { 
        hour: "2-digit", 
        hour12: false,
        minute: "2-digit",
        second: "2-digit"

    });
}    

try {
    const data = new Date("01-01-1970 12:58:12");
    const hora =  hour(data);
    console.log(hora);
}
catch(e){
    // Tratar erro
}
finally {
    console.log("Tenha um bom dia");
}

