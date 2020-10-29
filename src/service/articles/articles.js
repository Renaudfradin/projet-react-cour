export function getarticles() {
    return fetch('http://localhost:3001/articles')
    .then(reponse => reponse.json());
}

export function getarticle(id) {
    return fetch('http://localhost:3001/articles/' + id)
    .then(reponse => reponse.json());
}