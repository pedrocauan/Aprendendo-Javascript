//escreva uma função que recebe 2 números  e retorne o maior deles

//== PRIMEIRA FORMA ==
// function greater(n1,n2){
//     if(n1 === n2)
//         return "O número é igual";
//     if(n1 > n2)
//         return n1;
//     if(n2 > n1)
//         return n2;
// }


// === Segunda forma ===
// const greater = function(n1,n2){
//     if(n1 ===n2)
//         return "O número e igual";
//     if(n1 > n2)
//         return n1;
//     if(n2 > n1)
//         return n2;
// }

// === Terceira forma ===
// const greater = (n1,n2) => {
//     if(n1 === n2)
//         return "O número é igual";
//     if(n1 > n2)
//         return n1;
//     if(n2 > n1)
//         return n2;
// }

// === QUarta forma ==
// function greater(n1,n2){
//     if(n1 !== n2)
//         if(n1 > n2)
//             return n1;
//         if(n2 > n1)
//             return n2;
// }

// === Quinta forma ===
const greater = function(n1,n2){
    if(n1 !== n2)
        if(n1 > n2)
            return n1;
        if(n2 > n1)
            return n2;
} 

// const Greater = (n1,n2) => n1 > n2? n1: n2;
console.log(greater(4,3));

