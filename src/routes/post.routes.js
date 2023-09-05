const { getAllPosts, createPost } = require('../controllers/post.controllers')

const routes = require('express').Router()


routes.get('/', getAllPosts)
routes.post('/', createPost)

module.exports = routes