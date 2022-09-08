export default function ValidaCpf(cpf = '') {
    this.cpfEnviado = cpf.replace(/\D+/g, "") /* /\D+/g, "" remove tudo o que nao for numero da string*/
    this.cpfSoNumeros = cpf.replace(/\D+/g, "")

}

//ve se todos os numeros enviados são iguais. ex: 111.111.111-11
ValidaCpf.prototype.isSequencia = function() {
    const sequencia = this.cpfSoNumeros.charAt(0).repeat(this.cpfSoNumeros.length)
    return sequencia === this.cpfSoNumeros? true : false
}

//cria os digitos do cpf novo que será comparado com o enviado, se os dois forem iguais, o cpf enviado é valido
ValidaCpf.prototype.criaDigito = function() {
    //cpf sem os ultimos 2 digitos
    const cpfParcial = this.cpfSoNumeros.slice(0, -2)
    // validação do primeiro digito
    const digito1 = this.criaUltimosDigitos(cpfParcial)
    const digito2 = this.criaUltimosDigitos(cpfParcial + digito1)
    const cpfNovo = cpfParcial + digito1 + digito2

    return cpfNovo

}

ValidaCpf.prototype.criaUltimosDigitos = function(cpfParcial) {
    const arrayCpf = Array.from(cpfParcial)    
    let regressivo = arrayCpf.length + 1
    //val -> digito do cpf 
    /*ac -> acumulador que guarda a multiplicação dos digitos do cpf em ordem regressiva.
     ex: CPF = 123.456.789
         CONTA =  1x10, 2x9, 3x8, 4x7, 5x6, 6x5, 7x4, 8x3, 9x2*/ 
    //regressivo -> pega o tamanho do cpfParcial(9) e soma +1 pra que seja feito o calculo
    const total = arrayCpf.reduce((ac,val) =>{
        ac += (regressivo *  Number(val))
        regressivo--;

        return ac
    }, 0)
    const digito = 11 - (total % 11)

    return digito

}
ValidaCpf.prototype.valida = function() {
    //verifica se nao foi enviado um valor vazio
    if(typeof this.cpfSoNumeros === `undefined`)
        return false
    //verifica se o cpf tem o tamanho certo
    if(this.cpfSoNumeros.length !== 11)
        return false
    if(this.isSequencia())
        return false
    
    const cpfNovo = this.criaDigito()
    if(cpfNovo !== this.cpfEnviado)
        return false
    return true

}


