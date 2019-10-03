const Blog = require('../models/blog')

const initialBlogs = [
    {
        'title': 'Elämä on laiffii',
        'author': 'Matti Nykänen',
        'url': 'elamaon.com',
        'likes': 20000,
    },
    {
        'title': 'Elämä on ihanaa',
        'author': 'Aira Samulin',
        'url': 'elama.fi',
        'likes': 1000,
    }
]

const blogsInDatabase = async () => {
    const blogs = await Blog.find({})
    return blogs.map(b => b.toJSON())
}

module.exports = { initialBlogs, blogsInDatabase }