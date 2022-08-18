import fs from "fs"
import BuscaConfigs from "./buscaConfigs";
const os = require('os');
import encrypt from "./encryptBackup"
import path from 'path'
const execa = require('execa')
const configs = BuscaConfigs()

async function CreateBackup() {

    //FUNÇÃO QUE CRIA O DUMP COM AS INFORMAÇÕES DO CONFIG
    await execa(`mysqldump -u${configs.USER} -p${configs.PASSWORD} --databases ${configs.DATABASE} --result-file=${`${configs.URL_TEMP}/${configs.NOME_EMPRESA}`}.sql`);
    console.log('dump criado. . .')

    //FUNÇÃO QUE CRIA O .ZIP COM SENHA
    await encrypt({
        //ONDE VAI SER SALVO O BKP
        content: fs.createWriteStream(`${configs.DIRETORIO_BKP}/${configs.NOME_EMPRESA}.zip`),
        // ARQUIVO DENTRO DO ZIP
        file: `C:/Users/nicol/AppData/Local/Temp/almanara.sql`,
        password: configs.ZIP_PASSWORD, //SENHA PARA ACESSAR O .ZIP
    })

}
export default CreateBackup
