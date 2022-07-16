// === O arquivo prática é usado para  praticar durante as video aulas ===

// hoisting é poder executar a função em qualquer canto do código uma vez que ela ja ta declarada
falaOi()
//declaração de função (function hoisting)
function falaOi(){
    console.log("Oie")
}


//First Class Objecs | (Objetos  de primeira classe)
// First Class Objetos = Poder guardar uma função em uma variavel || Poder tratar a função como um dado
// Function Expression \/
const souUmDado = function(){
    console.log("   Sou um Dado")
}

//É possível passar uma função como parametro para que outra função seja executada
function executaFuncao(funcao){
    console.log("Vou executar sua função abaixo:")
    funcao()
}

executaFuncao(souUmDado)

//Arrow Functions
const funcArrow = () => {
    console.log("Sou uma arrow function")
}

funcArrow()

//Jogar função dentro de um objeto
const obj = {
    // fala: function(){
    //     console.log("Estou executando uma função dentro de um objeto !! ")
    // }
    fala(){
        console.log("Estou executando uma função dentro de um objeto !!")
    }
}
obj.fala()

