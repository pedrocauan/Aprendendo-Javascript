function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            //tira letras,pontos, espaços e tudo que nao for um numero do cpf
            return cpfEnviado.replace(/\D+/g, "");
        }
    });
}



ValidaCPF.prototype.valida = function(){

    //se o cpf enviado for vazio, ele é invalido
    if(typeof this.cpfLimpo === 'undefined')
        return false

    //se o cpf enviado tiver mais de 11 digitos, ele é invalido
    if(this.cpfLimpo.length !== 11)
        return false

    if(this.isSequencia())
        return false
    //Pega os 2 ultimos digitos do cpf
    const cpfParcial = this.cpfLimpo.slice(0, -2) ;
    console.log(cpfParcial)

    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
   
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};


ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac,val) => {
        ac += (regressivo *  Number(val))
        regressivo--;
        return ac
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);

};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia.length === this.cpfLimpo.length ? true : false
}
const cpf = new ValidaCPF("521.504.188-19");
console.log(cpf.valida());

// 070.987.720-03
