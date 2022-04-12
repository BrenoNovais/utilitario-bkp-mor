import 'dotenv/config'
import Excluir from './ExcluirArquivos/index.js'
import Monitorar from './MonitoraArquivos/index.js'

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



