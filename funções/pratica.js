// funções auto invocadas | funções imediata || (IIFE)

// IIFE -> Imediatle Invoked Function Expression -> ()()

//escopo:
//(function(){})()

function createPerson(name, weight, height) {
    return {
        
        imc(){
            const indice = weight / height ** 2
            return indice.toFixed(2)
        }
    }
}


const p1 = createPerson("pedro", 80, 1.75)
console.log(p1.imc())