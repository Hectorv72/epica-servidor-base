const constroller = {}

constroller.responderMensaje = (req, res) => {
  res.status(200).send('Hola desde un controller')
}

constroller.guardarDatos = (req, res) => {
  res.status(201).send('Los datos se guardaron correctamente')
}

module.exports = constroller