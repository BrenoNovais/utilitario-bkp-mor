import CreateBackup from "../services/createBackup"
import configsType from "../../@types/configsType"

async function Monitorar(configs: configsType) {

 try {
  
  if (configs.realiza_backup === false) {
    
    await CreateBackup(configs)

  } else {
    console.log('backup não necessario!')
    return 
  }

 } catch (error) {
  console.log(error)
 }
}

export default Monitorar