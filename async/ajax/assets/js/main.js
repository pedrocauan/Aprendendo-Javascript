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
  const href = el.getAttribute("href") /*pega o link q ta na tag a*/
  console.log(href)
  const objConfig = {
    method: "GET",
    url: href /*link pego do html*/
  } 
  try{
    const response = await request(objConfig)
    carregaResultado(response)
  } catch(e) {
    console.log(e)
  }
  
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado")
  resultado.innerHTML = response
}