/*um arquivo javscript é um modulo no node*/
/*se o modulo não for exportado, ele não pode ser utilizado*/

/*arquivo de configuração do webpack*/
const path = require('path') //CommonJS

module.exports = {
    mode: "development", /*desenvolvimento ou produção*/
    entry: "./src/index.js", /*arquivo de entrada q vai ser usado no bundle*/
    output: {
        path: path.resolve(__dirname, "public", "assets", "js"), /*pasta que vai tar o bundle*/
        filename: "bundle.js", /*nome do arquivo do webpack (nesse caso bundle.js)*/
    },
    module: {
        /* regras de uso*/
        rules: [{
            exclude: /node_modules/, /*faz o webpack nao olhar os arquivos da node_modules*/
            test: /\.js$/, /*faz ele usar só arquivos com extensao js*/
            use: {
                loader: "babel-loader", /*fala pra ele usar o babel*/
                options: {
                    presets: [
                        "@babel/env"
                    ]
                }
            }
        }]
    },
    devtool: "source-map"
}