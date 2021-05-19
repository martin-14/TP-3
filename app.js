const process = require('process');

const {listar, guardarTarea, leerPorEstado} = require('./funcionesDeTareas')

const accion = process.argv[2];

switch (accion){               
    case 'listar':           
        listar()
        break;
    case 'crear':
        let tarea = {
            titulo: process.argv[3],
            estado: 'pendiente',
        }
        guardarTarea(tarea)
        break;
    case 'filtrar':
        leerPorEstado(process.argv[3]);
        break;
    case undefined:
        console.log('Atencion - Tienes que pasar una acción');
        break;
    default:
        console.log('No entiendo qué quieres hacer');
        break;
}