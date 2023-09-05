const express = require('express')
const mainRoutes = require('./src/routes/main.routes.js')
const secondRoutes = require('./src/routes/second.routes.js')

const server = express()
const port = 3000


// server.use((req, res, next) => {
//   console.log('--informacion de la solicitud req--')
//   console.log('URL:', req.url)
//   console.log('METHOD HTTP:', req.method)
//   console.log('HEADERS:', req.headers)

//   console.log('--- infroamcion de la respuesta ---')

//   // sobrescribir el metodo send para mostrar contenido antes de enviar la respuesta
//   const originalSend = res.send;
//   res.send = (data) => {
//     console.log('Contenido de la respuesta:', data)
//     originalSend.apply(res)
//   }

//   console.log('--Llama a la funcion next--')
//   next()
// })

server.use('/main', mainRoutes)
server.use('/second', secondRoutes)
server.get('*', (req, res) => {
  res.status(404).send('404 - La ruta no existe')
})

server.listen(port, () => {
  console.log('Servidor corriendo en el puerto', 3000)
})