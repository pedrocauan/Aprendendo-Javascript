class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpfEnviado: cpfEnviado
        this.cpfSoNumeros: cpfEnviado.replace(/\D+/g, "")
    }


    valida() {
        if(this.cpfSoNumeros === '')
            return false
        if(this.cpfSoNumeros.length !== 11)
            return false
        return true
 
    }


}


let cpf;
const validaCPF = new ValidaCPF(cpf)
console.log(validaCPF.valida())
