import express from 'express'
import Routes from './Routes'
import Monitorar from "./MonitoraArquivos"
import BuscaConfigs from "./services/buscaConfigs"

const segundos = 1000;
const minutos = segundos * 60;
const horas = minutos * 60;
const dia = horas * 24;

const app = express()

app.use(express.json())

console.log('Iniciando. . .')

async function start() {

    setInterval(async () => {

        const configs = await BuscaConfigs()

        Monitorar(configs)

    }, segundos * 30)

    const configs = await BuscaConfigs()
}

start()

app.use(Routes)

app.listen(3000)