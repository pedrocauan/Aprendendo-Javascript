let sec = 0;
let min = 0;
const secounds = setInterval(() => {
    return sec++
}, 1000)

const minutes = setInterval(() => {
    if(sec === 60)
    {
        min++
        sec = 0
    }
})

const timer = setInterval(() =>{
    console.log(`${min}:${sec< 10? `0`+sec: sec }`) //adiciona o 0 quando os segundos forem menores que 10
}, 1000)