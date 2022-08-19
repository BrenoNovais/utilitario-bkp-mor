import fs from 'fs'
import configsType from "../../@types/configsType";
import EnviaBackup from './enviaBackup';
import EnviaBackupTeste from "./enviaBackupteste";
const archiver = require('archiver')
archiver.registerFormat('zip-encrypted', require("archiver-zip-encrypted"))
const os = require('os');

//-----------------DESTINO,---SENHA,----ARQUIVO------------------\\
export async function encrypt(configs : configsType) {

    try {
        
        let newdate = new Date().toLocaleDateString('pt-br', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })

        let date = newdate.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z._])/g, '')

        //ONDE VAI SER SALVO O BKP
        const content = fs.createWriteStream(`${configs.diretorio_bkp}/${configs.nome}${date}.zip`)
        // ARQUIVO DENTRO DO ZIP
        const file = `${configs.url_temp}/${configs.nome}.sql`
        //SENHA PARA ACESSAR O .ZIP
        const password = "numsey1008"  

        const url = `${configs.url_temp}/${configs.nome}.sql`

        const archive = archiver.create('zip-encrypted', {
            zlib: { level: 8 },
            encryptionMethod: 'aes256',
            password
        });

        //onde sera salvo o bkp
        archive.pipe(content)

        //add o arquivo no zip
        archive.file(file, { name: `${configs.nome}.sql` });

        await archive.finalize()

        //await EnviaBackup(date)
        await EnviaBackupTeste(date)

        fs.unlink(url, ((err: any) => {
            if (err) console.log(err);
            else {
                console.log('Dump excluido. . .');
            }
        }));

        return
    } catch (error) {
        console.log(error)
        throw Error('Problema ao enviar bkp')
    }
}

export default encrypt