const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true) /*true -> async, false -> sync*/
    xhr.send()

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText)

      } else {
        reject(xhr.statusText)
      }
    })
    })
  
}

//pega o click em qualquer elemento do navegador
document.addEventListener("click", (e) => {
  const el = e.target
  const tag = el.tagName.toLowerCase()
  if (tag === 'a') {
    e.preventDefault()
    carregaPagina(el)
  }
})

async function carregaPagina(el) {
  try{

    const href = el.getAttribute("href") /*pega o link q ta na tag a*/
    const response = await fetch(href)
    
    if(response.status !== 200)
      throw new Error(`ERROR 404 NOT FOUND PORRA`)
    const html = await response.text()
    carregaResultado(html)
    
  }
  catch(error) {
    console.error(`deu erro: ${error}`)
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado")
  resultado.innerHTML = response
}

/**
 * Uncaught -> erro nao tratado
 * 
 */











