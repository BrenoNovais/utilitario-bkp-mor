import fs from "fs"
import  BuscaConfigs  from "./buscaConfigs";
const os = require('os');
import DumpDatabase from "./dump"
import encrypt from "./encryptedArchiver"

async function CreateBackup() {

    const configs = BuscaConfigs()

    //FUNÇÃO QUE CRIA O DUMP COM AS INFORMAÇÕES DO CONFIG
    await DumpDatabase(configs.USER, configs.PASSWORD, configs.DATABASE, configs.URL_TEMP)

    //FUNÇÃO QUE CRIA O .ZIP COM SENHA
    encrypt({
        content: fs.createWriteStream(`${configs.DIRETORIO_BKP}/testedoconfig.zip`),
        file: `${configs.FILENAME}`,
        password: configs.ZIP_PASSWORD, //SENHA PARA ACESSAR O .ZIP
    }) 
}

export default CreateBackup