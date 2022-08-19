import fs from 'fs'
import BuscaConfigs from "./buscaConfigs";
import FormData from "form-data";
import api from "./api";
import path from 'path'

export async function EnviaBackupTeste(date: string) {

    const configs = await BuscaConfigs()

    const data = new FormData()
    date

    data.append('id_tenant', configs.id_empresa)
    data.append('anexo', fs.createReadStream(path.resolve(`${configs.diretorio_bkp}/${configs.nome}${date}.zip`)))

    await api({
        method: 'post',
        url: 'https://teste-server-bn.herokuapp.com/recebe-backup',
        data,
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

export default EnviaBackupTeste