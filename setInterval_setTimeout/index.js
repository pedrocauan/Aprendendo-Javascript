
// === Maneira da aula ==

//Pega retorna uma data
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}


//Roda a hora a cada um segundo
const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000);

// para o contador depois de 10 segundos
setTimeout(() => {
    clearInterval(timer)    
}, 3000);

setTimeout( () => {
    console.log("Vai parar jaja");
},5000);





// === Minha maneira ===
//Pega a hora
// const getHour = () => {
//     let date = new Date();
//     //retorna a hora
//     return date.toLocaleTimeString("pt-BR", {
//         hour12: false
//     });
// }
// //Mostra hora
// const showHour = () => {
//     console.log(`Hora atual: ${getHour()}`);//Mostra a hora na tela
// }

// //Mostra a hora atual na tela de 1 em 1 segundos
// setInterval(showHour, 1000);

//Repte 10 vezes
// const teenTimes = () => {
//     setInterval( () => {
//         setTimeout(() => {
//             clearInterval(console.log(mostraHora));
//         },1000);
//     }, 1000);
// }
