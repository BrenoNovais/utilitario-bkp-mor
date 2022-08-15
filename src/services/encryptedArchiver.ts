var fs = require('fs');
const archiver = require('archiver')
archiver.registerFormat('zip-encrypted', require("archiver-zip-encrypted"))
const os = require('os');


//-----------------DESTINO,---SENHA,----ARQUIVO------------------\\
export function encrypt({ content,  password,  file}: any) {

    const url_temp = os.tmpdir() + '/temp.sql'

    const archive = archiver.create('zip-encrypted', {
        zlib: { level: 8 },
        encryptionMethod: 'aes256',
        password,
    });

    archive.pipe(content)

    archive.file(file)

    archive.finalize()

    console.log('arquivo encriptado. . .')

    fs.unlink(url_temp, ((err: any) => {
        if (err) console.log(err);
        else {
          console.log('Dump excluido. . .');
        }
    }));

    return 
}

export default encrypt