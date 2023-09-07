const controller = {}

controller.getPersonas = (req, res) => {
  const personas = ['Hector', 'Milagros', 'Ivan', "Mateo"]
  const persona = 'Ivan'
  return res.render('base/prueba', { personas, persona })
}

controller.responderMensaje = (req, res) => {
  res.status(200).send('Hola desde un controller')
}

controller.guardarDatos = (req, res) => {
  res.status(201).send('Los datos se guardaron correctamente')
}

module.exports = controller