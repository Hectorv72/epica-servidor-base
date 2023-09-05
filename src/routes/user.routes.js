const { getAllUsers, createUser, updateUser, getUserById, deleteUser } = require('../controllers/user.controllers')

const routes = require('express').Router()


routes.get('/', getAllUsers)
routes.get('/:id', getUserById)
routes.post('/', createUser)
routes.put('/:id', updateUser)
routes.delete('/:id', deleteUser)

module.exports = routes