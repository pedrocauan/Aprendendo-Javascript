const cpf = `111.111.111-11`
const validarCpf = new ValidaCpf(cpf)
const body = document.querySelector(`body`)

const msg = () => {
    if(!validarCpf.valida())
        return body.innerHTML += `<h1>Cpf inválido !!<h1>`
    body.innerHTML += `<h1>Cpf válido !!</h1>`
}

msg()
