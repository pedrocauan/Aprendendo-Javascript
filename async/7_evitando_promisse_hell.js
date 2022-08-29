
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

                reject("erro ao enviar o email")
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
/* async function main()  {
    const users =  await pegaUsuario()
    console.log(users)
}
main() */
//== É A MESMA COISA Q ISSO ==
/*pegaUsuario().then((user) =>{
    console.log(users)
})*/


console.log("INICIO")
//executa primeira essa promise -> busca o ID do user no banco                            
 

async function id() {
    const id =  pegarId()
    return id
}

async function buscaEmail() {
    const email =  buscaEmailBanco(id)
    return email
}

async function envia() {
    //pega  o email
    const email = await buscaEmail()
    //pega o id
    const id =  await pegarId()

    console.log(`Olá, ${email}`)
    //envia email
    enviarEmail().then(() => {
        console.log(`Email enviado para o usuario com id ${id}`)
    }).catch((e)=> {
        console.log(e)
    })
}

envia()