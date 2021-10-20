const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const blogsCopy = [...blogs]

    if (blogsCopy.length === 0) return 0
    const alkuarvo = 0
    const total = blogsCopy.reduce((previousValue, currentBlog) => {
        return currentBlog.likes + previousValue
    }, alkuarvo)
    return total
}

const favouriteBlog = (blogs) => {
    let blogsCopy = [...blogs]
    if (blogsCopy.length === 0) return 'none'
    if (blogsCopy.length === 1) return blogsCopy[0]

    blogsCopy.sort((a, b) => -a.likes + b.likes)
    const maxLikes = blogsCopy[0].likes
    console.log('maxlikes: ', maxLikes)

    const maxesOnly = [...blogsCopy.filter((blog) => blog.likes === maxLikes)]
    console.log('only maxes: ', maxesOnly)

    if (maxesOnly.length > 1) {
        return maxesOnly.map(blog => {
            const simpleBlog = {
                "title": blog.title,
                "author": blog.author,
                "likes": blog.likes
            }
            return simpleBlog
        })
    }
    else {
        const onlyMax = {
            "title": blogsCopy[0].title,
            "author": blogsCopy[0].author,
            "likes": blogsCopy[0].likes
        }
        console.log('onleMax: ', onlyMax);
        return onlyMax
    }

}

/**
 * Määrittele funktio mostBlogs, joka saa parametrikseen taulukollisen blogeja. 
 * Funktio selvittää kirjoittajan, jolla on eniten blogeja. 
 * 
 */
const mostBlogs = (blogs) => {
    //TODO tehtävät 4.6-4.7 tekemättä vielä
}

module.exports = {
    dummy, totalLikes, favouriteBlog
}