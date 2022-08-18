import axios from "axios"
import CreateBackup from "../services/createBackup"
import BuscaConfigs from "../services/buscaConfigs"

const configs = BuscaConfigs()

const auth = {
  username: configs.USUARIO,
  password: configs.SENHA
}

async function Monitorar() {

  console.log('Cant stop me now!');

  await axios.get('https://teste-server-bn.herokuapp.com/horario-backup')
    .then(response => {

      if (response.data.backup === true) {
        CreateBackup()
      }
      else {
        console.log("Backup não necessário")
      }
    })
    .catch(error => {
      return console.log(error)
    })
}

export default Monitorar