// Todo o front end fica dentro do objeto window no javavscript

// O objeto window, contem dentro dele varias funções

// As funções realizam alguma tarefa, no caso o alert exibe um alerta
// Confirm exibe uma janela de confirmação que retorna true ou false
// Prompt retorna uma string daquilo que foi digitado no campo da mensagem.

window.alert("Alerta");
window.confirm("Deseja sair?");
window.prompt("Digita alguma coisa aí, amigo.");

//É possível guardar o conteúdo de confirm e prompt em variável
let sair = window.confirm("Sair desta janela?");
alert(`sair = ${sair}`);

let nomeCachorro = window.prompt("Qual o nome do seu cachorro?");
alert(`nomeCachorro = ${nomeCachorro}`);

//Se tentar ler numeros com o promp ele vai retornar string
let num1 = window.prompt("Digite um número para a soma")
let num2 = window.prompt("Digite outro numero  para a soma");

window.alert(`${num1} + ${num2} = ${num1+num2}`);

//Isso acontece pq essa função retorna uma string, ai ele junta os texto
//Pra isso tu tem que  converter
num1 = Number(window.prompt("Digite um número para a soma"));
num2 = Number(window.prompt("Digite outro numero  para a soma"));
window.alert(`${num1} + ${num2} = ${num1+num2}`);
