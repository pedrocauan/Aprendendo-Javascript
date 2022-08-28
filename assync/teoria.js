function enviarEmail(corpo, para) {
    setTimeout(()=> {
        console.log(`
            Para: ${para}
            -------------------------
            ${`corpo`}
            -------------------------
            De: Pedrones
            `)
    }, 8000)
}
console.log("Inicio do envio de e-mail!!") //executa
enviarEmail("Oi, eu sou peedrones", "pedrones@gmail.com") //executa mas nao para a execução do programa
console.log(`email enviado !! Deve chegar em alguns minutos`) //executa
console.log(`TUDO OK !!`)// executa