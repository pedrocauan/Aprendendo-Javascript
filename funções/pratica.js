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
    console.log(`${min}:${sec}`)
}, 1000)