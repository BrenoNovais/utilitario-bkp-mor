import axios from 'axios'
import fs from 'fs'
import os from 'os'
import path from 'path'
import configsType from '../../@types/configsType'

export async function BuscaConfigs() {

    //BUSCA ARQUIVO CONFIG.JSON
    let busca_configs = fs.readFileSync(path.resolve((path.resolve() + '/configs.json')))

    //LE O .JSON E TRANSFORMA EM STRING
    const info_configs = JSON.parse(String(busca_configs))

    const url_temp = os.tmpdir()

    async function carregaApi() {

        const busca_api = await axios({
            url: `https://bkps-mor.fly.dev/api/v1/basic/empresas/id/${info_configs.id_empresa}`,
            method: 'get',
            auth: {
                password: '@numsey1008',
                username: 'morinfo'
            }
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
            })

        return busca_api
    }

    const dados = await carregaApi()

    const retorno: Promise<configsType> = {
        ...info_configs,
        ...dados,
        url_temp: url_temp
    }
    return retorno
}

export default BuscaConfigs