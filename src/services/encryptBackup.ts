import BuscaConfigs from "./buscaConfigs";
import { EnviaBackup } from "./enviaBackup";

import fs from 'fs'
import path from 'path'
const archiver = require('archiver')
archiver.registerFormat('zip-encrypted', require("archiver-zip-encrypted"))
const os = require('os');

//-----------------DESTINO,---SENHA,----ARQUIVO------------------\\
export async function encrypt({ content, password, file }: any) {

    try {
        const configs = BuscaConfigs()

        const url = `${configs.URL_TEMP}/${configs.NOME_EMPRESA}.sql`

        const archive = archiver.create('zip-encrypted', {
            zlib: { level: 8 },
            encryptionMethod: 'aes256',
            password,
        });

        //onde sera salvo o bkp
        archive.pipe(content)

        //add o arquivo no zip
        archive.file(file, { name: `${configs.NOME_EMPRESA}.sql` });

        await archive.finalize()

        await EnviaBackup()

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