const middlewares = {}

middlewares.mostrarMetodo = (req, res, next) => {
  console.log('METHOD:', req.method)
  console.log('PARAMS:', req.params)
  next()
}

module.exports = middlewares