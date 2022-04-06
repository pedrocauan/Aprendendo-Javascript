/*Todas as funções fazem a mesma coisa, o que muda vai ser o atributo src da tag iframe passada como string*/

function eleGosta() {
    
    //adicionar: ?&autoplay=1 no final do link. Ex: 
    //o link https://www.youtube.com/embed/b7E0xhVXRTQ vira https://www.youtube.com/embed/b7E0xhVXRTQ?&autoplay=1
    
    window.document.body.innerHTML += `<iframe width="560" height="315" /*link do video aqui -->*/src="https://www.youtube.com/embed/b7E0xhVXRTQ?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`  
}


function queIssoMeuFilhoCalma() {
    window.document.body.innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/ou3BlCaj1DM?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
}

function Rapaz() {
    window.document.body.innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/whns12cw4-w?&autoplay=1"  title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`

}

function dancaGatinho() {
    window.document.body.innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/OutIegT8HBg?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

}

function Rapaz() {
    window.document.body.innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/whns12cw4-w?&autoplay=1"  title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`

}
