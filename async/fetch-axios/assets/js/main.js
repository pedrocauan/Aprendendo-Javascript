
// /*PEGA DADOS DO JSON com fetch e then*/
// fetch('pessoas.json')
// //pega a resposta do servidor que devolve uma nova promise
// .then(response => response.json())
// //carrega os dados json na tela
// .then(json => carregaElementosNaPagina(json))


/*axios usa xhr como padrao*/
//envia dados via axios
axios('pessoas.json')
.then(response => carregaElementosNaPagina(response.data /*.data propriedade que pega os dados*/))


//carrega os dados na tela
function carregaElementosNaPagina(json) {
  const table = document.createElement("table")
  //cria elementos e insere tabela da tela
  for(let pessoa of json){
    const tr = document.createElement("tr")

    //Coluna nome
    let td = document.createElement("td")
    td.innerHTML = pessoa.nome
    tr.appendChild(td)
    
    //coluna idade
    td = document.createElement("td")
    td.innerHTML = pessoa.idade
    tr.appendChild(td)

    //coluna salario
    td = document.createElement("td")
    td.innerHTML = pessoa.salario
    tr.appendChild(td)
  
    table.appendChild(tr)
  }

  const resultado = document.querySelector(".resultado")
  resultado.appendChild(table)
}