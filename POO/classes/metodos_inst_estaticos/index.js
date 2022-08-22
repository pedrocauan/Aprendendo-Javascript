function teste() {
    console.log(this)
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume  = 0
        teste() /*rodando função dentro do construtor*/
    }
    /* metodos estáticos são metodos que estão referentes somente a classe*/
    /* nao estao referentes a instancia*/
    /* (SÓ PODEM SER USADOS NA CLASSE)*/

    // Método de instancia
    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    //metodo estático
    static trocaPilha() {
        console.log(`Ok, vou trocar`)
    }

    static soma(n1,n2) {
        console.log(this) 
    }

    //gera aleatorios
    static geraNum(qnt, max = 5){
        //max é a quantidade de numeros maximos (vai de 1 até x)
        const nums = []
        for(let i = 0; i < qnt; i++){
            nums.push(1 + Math.floor(Math.random() * max))
        }
        console.log(nums)
    }
}

const controle1 = new ControleRemoto(`LG`)
controle1.aumentarVolume()
controle1.aumentarVolume()

/*é possível usar a classe para acessar o metodo estático*/
ControleRemoto.geraNum(10)
