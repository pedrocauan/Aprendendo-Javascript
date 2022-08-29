
function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500)
    })
}

function buscaEmailBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pedrinho@gmail.com")
        }, 2000)
    })
}

function enviarEmail(corpo, para) {
    //Quando trabalhamos com promises não temos necessidade de usar callback
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let deuErro = false
            if (!deuErro) {
                resolve({ time: 12, to: "pedrinho@gmail.com" })

            } else {

                reject("deu erro")
            }
        }, 4000)
    })
}

function pegaUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve([
                { nome: "pedro", lang: "js" },
                { nome: "joao", lang: `java` },
                { nome: "daniel", lang: `ruby` }

            ])
        }, 3000)
    })
}

/*== ISSO AQUI ==*/
async function main()  {
    const users =  await pegaUsuario()
    console.log(users)
}
main()
//== É A MESMA COISA Q ISSO ==
/*pegaUsuario().then((user) =>{
    console.log(users)
})*/


/* console.log("INICIO")
//executa primeira essa promise -> busca o ID do user no banco                            
 pegarId().then(id => {
    //depois essa -> busca o email no banco
    buscaEmailBanco(id).then(email => {
        //depois essa -> envia o email para o user com o id  pego
        enviarEmail("Olá, como vai?", email).then(() => {
            console.log("Email enviado para usuario com id: " + id)
        }).catch( e => {
            console.log(e)
        })
    })
 })
 console.log("FIM") */