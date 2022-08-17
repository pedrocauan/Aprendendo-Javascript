//Funções que vao ser usadas no prototype
const fala = {
    fala() {
        console.log(`${this.nome} está falando`)
    },
}

const come = {
    come() {
        console.log(`${this.nome} está comendo`)
    },
}

const bebe  = {
    bebe(){
        console.log(`${this.nome} está bebendo`)
    },
}

//Criar  constante que vai ser o prototype
const  pessoaPrototype = {...fala, ...come, ...bebe}

//Criar factory function
function criaPessoa(nome,sobrenome){
    
    // retornar  um novo objeto que passa como parametro:
    // 1 - O prototype criado
    // 2 - os atributos
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}


const p1 = criaPessoa("PEDRO", "DOZE")
console.log(p1)
const p2 = criaPessoa("Maria", "Joaquina")
console.log(p2)