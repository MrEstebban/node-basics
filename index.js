const {createFile} = require ('./helpers/createFile');
const argv = require('./config/yargs')

createFile(argv.b, argv.l, argv.h)
    .then( 
        (fileName)=> console.log(`${fileName} has been created`)
    )
    .catch( (err) => console.log(err) );


