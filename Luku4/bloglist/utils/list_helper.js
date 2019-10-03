const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, blog) => {
        return sum + blog.likes
    }
    return blogs === 0
        ? 0
        : blogs.reduce(reducer, 0)
    
}

const favoriteBlog = (blogs) => {
    const mostLikes = Math.max.apply(Math, blogs.map(blog => blog.likes))
    return blogs.find(blog => blog.likes === mostLikes)
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}