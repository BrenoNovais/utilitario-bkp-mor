const execa = require('execa')

export async function DumpDatabase(user: string, password: string, database: string, filename: string) {

    try {

        await execa(`mysqldump -u${user} -p${password} --databases ${database} --result-file=${filename}`);

        return console.log('dump criado. . .')
    }
    catch (error) {
        console.log(error)
    }
}

export default DumpDatabase