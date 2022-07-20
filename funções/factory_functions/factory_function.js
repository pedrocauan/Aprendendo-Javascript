//Factory Function || fabrica de funções

// Uma factory function é uma função que retorna objetos
// A partir dos objetos retornados ele pode criar novos objetos
// No exemplo abaixo, a factory function createPerson permite-nos criar inumeras pessoas
// atribuindo seu retorno em uma variavel

function createPerson(name, weight, height) {
    return {
        firstName(){
            const firstName = name.split(" ").shift() // guarda o primeiro nome
            return firstName //retorna o primeiro nome
        },

        lastName() {
            const lastName = name.split(" ")
            lastName.shift() //Tira o primeiro nome
            return lastName.join(" ") //retorna o sobrenome
        },

        fullName(){
            return  `${this.firstName()} ${this.lastName()}` //Cria o nome completo com primeiro nome e sobrenome.
        },

        //Calcula o imc do cara de acordo com o peso e altura
        imc(){
            const indice = weight / height ** 2 //Formula imc
            return indice.toFixed(2) //retorno com 2 casas decimais
        }
    }
}

//Criação das pessoas com a factory function
const p1 = createPerson("pedro santos", 80, 1.75)
const p2 = createPerson("Joana silva machado", 70, 1.60)
const p3 = createPerson("Mario silva", 120, 1.80)

//Informações da pessoa 1
console.log(p1.firstName())
console.log(p1.lastName())
console.log(p1.fullName())
console.log(p1.imc())

//Informações da pessoa 2
console.log(p2.firstName())
console.log(p2.lastName())
console.log(p2.fullName())
console.log(p2.imc())

//Informações da pessoa 3
console.log(p3.firstName())
console.log(p3.lastName())
console.log(p3.fullName())
console.log(p3.imc())
