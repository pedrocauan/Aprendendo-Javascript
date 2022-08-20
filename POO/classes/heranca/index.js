//classe dispositivo eletronico
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false 
    }


    ligar() {
        if(this.ligado){
            console.log(`${this.nome} já ligado !!`)
            return

        }
        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} ja DESLIGADO`)
        }

        this.ligado = false

    }
}
/**/ 
//herda dispositivoEletronico
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
         super(nome) //herda da classe pai da classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

//herda tablet
class Tablet  extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    // ligar() {
    //     console.log(`você alterou o metodo ligar`)
    // }
}

const smart = new Smartphone(`Samsung`, `preto`, `galaxy S10`)
const t1 = new Tablet(`iPad`, true)

t1.ligar()
t1.ligar()