// Concatenar arrays em javascript

/*É possível usar o spread operator para concatenar arrays*/
// === EXEMPLO 1===
// const a1  = [1,2,3]
// const a2 = [4,5,6]
// const a3 = [...a1, ...a2]

// console.log(a3) /* r: 1,2,3,4,5,6*/

// === EXEMPLO 2 ===
// const a1 = ["pedro"]
// const a2 = ["miranda"]
// const a3 = [...a1, ...a2]

// console.log(a3) /*r: ["pedro", "miranda"]*/

//=== EXEMPLO 3 ===
// const a1 = "pedro"
// const a2 = "miranda"
// const a3 = [...[a1], ...[a2]]

// console.log(a3)


/* Também é possivel com a função concat()*/
// const a1 = "pedro"
// const a2 = "miranda"
// const a3 = a1.concat()

// const obj1 = {nome:"pedro", idade: 22, altura: 1.75}
// const obj2 = {nome:"luiz", idade: 27, altura: 1.80}
// const obj3 = {nomes:[...[obj1], ...[obj2]]}

// console.log(obj3.nomes)

