



class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor) {
        valor = valor.split(" ")
        this.nome = valor.shift()
        this.sobrenome = valor.join(" ")
    }
}

const p1 = new Pessoa("pedro", "doze")
p1.nomeCompleto = "joao Cleber"
console.log(p1.nomeCompleto) 





const _velocidade = Symbol(); //define um id aleatorio para a variavel

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 55;
    }

    set velocidade(valor) {
        //SETTER
        console.log("setter")
        if(typeof valor !== "number")
            return;
        if(valor >= 100 || valor <= 0)
            return;
        this[_velocidade] = valor
    }


    get velocidade() {
        //GETTER
        console.log("GETTER")
        return this[_velocidade]
    }

    acelerar() {
        if(this[_velocidade] >= 100)
            return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0)
            return;
        this[_velocidade]--;
    }

}

const c1 = new Carro("FUSCA");
c1.velocidade = 99
console.log(c1.velocidade)


// for(let i = 0; i <= 200; i++)
// {
//     c1.acelerar();
// }
