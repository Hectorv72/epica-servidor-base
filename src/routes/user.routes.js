const { getAllUsers, createUser, updateUser, getUserById, deleteUser, renderCreateUser, renderDeleteUser, renderUpdateUser } = require('../controllers/user.controllers')

const routes = require('express').Router()


routes.get('/', getAllUsers)
routes.get('/create', renderCreateUser)
routes.post('/create', createUser)
routes.get('/delete/:id', renderDeleteUser)
routes.get('/update/:id', renderUpdateUser)
routes.post('/update/:id', updateUser)
routes.get('/:id', getUserById)
routes.delete('/:id', deleteUser)

module.exports = routes