const descripcion = {
    demand: true,
    alias: 'd',
}


const argv = require('yargs')
    .command('actualizar', 'actualizar tareas', {
        descripcion,
        completado: {
            demand: true,
            default: true,
            alias: 'c'
        }
    })
    .command('crear', 'crear tarea', {
        descripcion
    })
    .command('borrar', 'borrar tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('listar', 'listar tarea', {})
    .help()
    .argv;

module.exports = {
    argv
};