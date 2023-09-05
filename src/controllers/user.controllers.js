const User = require('../models').User
const controller = {}

controller.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al obtener los usuarios' })
  }
}

controller.getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' })
    }
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al obtener los usuarios' })
  }
}

controller.createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.create({
      firstName, lastName, email
    })
    return res.status(201).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al obtener los usuarios' })
  }
}

controller.updateUser = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.findByPk(id)

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' })
    }

    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    await user.save()
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al obtener los usuarios' })
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