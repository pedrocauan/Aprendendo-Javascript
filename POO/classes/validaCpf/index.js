class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, "cpfLimpo", {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ``)/*remove tudo que nao seja numero do cpf envaido*/
            
        })


       
    }

    isSequencia() {
        /*ve se o cpf enviado tem todos os numeros iguais*/
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }


     geraNovoCpf() {
        //Pega o cpf sem os ultimos 2 digitos
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        this.novoCpf = cpfSemDigitos + digito1 + digito2

    }

    
    /*Toda vez que um metodo não contém a palavra This, ele pode se tornar static */
    static geraDigito(cpfSemDigitos) {
        let total = 0
        // +1 é o digito que vai ser retornado e adicionado para a validação do digito 2
        let reverso = cpfSemDigitos.length + 1
        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso--   
        }
        const digito = 11 - (total % 11)

        return digito <= 9? String(digito): `0`

    }

    valida() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== `string`) return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.isSequencia()) return false
        this.geraNovoCpf()

        return this.novoCpf === this.cpfLimpo
    }
}


let validaCPF = new ValidaCPF(`070.987.720-03`)
// validaCPF = new ValidaCPF(`999.999.999-99`)

if(validaCPF.valida())
    console.log(`CPF VALIDO`)
else
    console.log(`CPF INVALIDO`)
