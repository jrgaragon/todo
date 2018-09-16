const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'crear':
        let tarea = todo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        for (let tarea of todo.listar()) {
            console.log('========================='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        let result = todo.update(argv.descripcion, argv.completado);
        console.log(result);
        break;
    case 'borrar':
        let borrarResult = todo.borrar(argv.descripcion);
        console.log(borrarResult);
        break;
    default:
        console.log('error');
}