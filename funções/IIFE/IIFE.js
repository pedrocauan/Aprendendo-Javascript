// funções auto invocadas | funções imediata || (IIFE)

// IIFE -> Imediatle Invoked Function Expression -> ()()

//escopo:
//(function(){})()

//Protege a função do escopo global 
(function( idade, peso, altura){
    
    const sobrenome = "Silva"
    function getNome(nome){
        return nome + " " + sobrenome
    }
    
    function falaNome(){
        console.log(getNome("Pedro"))
    }

    falaNome()
    console.log(idade, peso, altura)
})(12,45.5, 1.82) //uma IIFE pode passar parametros  para as funções dentro dela 

const nome = "pedrao" //Impede que a variavel nome dentro da IIFE entre em conlito com essa daqui