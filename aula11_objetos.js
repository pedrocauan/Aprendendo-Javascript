
//toda função que  retorna um objeto é chamada de factory, ou seja, ela é uma fabrica de objetos
function criaPessoa(nome, sobrenome, idade) /*parametro é a variavel que ta dentro dos parenteses da função*/
{
    return {
        nome,
        sobrenome,
        idade
    };
}

// /*maneira simplificada*/
// // const criaPessoa = function(nome,sobrenome,idade){
// //     return {nome,sobrenome,idade};
// // };


//argumento é o VALOR que é passado para o parametro
const pessoa1 = criaPessoa("LUiz"/*argumento é uma string*/, "Otavio", "21");
const pessoa2 = criaPessoa("Maria", "Machado", "16");
const pessoa3 = criaPessoa("Joao", "Batista", "25");
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);

// const pessoa1 = {
//     nome: 'luiz',
//     sobrenome: 'otavio',
//     idade: 25,

//     falaNome() {
//         //o this referencia o atributo nome contido em pessoa1
//         console.log(`O nome é: ${this.nome}, o sobrenome é ${this.sobrenome}`);
//     }
// };  

// pessoa1.falaNome();