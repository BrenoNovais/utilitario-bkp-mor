import fs from 'fs'
import BuscaConfigs from "./buscaConfigs";
import FormData from "form-data";
import api from "./api";
import path from 'path'
import fileSize from 'filesize';

export async function EnviaBackup(date: String) {

    const configs = await BuscaConfigs()

    const data = new FormData()

    const file = fs.createReadStream(path.resolve(`${configs.diretorio_bkp}/${configs.nome}${date}.zip`))

    const { size, mtime } = fs.statSync(path.resolve(`${configs.diretorio_bkp}/${configs.nome}${date}.zip`))
    console.log(size, mtime)

    const caminho_completo_arquivo = file.path

    data.append('caminho_completo_arquivo', caminho_completo_arquivo)
    data.append('data_arquivo', new Date(mtime).toLocaleDateString())
    data.append('hora_arquivo', new Date(mtime).getHours())
    data.append('minuto_arquivo', new Date(mtime).getMinutes())
    data.append('nome_empresa', configs.nome)
    data.append('id_tenant', configs.id_empresa)
    data.append('nome_arquivo', `${configs.nome}${date}.zip`)
    data.append('tamanho_arquivo', fileSize(size))

    data.append('anexo', fs.createReadStream(path.resolve(`${configs.diretorio_bkp}/${configs.nome}${date}.zip`)))

    await api({
        method: 'post',
        url: 'https://teste-server-bn.herokuapp.com/recebe-backup',
        data,
        auth: {
            username: 'morinfo',
            password: "@numsey1008"
        },
        headers: data.getHeaders()
    })
        .then(response => {
            console.log('uploading. . .')

            console.log('Salvo com sucesso')
        })
        .catch(error => {
            console.log(error)
        })

}

export default EnviaBackup