import axios from "axios";
import fs from 'fs'
import BuscaConfigs from "./buscaConfigs";
import FormData from "form-data";

export async function EnviaBackup() {

    const configs = BuscaConfigs()

    const data = new FormData()

    data.append('usuario', configs.ID_EMPRESA)
    data.append('anexo', fs.createReadStream(`C:/teste/Screenshot_2.jpg`))

    axios({
        method: "post",
        url: "https://bkps-mor.fly.dev/api/v1/bkps",
        data: data,
        auth: {
            username: 'morinfo',
            password: '@numsey1008'
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

}