import 'dotenv/config'
import Excluir from './ExcluirArquivos/index.js'
import Monitorar from './MonitoraArquivos/index.js'
import express from 'express'
import Routes from './Routes/index.js'

const app = express()

app.use(express.json())

app.use(Routes)


console.log('Iniciando...')

if (!process.env.ID_EMPRESA || !process.env.QTDE_MES_BKP ||
  !process.env.DIRETORIO_BKP || !process.env.USUARIO ||
  !process.env.SENHA) {

  console.log('Variaveis de ambientes não configuradas corretamente !!!')

} else {
  Excluir()
  Monitorar()

  console.log('Monitoramento de BKP MOR inicializado ! ')
}


app.listen(3333)