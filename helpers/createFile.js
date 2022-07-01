
const { writeFile } = require('fs');

const createFile = async (base, list = false, hasta = 10 ) => {

    

    try {
        let data = `---------------------\nTabla del ${base}\n---------------------\n\n`;

        for (let i = 1; i <= hasta; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        data += '---------------------';

        writeFile(`tabla-${base}.txt`, data, (err) => {
            if(list) {
                console.log(data);

            }
        });

        return `tabla-${base}.txt`;
    } catch (err) {
        return err;
    }
}

module.exports = {
    createFile
}