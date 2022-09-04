const nome = "pedro"
const sobrenome = "santos"
const falaNome = () => `${nome} ${sobrenome}`


// ==ṔRIMEIRA FORMA ==
// module.exports.nome = nome
// module.exports.sobrneome = sobrenome
// module.exports.falaNome = falaNome


// === SEGUNDA FORMA ==
// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome

// ===  TERCEIRA FORMA
module.exports = {
  nome,
  sobrenome,
  falaNome
}


/*quando se utiliza a palavra this dentro do modulo, a classe que sera apontada
  será tanto o exports quando o module*/
this.qualquerCoisa = "O que eu quiser exportar"

