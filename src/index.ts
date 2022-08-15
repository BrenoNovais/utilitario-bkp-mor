import fs from "fs"
import path from "path"
import express from 'express'
import Routes from './Routes'
import CreateBackup from './services/createBackup'
import { ListarArquivosDoDiretorio, RemoveArquivoEmMeses } from "./ExcluirArquivos"
import Monitorar from "./MonitoraArquivos"

const app = express()

app.use(express.json())

console.log('Iniciando. . .')

//BUSCA ARQUIVO CONFIG.JSON
let busca_configs = fs.readFileSync(path.resolve((path.resolve() + '/configs.json')))

//LE O .JSON E TRANSFORMA EM STRING
const info_configs = JSON.parse(String(busca_configs))

if (info_configs.ID_EMPRESA || info_configs.QTDE_MES_BKP ||
    info_configs.DIRETORIO_BKP || info_configs.USUARIO ||
    info_configs.SENHA) {

    console.log('Variaveis de ambientes não configuradas corretamente !!!')

} else {

    RemoveArquivoEmMeses()
    
    ListarArquivosDoDiretorio(info_configs.DIRETORIO_BKP)

    Monitorar()

    console.log('Monitoramento de BKP MOR inicializado ! ')
}

//CreateBackup()

app.use(Routes)

app.listen(3333)