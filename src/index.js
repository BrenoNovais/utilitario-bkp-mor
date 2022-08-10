import Excluir from './ExcluirArquivos/index.js'
import Monitorar from './MonitoraArquivos/index.js'
import express from 'express'
import Routes from './Routes/index.js'
import * as env from './config.json' assert {type: 'json'};

const app = express()

app.use(express.json())

const data = JSON.parse(JSON.stringify(env))

console.log(data.default.ID_EMPRESA)

app.use(Routes)

console.log('Iniciando...')

if (!data.ID_EMPRESA || !data.QTDE_MES_BKP ||
  !data.DIRETORIO_BKP || !data.USUARIO ||
  !data.SENHA) {

  console.log('Variaveis de ambientes não configuradas corretamente !!!')

} else {
  Excluir()
  Monitorar()

  console.log('Monitoramento de BKP MOR inicializado ! ')
}

app.listen(3333)