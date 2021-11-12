//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PDOER OPERAR EN BD
const HabitacionModelo = require('../models/HabitacionModelo.js')


//1. Funcion para insertar datos
async function insertarHabitacion(datos) {

    let habitacionNueva = new HabitacionModelo(datos)
    return await habitacionNueva.save()

}

//2. Funcion para buscar 1 Jugador
async function leerHabitacion(id) {

    let habitacionBuscada = await HabitacionModelo.findById(id)
    return habitacionBuscada

}

//3. Funcion para buscar TODOS los Jugadores
async function leerHabitaciones() {

    let habitacionesBuscadas = await HabitacionModelo.find()
    return habitacionesBuscadas

}

//4. Funcion para eliminar un jugador
async function borrarHabitacion(id) {

    return await HabitacionModelo.findByIdAndDelete(id)

}

//5. Funcion para editar un jugador
async function modificarHabitacion(id, datos) {

    return await HabitacionModelo.findByIdAndUpdate(id, datos)

}

module.exports = {

    insertarHabitacion,
    leerHabitacion,
    leerHabitaciones,
    borrarHabitacion,
    modificarHabitacion

}