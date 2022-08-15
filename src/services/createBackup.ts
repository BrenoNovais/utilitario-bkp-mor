import fs from "fs"
import path from "path"
const os = require('os');
import DumpDatabase from "./dump"
import encrypt from "./encryptedArchiver"

async function CreateBackup() {

    const url_temp = os.tmpdir() + '/temp.sql'

    //BUSCA ARQUIVO CONFIG.JSON
    let busca_configs = fs.readFileSync(path.resolve((path.resolve() + '/configs.json')))

    //LE O .JSON E TRANSFORMA EM STRING
    const info_configs = JSON.parse(String(busca_configs)) 

    //FUNÇÃO QUE CRIA O DUMP COM AS INFORMAÇÕES DO CONFIG
    await DumpDatabase(info_configs.USER, info_configs.PASSWORD, info_configs.DATABASE, url_temp)

    //FUNÇÃO QUE CRIA O .ZIP COM SENHA
    encrypt({
        content: fs.createWriteStream(`${info_configs.DIRETORIO_BKP}/testedoconfig.zip`),
        file: `${info_configs.FILENAME}`,
        password: info_configs.ZIP_PASSWORD, //SENHA PARA ACESSAR O .ZIP
    }) 
}

export default CreateBackup