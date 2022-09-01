function Calculadora() {
  this.display = document.querySelector(".display")
  this.btnClear = document.querySelector(".btn-clear")

  //Inicia a calculadora
  this.inicia = () => {
    this.capturaCliques()
    this.capturaEnter()
  }

  this.capturaEnter = () => {
    document.addEventListener("keypress", (e) => {
      //se o cara nao digitar enter ele sai da funçao
      if(e.keyCode !== 13)
        return
      //se ele teclou enter, faz a conta
      this.realizaConta()
    })
  }

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target // o botão que está sendo clicado
      if (el.classList.contains("btn-num"))
        this.addNumDisplay(el)

      if (el.classList.contains("btn-clear"))
        this.clear()

      if (el.classList.contains("btn-del"))
        this.del()

      if (el.classList.contains("btn-eq"))
        this.realizaConta()
    })
  }

  this.realizaConta = () => {
    try{
      const conta = Number(eval(this.display.value))
      //Se nao for uma conta que o javascript possa realizar, da erro
      if(!conta){
        alert("Conta invalida !!")
        return
      }

      this.display.value = conta
    }catch(err){
      alert("Conta inválida !!")
      return
    }
  }

  //Adiciona os numeros na calculadora
  this.addNumDisplay = (el) => {
    this.display.value += el.innerText
    this.display.focus() //Faz com que o cursor fique no input de resultado sempre que adicionar um numero
  
  }

  //Limpa o input
  this.clear = () => this.display.value = ""
  
  //apaga quando clica no bota <<
  this.del = () => this.display.value = this.display.value.slice(0, -1) 

}

calculadora = new Calculadora()
calculadora.inicia()