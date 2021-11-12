//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const ReservaModelo = Schema({

    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    telefono: {
        type: String,
        required: true
    },

    fechainicioreserva: {
        type: Date,
        required: true
    },

    fechafinalreserva: {
        type: Date,
        required: true
    },

    numeropersonas: {
        type: Number,
        required: true
    },

})

module.exports = model('Reservas', ReservaModelo)