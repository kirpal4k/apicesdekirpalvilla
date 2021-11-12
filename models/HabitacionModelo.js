//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const HabitacionModelo = Schema({

    nombrehabitacion: {
        type: String,
        required: true
    },

    fotohabitacion: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    precioadultonoche: {
        type: Number,
        required: true
    },

    precioninonoche: {
        type: Number,
        required: true
    },

})

module.exports = model('Habitaciones', HabitacionModelo)