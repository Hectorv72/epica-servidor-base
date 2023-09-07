const User = require('../models').User
const controller = {}

controller.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    // return res.status(200).json(users)
    return res.render('users', { users })
  } catch (error) {
    console.log(error)
    return res.render('common/error', { error: 'Error al obtener los usuarios', status: 500 })
  }
}

controller.getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)

    if (!user) {
      return res.render('common/error', { error: 'Usuario no encontrado.', status: 404 })
    }

    return res.render('users/user', { user })
  } catch (error) {
    console.log(error)
    return res.render('common/error', { error: 'Error al obtener los usuarios', status: 500 })
  }
}

controller.renderCreateUser = (req, res) => {
  return res.render('users/create')
}

controller.createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    await User.create({
      firstName, lastName, email
    })
    return res.redirect('/user')

  } catch (error) {
    console.log(error)
    return res.render('common/error', { error: 'Error al crear usuario', status: 500 })
  }
}

controller.renderUpdateUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)

    if (!user) {
      return res.render('common/error', { error: 'El usuario no existe', status: 404 })
    }

    return res.render('users/update', { user })
  } catch (error) {
    console.log(error)
    return res.render('common/error', { error: 'Error en el sistema', status: 500 })
  }
}

controller.updateUser = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.findByPk(id)

    if (!user) {
      return res.render('common/error', { error: 'El usuario no existe', status: 404 })
    }

    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    await user.save()
    return res.redirect('/user')
  } catch (error) {
    console.log(error)
    return res.render('common/error', { error: 'Error en el sistema', status: 500 })
  }
}

controller.renderDeleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)

    if (!user) {
      return res.render('common/error', { error: 'Usuario no encontrado.', status: 404 })
    }

    await user.destroy()
    return res.redirect('/user')
  } catch (error) {
    console.log(error)
    return res.render('common/error', { error: 'Error eliminar usuario', status: 500 })
  }
}

controller.deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' })
    }

    await user.destroy()
    return res.status(200).json({ message: 'Usuario eliminado exitosamente' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al obtener los usuarios' })
  }
}

module.exports = controller