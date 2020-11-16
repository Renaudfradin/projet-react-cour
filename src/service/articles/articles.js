export function getarticles() {
    return fetch('http://localhost:3003/articles')
    .then(reponse => reponse.json());
}

export function getarticle(id) {
    return fetch('http://localhost:3003/articles/' + id)
    .then(reponse => reponse.json());
}

export function createarticle(article) {
    return fetch('http://localhost:3003/articles/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            ...article,
            category: Number(article.category),
            published: Boolean(article.published)})
    })
    .then(reponse => reponse.json());
}

export function updatearticle(article) {
    return fetch('http://localhost:3003/articles/'+ article.id,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            ...article,
            category: Number(article.category),
            published: Boolean(article.published)})
    })
    .then(reponse => reponse.json());
}

export function removearticle(article) {
    return fetch('http://localhost:3003/articles/'+ article.id,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(article)
    })
    .then(reponse => reponse.json());
}