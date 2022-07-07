const ages = [8,13,27,30,22, 40];

//age -> elemento da lista | accumulator -> variavel acumuladora 
const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
}, 100);

console.log(sumOfAges);