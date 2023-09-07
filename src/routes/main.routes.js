const routes = require('express').Router()
const { responderMensaje, guardarDatos, getPersonas } = require('../controllers/main.controllers.js')
const middlewares = require('../middlewares/main.middlewares.js')

routes.get('/personas', getPersonas)

routes.get('/:nombre', middlewares.mostrarMetodo, responderMensaje)

routes.post('/', guardarDatos)

routes.put('/', (req, res) => {
  res.status(200).send('El registro se actualizo correctamente')
})

routes.delete('/', (req, res) => {
  res.status(200).send('El registro se eliminó correctamente')
})

module.exports = routes