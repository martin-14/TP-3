const fs = require('fs');

const leerJSON = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

const moduloTareas = {
    listar : function(tareas = leerJSON){
        return tareas.forEach((tarea, i) => {              //modifico la funcionalidad de listar, y usamos metodo forEach
            console.log('Tarea:' + ' ' + (i+1) + ' - ' + tarea.titulo + ' - ' + tarea.estado);
        });
    },
    escribirJSON : function(tareas) {                                   //creo la funcion escribirJSON con un array como parametro
        fs.writeFileSync('./tareas.json',JSON.stringify(tareas),'utf-8')
    },
    guardarTarea: function(tarea){                         //funcion para guardar la tarea en tareas.json
        let tareas = leerJSON;
        tareas.push(tarea);
        moduloTareas.escribirJSON();
    },
    leerPorEstado: function(estado){                           //funcion para filtar el estado de la tarea y asi mostrarlo en consola
        let tareas = leerJSON;
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado)
        return moduloTareas.listar(tareasFiltradas)
    }

} 
module.exports = moduloTareas