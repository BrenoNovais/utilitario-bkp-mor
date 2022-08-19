import fs from 'fs'
import BuscaConfigs from "./buscaConfigs";
import FormData from "form-data";
import api from "./api";
import path from 'path'

export async function EnviaBackup(date: String) {

    const configs = await BuscaConfigs()

    const data = new FormData()

    data.append('id_empresa', configs.id_empresa)
    data.append('anexo', fs.createReadStream(path.resolve(`${configs.diretorio_bkp}/${configs.nome}${date}.zip`)))

    await api({
        method: 'post',
        url: 'https://bkps-mor.fly.dev/api/v1/bkps',
        data,
        auth: {
            username: 'morinfo',
            password: "@numsey1008"
        },
        headers: data.getHeaders()
    })
    .then(response =>{
        console.log('uploading. . .')

        console.log('Salvo com sucesso')
    })
    .catch(error =>{
        console.log(error)
    })

}

export default EnviaBackup