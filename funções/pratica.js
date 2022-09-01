function Calculadora(){
    this.display = document.querySelector(".display")
    this.btnClear = document.querySelector(".btn-clear")

    this.capturaCliques = () => {
        document.addEventListener("click", (event) => {
            const el = event.target // o botão que está sendo clicado
            if(el.classList.contains("btn-num"))
                this.addNumDisplay()
        })
    }

    this.inicia = () => {
        this.capturaCliques()
    }
}

calculadora = new Calculadora()
calculadora.inicia()