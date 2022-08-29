

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

console.log("Inicio do envio de e-mail!!") 

//callback com parametros
                                                                  /*qnt*/ /*tempo*/
enviarEmail("Oi, eu sou peedrones", "pedrones@gmail.com", (status, amount, time, nome) => {
    console.log(`
        De: ${nome}
        status ${status}
        contatos: ${amount}
        tempo de envio: ${time}
    `)
    console.log(`TUDO OK !!`)
}) 
console.log(`email enviado !! Deve chegar em alguns minutos`)