class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario")
    this.eventos()
  }



  eventos() {
    this.formulario.addEventListener("submit", e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const camposValidos = this.camposSaoValidos()

  }

  camposSaoValidos() {
    let valid = true

    //remove todas as mensagens de erro quando o form é enviado
    for(let errorText of  document.querySelectorAll(".error-text"))
    {
      errorText.remove()
    }
    //pega todos os campos do form
    for (let campo of this.formulario.querySelectorAll(".validar")) {
      //label com o nome dos inputs
      const label = campo.previousElementSibling.innerHTML
      
      //STRING vazia = false, se a string tiver vazia ele da false e n entra na condição
      if (!campo.value) {
        this.criaErro(campo, `Campo ${label} invalido !!`)
        valid = false
      }


    }
  }

  criaErro(campo, msg) {
    const  div = document.createElement("div")
    div.innerHTML = msg
    div.classList.add("error-text")

    //coloca o erro abaixo do form
    campo.insertAdjacentElement('afterend', div)


  }



}

valida = new ValidaFormulario()
