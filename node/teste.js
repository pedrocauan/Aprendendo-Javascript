function calcular() {
    let notas = Number(document.getElementsByClassName("nt").value)
    console.log(notas[0])
    let result = 0
    for(let i = 0; i < notas.length; i++) {
        result+= Number(notas[i].value())
    }
    console.log(result)
    //valida o conteudo que foi pegado no input
    // if(resultado.toString() === "NaN")
    //     return //sai da função caso o calculo de errado
    // document.querySelector(".result").innerText =
    //     "\n\nA média é: " + resultado.toFixed(1);
}

function limpar() {
    for(let i = 0; i < notas.length; i++) {
        notas[i].value = null;
    }


    let resultado = "";
    document.querySelector(".result").innerText = "\n\n" + resultado;
}