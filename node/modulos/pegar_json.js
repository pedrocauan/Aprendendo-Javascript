
/*pega os dados do json via xhr (XMLHttpRequest)*/
axios.get("https://www.otaviomiranda.com.br/files/json/pessoas.json")
    .then(response => console.log(response.data))
    .catch(e => console.log(e))