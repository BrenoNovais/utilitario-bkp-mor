import { promises as fs_promise } from 'fs';
import fs from 'fs'
import { differenceInMonths } from 'date-fns'
import BuscaConfigs from '../services/buscaConfigs';

const segundos = 1000;
const minutos = segundos * 60;
const horas = minutos * 60;
const dia = horas * 24;

const configs = BuscaConfigs()

async function ListarArquivosDoDiretorio(diretorio: any, arquivo?: any) {

  const arquivos = [];

  let listaDeArquivos = await fs_promise.readdir(diretorio);

  for (let arquivo in listaDeArquivos) {

    let stat = await fs_promise.stat(diretorio + '/' + listaDeArquivos[arquivo]);

    if (stat.isDirectory()) {
      await ListarArquivosDoDiretorio(diretorio + '/' + listaDeArquivos[arquivo], arquivos);
    } else {
      arquivos.push(diretorio + '/' + listaDeArquivos[arquivo]);
    }
  }

  return arquivos;

}

async function RemoveArquivoEmMeses(mes?: any) {

  let arquivos = await ListarArquivosDoDiretorio(configs.DIRETORIO_BKP); // coloque o caminho do seu diretorio

  for (let arquivo in arquivos) {

    //Pega a data de criação do arquivo
    const { mtime } = fs.statSync(arquivos[arquivo]);

    //Retorna valor inteiro quando a diferença entre os meses
    const diferenca_mes = differenceInMonths(new Date(), new Date(mtime))

    //Se a diferença for maior que 1 mes, remove o arquivo
    if (diferenca_mes > Number(mes)) {
      fs.unlinkSync(arquivos[arquivo])
      console.log('Diretorio limpo com sucesso !')
    }
  }
  return arquivos;
}

//Intervalor em dias para verificar os aquivos
setInterval(() => {
  //Passa como parametro numero em meses
  RemoveArquivoEmMeses(configs.QTDE_MES_BKP);
  
}, dia * 1);

export {ListarArquivosDoDiretorio, RemoveArquivoEmMeses}