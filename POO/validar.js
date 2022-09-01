import "./ex_validaCPF.js"

const cpf = `521.504.188-19`
const validarCpf = new ValidaCpf(cpf)

console.log(validarCpf.valida())