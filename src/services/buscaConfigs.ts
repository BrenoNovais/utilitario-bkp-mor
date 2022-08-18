import fs from 'fs'
import os from 'os'
import path from 'path'
import configsType from '../../@types/configsType'

export function BuscaConfigs() {

    //BUSCA ARQUIVO CONFIG.JSON
    let busca_configs = fs.readFileSync(path.resolve((path.resolve() + '/configs.json')))

    //LE O .JSON E TRANSFORMA EM STRING
    const info_configs = JSON.parse(String(busca_configs))

    const url_temp = os.tmpdir()
    

    const retorno: configsType = {
        ...info_configs,
        URL_TEMP: url_temp
    }

    return retorno
}

export default BuscaConfigs