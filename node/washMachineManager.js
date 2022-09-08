const onOff = async () => {
    let on = true
    if(on)
        console.log(`ta ligado`)
    else
        console.log(`ta desligado`)
}

const jump = async () => {
    console.log(`ta saltando`)
}

const drying = async () => {
    console.log(`ta secando`)
}

const rising = async () => {
    console.log(`ta aumentando`)
}

const speakOutLunch = async () => {
    console.log(`ta comendo lanche`)
}


module.exports = {
    onOff,
    jump,
    drying,
    rising,
    speakOutLunch
}