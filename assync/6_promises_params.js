-
function enviarEmail(corpo, para) {
    //Quando trabalhamos com promises não temos necessidade de usar callback
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
             let deuErro = false
            console.log("Email enviado")
             if(!deuErro) {
                resolve({time: 12, to: "pedrinho@gmail.com"}) //Promessa OK

             } else {
             
                reject("deu erro") 
             }
        }, 4000)
    })
}                                             /*Pega  do resolve */
enviarEmail("Olá", "Pedrinho@gmail.com").then( ({time, to})=> {
    console.log(`
        time: ${time} /*pega do parametro do then que pegou do resolve*/
        to: ${to}
    `)
} ).catch((e) => {
    console.log("parece que " + e )
})