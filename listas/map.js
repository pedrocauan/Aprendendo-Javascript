const numbers = [1,2,3,4,5];

//O map pega um array  e aplica uma função para todos os elementos desse array


// == Primeira forma ==
const multipliedByTwo = numbers.map(function(number){
    return number * 2;
});

// == SEgunda forma ==
// const multipliedByTwo = numbers.map((number) => number*2);

console.log(multipliedByTwo);