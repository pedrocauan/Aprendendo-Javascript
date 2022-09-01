class ValidaFormulario{
    constructor() {
        this.formulario = document.querySelector(`.formulario`)
    }


    evento() {
        this.formulario.addEventListener(`submit`, (e) => {
            this.handleSubmit(e)
        })
    }

    //Trava o envio do form
    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.campoValido()

    }

    campoValido() {
        let valid = true

        for(let campo of this.formulario.querySelectorAll(`.validar`))
        {
            console.log(campo)
        }
    }

}

const valida = new ValidaFormulario()
valida.campoValido()