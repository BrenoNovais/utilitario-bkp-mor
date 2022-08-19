import fs from "fs"
import configsType from "../../@types/configsType";
import BuscaConfigs from "./buscaConfigs";
const os = require('os');
import encrypt from "./encryptBackup"
const execa = require('execa')
const configs = BuscaConfigs()

async function CreateBackup(configs: configsType) {

    try {
        //FUNÇÃO QUE CRIA O DUMP COM AS INFORMAÇÕES DO CONFIG
        await execa(`mysqldump -u${configs.db_user} -p${configs.db_password} --databases ${configs.db_name} --result-file=${`${configs.url_temp}/${configs.nome}`}.sql`);
        console.log('dump criado. . .')

        //FUNÇÃO QUE CRIA O .ZIP COM SENHA
        await encrypt(configs)

    } catch (error) {
        console.log(error)
   
    }
}
export default CreateBackup
