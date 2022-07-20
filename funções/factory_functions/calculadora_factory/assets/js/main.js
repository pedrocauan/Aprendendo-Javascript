function criaCalculadora(){
  
    return {
      //Coloca o input de resultado no atributo display pra ser utilizado
      display: document.querySelector(".display"), //input 
      btnClear: document.querySelector(".btn-clear"), //botao de limpar
  
  
      inicia(){
        //chama a funçao clique botoes que ta dentro do objeto retornado nesta factoty
        this.pressionaEnter()
        this.cliqueBotoes() /* this = calculadora*/ 
        
      },
  
      pressionaEnter(){
        this.display.addEventListener("keyup", (e) => {
            if(e.keyCode === 13){
              this.realizaConta()
            }
  
  
        })
      },
  
      realizaConta(){
        let conta = this.display.value
        try{
          conta = eval(conta)
          if(!conta){
            alert("Conta inválida !!")
            return
          }
  
          this.display.value = conta
        } catch(e){
          alert("Conta inválida !!")
          return
        }
      },
  
      cliqueBotoes(){
        
        document.addEventListener("click", (e) => {
          const el = e.target/*elemento que ta sendo clicado*/
          //Se for o botao da calculadora ele adiciona no input de resultado
          if(el.classList.contains("btn-num")){
            this.btnParaDisplay(el.innerText) /*this = window.document*/
          }
  
          //Limpa o display qnd o user clica no (C)
          if(el.classList.contains("btn-clear")){
            this.clearDisplay()
          }
  
          //Apaga o primeiro caractere inserido quando  o user clica no (<<)
          if(el.classList.contains("btn-del")){
            this.apagaUm()
          }
  
          //Faz a conta quando o user clica no (=)
          if(el.classList.contains("btn-eq")){
            this.realizaConta()
          }
  
        })
        
  
      }, //cliquebotoes
    
      //Adiciona  o valor do botao criado no input
      btnParaDisplay(valor) {
        this.display.value += valor 
      },
  
      //Limpa display
      clearDisplay() {
        this.display.value = "" 
      },
  
      //Apaga  caractere
      apagaUm() {
        this.display.value = this.display.value.slice(0, -1) //Corta primeiro numero valor inserido
      }
  
  
    } //return
  } //Facoty
  
  const calculadora = criaCalculadora()
  calculadora.inicia()