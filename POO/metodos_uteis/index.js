/* 
... (spread) -> pode ser usado para copiar os dados de um objeto em outro
 Object.assign(des, any) -> copia  as propriedades de um objeto qualquer para o objeto destino
 Object.keys() -> retorna as chaves da propriedade 
 Object.values() -> retorna os valores da propriedade
 Object.entries() -> retorna chave e valor juntos em arrays separados pra cada propriedade
 Object.freeze() -> congela objeto (impede que suas propriedades sejam alteradas)
 Object.defineProperties(prop, {alt}) -> define varias propriedades do objeto
 Object.defineProperty(prop, "name", {alt}) -> define  uma propriedade do objeto
 Object.getOwnPropertyDescriptor(obj, "prop", {}) -> Lista as propriedades do objeto (value, writable, enumerable, configurable)

*/




const produto = {name:"caneca", preco: 8.50, material: "madeira"}
// console.log(Object.entries(produto))

for(let  value of Object.entries(produto)){
    console.log(value[0], value[1])
}


