//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PDOER OPERAR EN BD
const ReservaModelo = require('../models/ReservaModelo.js')


//1. Funcion para insertar datos
async function insertarReserva(datos) {

    let reservaNueva = new ReservaModelo(datos)
    return await reservaNueva.save()

}

//2. Funcion para buscar 1 Jugador
async function leerReserva(id) {

    let reservaBuscada = await ReservaModelo.findById(id)
    return reservaBuscada

}

//3. Funcion para buscar TODOS los Jugadores
async function leerReservas() {

    let reservasBuscadas = await ReservaModelo.find()
    return reservasBuscadas

}

//4. Funcion para eliminar un jugador
async function borrarReserva(id) {

    return await ReservaModelo.findByIdAndDelete(id)

}

//5. Funcion para editar un jugador
async function modificarReserva(id, datos) {

    return await ReservaModelo.findByIdAndUpdate(id, datos)

}

module.exports = {

    insertarReserva,
    leerReserva,
    leerReservas,
    borrarReserva,
    modificarReserva

}