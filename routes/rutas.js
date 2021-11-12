const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const { registrarReserva } = require('../controllers/controladorReservas.js')
const { buscarReserva } = require('../controllers/controladorReservas.js')
const { buscarReservas } = require('../controllers/controladorReservas.js')
const { editarReserva } = require('../controllers/controladorReservas.js')
const { eliminarReserva } = require('../controllers/controladorReservas.js')

const { registrarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { buscarHabitacion} = require('../controllers/controladorHabitaciones.js')
const { buscarHabitaciones } = require('../controllers/controladorHabitaciones.js')
const { editarHabitacion } = require('../controllers/controladorHabitaciones.js')
const { eliminarHabitacion} = require('../controllers/controladorHabitaciones.js')



rutas.get('/avanzada/v1/reservas', buscarReserva)
rutas.get('/avanzada/v1/reservas/:id', buscarReservas)
rutas.post('/avanzada/v1/reservas', registrarReserva)
rutas.put('/avanzada/v1/reservas/:id', editarReserva)
rutas.delete('/avanzada/v1/reservas/:id', eliminarReserva)

rutas.get('/avanzada/v1/habitaciones', buscarHabitacion)
rutas.get('/avanzada/v1/habitaciones/:id', buscarHabitaciones)
rutas.post('/avanzada/v1/habitaciones', registrarHabitacion)
rutas.put('/avanzada/v1/habitaciones/:id', editarHabitacion)
rutas.delete('/avanzada/v1/habitaciones/:id', eliminarHabitacion)

module.exports = rutas