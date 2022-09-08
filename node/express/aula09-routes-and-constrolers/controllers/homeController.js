exports.paginaInicial = (req, res) => {
    res.send(`
            <form action="/" method="POST">
                nome do cliente: <input type="text" name="nome">
                idade: <input type="text" name="idade">
    
                <input type="submit" value="acomi teu cu">
            </form>
        
        `)
}

exports.trataPost = (req, res) => {
    res.send(`Eii, sou sua nova rota de post !!`)
}