

const dummy = (blogs) => {
    return 1
}


/**
 * 4.4: apufunktioita ja yksikkötestejä, step2
 * @param {*} blogs taulukollisen blogeja
 * @returns  blogien yhteenlaskettujen tykkäysten eli likejen määrän.
 */
const totalLikes = (blogs) => {
    const blogsCopy = [...blogs]

    if (blogsCopy.length === 0) return 0
    const alkuarvo = 0
    const total = blogsCopy.reduce((previousValue, currentBlog) => {
        return currentBlog.likes + previousValue
    }, alkuarvo)
    return total
}


/**
4.5*: apufunktioita ja yksikkötestejä, step3 
Määrittele funktio favoriteBlog, joka saa parametrikseen
  taulukollisen blogeja. Funktio selvittää millä blogilla on eniten tykkäyksiä. Jos suosikkeja on
  monta, riittää että funktio palauttaa niistä jonkun.

Paluuarvo voi olla esim. seuraavassa muodossa:

{
title: "Canonical string reduction", author: "Edsger W. Dijkstra", likes: 12
}
Huomaa, että kun vertailet olioita, metodi toEqual on todennäköisesti se mitä haluat käyttää.
toBe-vertailu, joka sopii esim. lukujen ja merkkijonojen vertailuun, vaatisi olioiden vertailussa,
että oliot ovat samat, pelkkä sama sisältö ei riitä.

Tee myös tämän ja seuraavien kohtien testit kukin oman describe-lohkonsa sisälle.
 * @param {*} blogs list of blogs
 * @returns 
 */
const favouriteBlog = (blogs) => {
    let blogsCopy = [...blogs]
    if (blogsCopy.length === 0) return 'none'
    if (blogsCopy.length === 1) return blogsCopy[0]

    blogsCopy.sort((a, b) => -a.likes + b.likes)
    const maxLikes = blogsCopy[0].likes
    /*     console.log('maxlikes: ', maxLikes)
     */
    const maxesOnly = [...blogsCopy.filter((blog) => blog.likes === maxLikes)]
    /*     console.log('only maxes: ', maxesOnly)
     */
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
/*         console.log('onleMax: ', onlyMax);
 */        return onlyMax
    }

}

/**
tehtävä 4.6 
Funktio selvittää kirjoittajan, jolla on eniten blogeja. 
Tehtävän tekeminen onnistuu hyvin ilman mitään kirjastojakin, mutta tämä saattaa olla hyvä
paikka tutustua kokoelmien käsittelyä suuresti helpottavaan Lodash-kirjastoon. Määrittele funktio
mostBlogs, joka saa parametrikseen taulukollisen blogeja. Funktio selvittää kirjoittajan, jolla on
eniten blogeja. Funktion paluuarvo kertoo myös ennätysbloggaajan blogien määrän:
{
author: "Robert C. Martin", blogs: 3
}
Jos ennätysbloggaajia on monta, riittää että funktio palauttaa niistä jonkun.
 * @param {*} blogs list of blogs
 * @returns listan, jossa on kirjoittajan nimi ja hänen blogien määrä
 */
const mostBlogs = (blogs) => {
    let blogsCopy = [...blogs]
    if (blogsCopy.length === 0) return 'Lista on tyhjä.'
    if (blogsCopy.length === 1) return blogsCopy[0].author

    let authors = []
    blogsCopy.forEach(blog => {
        if (!authors.includes(blog.author)) authors.push(blog.author)
    })
    let authAndBlogs = []
    authors.forEach(auth => {
        let blogs = 0;
        blogsCopy.forEach(blog => { if (blog.author === auth) blogs++ })
        authAndBlogs.push({ author: auth, blogs: blogs })
    })
    const maxAuthor = authAndBlogs.sort((a, b) => b.blogs - a.blogs)[0]
    return maxAuthor
}

/**
 * tehtävä 4.7
 * apufunktioita ja yksikkötestejä, step5
Määrittele funktio mostLikes, joka saa parametrikseen taulukollisen blogeja. Funktio selvittää kirjoittajan,
 jonka blogeilla on eniten tykkäyksiä. Funktion paluuarvo kertoo myös suosikkibloggaajan likejen 
 yhteenlasketun määrän:

{
  author: "Edsger W. Dijkstra",
  likes: 17
}
Jos suosikkibloggaajia on monta, riittää että funktio palauttaa niistä jonkun.

 * @param {*} blogs list of blogs
 */
const mostLikes = (blogs) => {

    let blogsCopy = [...blogs]
    if (blogsCopy.length === 0) return 'Lista on tyhjä.'
    if (blogsCopy.length === 1) return { author: blogsCopy[0].author, likes: blogsCopy[0].likes }

    let authors = []
    blogsCopy.forEach(blog => {
        if (!authors.includes(blog.author)) authors.push(blog.author)
    })
    let authAndLikes = []
    authors.forEach(auth => {
        let likes = 0;
        blogsCopy.forEach(blog => { if (blog.author === auth) likes = likes + blog.likes })
        authAndLikes.push({ author: auth, likes: likes })
    })
    const maxAuthor = authAndLikes.sort((a, b) => b.likes - a.likes)[0]
    console.log('======', maxAuthor);
    return maxAuthor
}

module.exports = {
    dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes
}