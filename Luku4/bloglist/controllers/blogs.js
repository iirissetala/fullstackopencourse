const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const helper = require('../utils/middleware')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.get('/:id', async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  } catch(exception) {
    console.log(error, error.message)
    next(exception)
  }
})
  
blogsRouter.post('/', async (request, response, next) => {
    const body = request.body
    const token = helper.getTokenFrom(request)
    console.log(token)

    try {
      const decodedToken = jwt.verify(token, process.env.SECRET)
      if (!token || !decodedToken.id) {
        console.log(error, error.message)
        return response.status(401).json({ error: 'token missing or invalid'})
      }
      
      const user = await User.findById(decodedToken.id)
      const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes === undefined ? 0 : body.likes,
        user: user._id
      })

      const savedBlog = await blog.save()
      user.blogs = user.blogs.concat(savedBlog._id)
      await user.save()
      response.json(savedBlog.toJSON())

    } catch (exception) {
      next(exception)
    }
  })

  blogsRouter.delete('/:id', async (request, response, next) => {
    const blogToDelete = await Blog.findById(request.params.id)
    const token = helper.getTokenFrom(request)

    try {
      const decodedToken = jwt.verify(token, process.env.SECRET)
      if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid'})
      }
      
      const user = await User.findById(decodedToken.id)
      if (blogToDelete.user.toString() === user.id.toString()) {
        await Blog.remove(blogToDelete)
        user.blogs.remove(blogToDelete)
        await user.save()
        response.status(204).end()
      } else {
        response.status(401).json({ error: 'token missing or invalid'})
      }
          
    } catch (exception) {
      console.log(exception)
      next(exception)
    }
  })

blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body
  
  const blog = {
    author: body.author,
    title: body.title,
    url: body.url,
    likes: body.likes,
  }

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
    response.json(updatedBlog.toJSON())
  } catch(exception) {
    next(exception)
  }
})

module.exports = blogsRouter