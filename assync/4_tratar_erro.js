/**
 * 
 * Funções async executam  uma tarefa que precisa de um certo tempo para ser realizada
 * sem que o programa pare sua execução
 * ex:
 *  -- ENVIAR UM EMAIL --
 *   1 - checar
     2 - hash (fazer criptografia)
     . - upload //DEMORA UM TEMPO para ser feito
     4 - salvar
     . - enviar email   //DEMORA UM TEMPO PARA SER FEITO
*/ 

function enviarEmail(corpo, para, callBack) {
    setTimeout(()=> {

        //LOGICA
        let deuErro = false

        if(deuErro) {
            callBack(12, "O envio do email falhou !")
        } else {
            callBack(12)

        }

    }, 8000)
}
console.log("Inicio do envio de e-mail!!")
enviarEmail("Oi, eu sou peedrones", "pedrones@gmail.com", (time, erro) => {
    // erro é undefined quando NÃO da erro
    if(erro === undefined) {
        console.log("TUDOO OK")
        console.log(`Tempo de espera: ${12}s`)
    }
    //  caso o erro NÃO seja nulo, ele DEU erro
    else {
        // erro é a mensagem de erro passada no parametro da chamada da função dentro da ENVIAR EMAIL
        console.log("Ocorreu um erro: " + erro)
    }
}) 
console.log(`email enviado !! Deve chegar em alguns minutos`) 