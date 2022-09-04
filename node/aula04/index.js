const fs = require("fs").promises
const path = require("path")


async function readdir(rootDir){
    //se nao encontrar o diretio informado, ele usa o diretorio absoluto
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)

    walk(files, rootDir)
}


async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)
        //ignora a pasta git
        if(/\.git/g.test(fileFullPath)) continue
        //ignora os modulos do node
        if(/node_modules/g.test(fileFullPath))continue

        //ve se  é um diretório
        if(stats.isDirectory()) {
            readdir(fileFullPath)
            continue /*continua na proxima iteração do laço*/
        }
        //Lista todos os arquivos css
        if (
            !/\.css$/g.test(fileFullPath)
        ) continue;
        console.log(fileFullPath);
        
    }
}



readdir("/home/philia/Desktop/Aprendendo-Javascript")

 //fs.readdir() /*le arquivos de maneira sincrona*/
 //fs.readdirSync() /* le arquivos de maneira assincrona*/
 //path.resove  pega o diretorio absoluto