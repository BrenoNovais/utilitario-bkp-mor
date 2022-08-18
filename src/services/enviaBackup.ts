import axios from "axios";
import fs from 'fs'
import BuscaConfigs from "./buscaConfigs";
import FormData from "form-data";
import api from "./api";
import path from 'path'

export async function EnviaBackup() {

    const configs = BuscaConfigs()

    const data = new FormData()

    data.append('id_empresa', configs.ID_EMPRESA)

    data.append('anexo', fs.createReadStream(path.resolve(`${configs.DIRETORIO_BKP}/${configs.NOME_EMPRESA}.zip`)))

    await api({
        method: 'post',
        url: '/recebe-backup',
        data,
        auth: {
            username: 'morinfo',
            password: "@numsey1008"
        },
        headers: data.getHeaders()
    })
    .then(response =>{
        console.log('Salvo com sucesso')
    })
    .catch(error =>{
        console.log(error?.response ? error.response : 'Problema ao gerar o BKP')
    })

}