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

function enviarEmail(corpo, para) {
    setTimeout(()=> {
        console.log(`
            Para: ${para}
            -------------------------
            ${corpo}
            -------------------------
            De: Pedrones
            `)
    }, 8000)
}
console.log("Inicio do envio de e-mail!!") //executa
enviarEmail("Oi, eu sou peedrones", "pedrones@gmail.com") //executa mas nao para a execução do programa
console.log(`email enviado !! Deve chegar em alguns minutos`) //executa
console.log(`TUDO OK !!`)// executa