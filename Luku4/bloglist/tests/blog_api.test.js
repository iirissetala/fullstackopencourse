const helper = require('./test_helper')
const Blog = require('../models/blog')
const app = require('../app')
const mongoose = require('mongoose')
const supertest = require('supertest')
const api = supertest(app)

beforeEach(async () => {
    await Blog.remove({})

    for (let blog of helper.initialBlogs) {
        let blogObject = new Blog(blog)
        await blogObject.save()
    }
})

test('blogs are returned as json and all blogs are found', async () => {
    const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(response.body.length).toBe(helper.initialBlogs.length)
})

test('returned blogs have a field called id', async () => {
    const response = await api.get('/api/blogs')
    const ids = response.body.map(blog => blog.id)
    expect(ids).toBeDefined()
})

test('new blogs can be added to database', async () => {
    const newBlog = {
        author: "kirjoittaja",
        title: "bloginimi",
        url: "blogisivu",
        likes: 100
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const blogsAfterPost = await helper.blogsInDatabase()
    const blogNames = blogsAfterPost.map(n => n.title)
    expect(blogsAfterPost.length).toBe(helper.initialBlogs.length + 1)
    expect(blogNames).toContain('bloginimi')       
})

test('a blog cannot be added without title and url', async() => {
    const newBlog = { author: "joku" }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)

})

test('likes are set to zero if no value is given', async () => {
    const newBlog = {
        author: "kirjoittaja",
        title: "nimi",
        url: "osoite",
    }
    await api
        .post('/api/blogs')
        .send(newBlog)

    const blogsAfterPost = await helper.blogsInDatabase()
    const addedBlog = blogsAfterPost.find(b => b.title === "nimi")
    expect(addedBlog.likes).toBe(0)
})

test('existing blog can be deleted', async () => {
    const blogsBeforeDelete = await helper.blogsInDatabase()
    const blogToDelete = blogsBeforeDelete[0]

    await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)

    const blogsAfterDelete = await helper.blogsInDatabase()
    const titles = blogsAfterDelete.map(b => b.title)
    expect(titles).not.toContain(blogToDelete.title)
    expect(blogsAfterDelete.length).toBe(blogsBeforeDelete.length -1)
})

afterAll(() => { 
    mongoose.connection.close() 
})