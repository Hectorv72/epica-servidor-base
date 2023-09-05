const express = require('express')
const { sequelize } = require('./src/models');
const mainRoutes = require('./src/routes/main.routes.js')
const secondRoutes = require('./src/routes/second.routes.js')
const userRoutes = require('./src/routes/user.routes')
const postRoutes = require('./src/routes/post.routes')

const server = express()
const port = 3000

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/main', mainRoutes)
server.use('/second', secondRoutes)

server.use('/user', userRoutes)
server.use('/post', postRoutes)

server.get('*', (req, res) => {
  res.status(404).send('404 - La ruta no existe')
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

server.listen(port, async () => {
  console.log('Servidor corriendo en el puerto', 3000)

})