const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Base has to be a number'
        }
        return true;
    })
    .option('l', {
        alias: 'list',
        type: 'boolean'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number'
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw 'Hasta has to be a number'
        }
        return true;
    })
    .argv;

module.exports = argv;