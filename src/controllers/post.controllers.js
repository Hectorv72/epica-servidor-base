const Post = require('../models').Post
const User = require('../models').User
const controller = {}

controller.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          as: 'author'
        }
      ]
    })
    res.status(200).json(posts)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al buscar Posts' })
  }
}

controller.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.status(201).json(post)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error al crear Post' })
  }
}

module.exports = controller