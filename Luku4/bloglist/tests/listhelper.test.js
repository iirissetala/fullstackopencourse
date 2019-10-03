const listHelper = require('../utils/list_helper')

test.skip('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('totalLikes', () => {
    test.skip('totalLikes returns sum of likes', () => {
        const blogs = [
            {
                "title": "ekablogi",
                "author": "aamu",
                "url": "osoite1",
                "likes": 5
            },
            {
                "title": "tokablogi",
                "author": "aatu",
                "url": "osoite2",
                "likes": 10
            }
        ]
        
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(15)
    })
    
    test.skip('totalLikes of empty list returns zero', () => {
        const blogs = []

        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(0)        
    })

    test.skip('totalLikes of one blog is likes of the only blog', () => {
        const blogs = [{"title": "testi", "author": "joku", "url": "osoite", "likes": 100}]

        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(100) 
    })

})

test.skip('favoriteBlog returns one with most likes', () => {
    const blogs = [
        {
            "title": "ekablogi",
            "author": "aamu",
            "url": "osoite1",
            "likes": 5
        },
        {
            "title": "tokablogi",
            "author": "aatu",
            "url": "osoite2",
            "likes": 10
        }
    ]

    const result = listHelper.favoriteBlog(blogs)
    expect(result.title).toBe("tokablogi")
})
