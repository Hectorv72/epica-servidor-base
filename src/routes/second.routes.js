const routes = require('express').Router()


routes.get('/', (req, res) => {
  res.status(200).send('Hola con status 201')
})

routes.get('/adios-adios', (req, res) => {
  res.status(200).send('Adios con status 201')
})

module.exports = routes