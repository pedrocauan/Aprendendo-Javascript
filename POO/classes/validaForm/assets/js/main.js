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
    const senhasValidas = this.senhasSaoValidas()

    //envia o formulário para o backend se ele tiver válido
    if(camposValidos && senhasValidas){
      this.formulario.submit() //envia o formulário 
    }
  }

  senhasSaoValidas() {
    let valid = true
    const senha = this.formulario.querySelector(".senha")
    const repetirSenha = this.formulario.querySelector(".repetir-senha")
    // ve se a senha tem de 6 a 12 caracteres
    if (senha.value.length < 6 ||  senha.value.length > 12) {
      valid = false
      this.criaErro(senha, "A senha precisa ter de 6 a 12 caracteres")
    }
    //ve se os campos senhas e repetir senha sao iguais
    if (senha.value !== repetirSenha.value) {
      valid = false
      this.criaErro(senha, "Os campos senha e repetir senha precisam estar iguais")
      this.criaErro(repetirSenha, "Os campos senha e repetir senha precisam estar iguais")
    }

    return valid
  }


  camposSaoValidos() {
    let valid = true //verifica se o input é valido

    //remove todas as mensagens de erro quando o form é enviado
    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove()
    }
    //pega todos os campos do form
    for (let campo of this.formulario.querySelectorAll(".validar")) {
      //label com o nome dos inputs (nome, sobrenome, senha, etc..)
      const label = campo.previousElementSibling.innerHTML

      // ========= VALIDA OS CAMPOS DO FORM ==========

      //STRING vazia = false, se o input tiver vazio ele da false e n entra na condição
      if (!campo.value) {
        this.criaErro(campo, `Campo ${label} vazio !!`)
        valid = false
      }

      //Ve se o CPF é valido
      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) {
          valid = false
        }
      }
      //pega o campo usuario
      if (campo.classList.contains("usuario")) {
        //valida o campo usuario
        //console.log(this.validaUsuario(campo))
        if (!this.validaUsuario(campo)) {
          valid = false
        }

      }

      return valid

    }
  }
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value)

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF INVÁLIDO !!")
      return false
    }
    return true
  }

  validaUsuario(campo) {
    const usuario = campo
    //ve se o campo tem menos  de 4 caracteres
    if (!(usuario.value.length >= 4)) {

      this.criaErro(usuario, "O usuario precisa ter de 4 a 12 letras")
      return false
    }
    //ve se o campo tem mais de 12 caracteres
    if (!(usuario.value.length <= 12)) {
      this.criaErro(usuario, "O usuario precisa ter de 4 a 12 aletras")
      return false
    }
    //ve se o campo possui caracteres especiais
    if (!usuario.value.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "Nome de usuario só pode conter apenas letras [a-Z] ou números[ 0-9]")
      return false
    }
    return true
  }

  criaErro(campo, msg) {
    const div = document.createElement("div")
    div.innerHTML = msg
    div.classList.add("error-text")

    //coloca o erro abaixo do form
    campo.insertAdjacentElement('afterend', div)

  }
}

valida = new ValidaFormulario()
