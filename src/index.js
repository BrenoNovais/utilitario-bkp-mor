import 'dotenv/config'
import Excluir from './ExcluirArquivos/index.js'
import Monitorar from './MonitoraArquivos/index.js'


if (!process.env.ID_EMPRESA || !process.env.QTDE_MES_BKP ||
  !process.env.DIRETORIO_BKP || !process.env.USUARIO ||
  !SENHA) {

  console.log('Variaveis de ambientes não configuradas corretamente !!!')

} else {
  Excluir()
  Monitorar()

  console.log('Monitoramento de BKP MOR...')
}


