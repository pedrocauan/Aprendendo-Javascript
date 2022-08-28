

function enviarEmail(corpo, para, callBack) {
    setTimeout(()=> {
        console.log(`
            Para: ${para}
            -------------------------
            ${`corpo`}
            -------------------------
            De: Pedrones
            `)
            //passa parametros pra callback
            callBack("Ok", 5, "8s")
    }, 8000)
}

console.log("Inicio do envio de e-mail!!") //executa

//callback com parametros
                                                                  /*qnt*/ /*tempo*/
enviarEmail("Oi, eu sou peedrones", "pedrones@gmail.com", (status, amount, time, nome) => {
    console.log(`
        De: ${nome}
        status ${status}
        contatos: ${amount}
        tempo de envio: ${time}
    `)
    console.log(`TUDO OK !!`)// executa depois  que o email chegar
}) //executa mas nao para a execução do programa
console.log(`email enviado !! Deve chegar em alguns minutos`) //executa