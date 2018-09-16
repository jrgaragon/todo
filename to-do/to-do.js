const fs = require('fs');

let todo = [];

const crear = (desc) => {
    load()
    let porHacer = {
        descripcion: desc,
        completado: false
    }

    todo.push(porHacer);
    save();

    return porHacer;
}

const listar = () => {
    load();
    return todo;
};

const load = () => {
    try {
        todo = require('../db/data.json');
    } catch (error) {
        todo = [];
    }
};

const save = () => {
    let data = JSON.stringify(todo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw err;
        }
    });
};

const update = (descripcion, completado = true) => {
    load();

    let index = todo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        todo[index].completado = completado;
        save();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    load();
    let temptodo = todo.filter(tarea => tarea.descripcion !== descripcion);

    if (temptodo.length === todo.length) {
        return false;
    } else {
        todo = temptodo;
        save();
        return true;
    }
}

module.exports = {
    crear,
    listar,
    update,
    borrar
}