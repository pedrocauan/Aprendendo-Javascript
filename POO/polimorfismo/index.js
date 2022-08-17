
//Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo

}

//sacar
Conta.prototype.sacar = function(valor){
    //ve se a pessoa tem saldo
    if(this.saldo < valor){
        console.log(`Saldo insificiente !!\nSaldo: ${this.saldo}`)
        return
    }
    //desconta o valor sacado
    this.saldo -= valor
    this.verSaldo()

}


//depositar
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
//ver saldo
Conta.prototype.verSaldo = function(){
    console.log(`Ag/C: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}`)
}

//====== CONTA CORRENTE ======
console.log("\n\nCORRENTE:")

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

function ContaCorrente(agencia, conta, saldo, limite) {
    //herda da superclasse conta
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype.sacar = function(valor){
    //ve se a pessoa tem saldo com o limite de 100 reais
    if(this.saldo + this.limite < valor){
        console.log(`Saldo insificiente !!\nSaldo: ${this.saldo}`)
        return
    }
    //desconta o valor sacado
    this.saldo -= valor
    this.verSaldo()
}

const corrente = new ContaCorrente(11,22, 0, 100)

corrente.depositar(10)
corrente.sacar(110)
corrente.sacar(20)

console.log("\n\nPOUPANÇA:")

// ======= CONTA POUPANÇA ========
//usando prototype  da conta
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

function ContaPoupanca(agencia, conta, saldo) {
    //herda da superclasse conta
    Conta.call(this, agencia, conta, saldo)
}

const poupanca = new ContaPoupanca(11, 22, 0)

poupanca.depositar(10)
poupanca.sacar(10)
poupanca.sacar(10)



