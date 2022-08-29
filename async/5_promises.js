// promise é um callback gourmet

// Promise = Promessa
// Quando prometemos algo para alguém, não fazemos essa coisa agora
// - Uma promessa  PODE ou NÃO ser cumprimida
// ex: email

/* Eu PROMETO enviar esse email para voce */
// email => resolve: "ok" | reject : "falha"

/* Eu PROMETO salvar esse dado no banco de dados quando tu enviar o form*/
// save => resolve: "Dado salvo" | reject: "Ocorreu um erro, foi mal :("

function enviarEmail(corpo, para) {
    //Quando trabalhamos com promises não temos necessidade de usar callback
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
             let deuErro = true
            console.log("Email enviado")
             if(!deuErro) {
                //promessa cumprimida
                resolve() //Promessa OK

             } else {
                //promessa nao cumprida
                reject() //Foi mal, eu falhei !!
             }
        }, 4000)
    })
}
// .then() -> DAÍ, quando a promessa for cumprida voce faz ela
enviarEmail("Olá", "Pedrinho@gmail.com").then( (dados)=> {
    console.log("Você enviou o email. Parabéns, cumpriu sua promise")
} ).catch(() => {
    console.log("Que pena, não deu :(")
})