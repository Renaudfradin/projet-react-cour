export function getcategories() {
    return fetch('http://localhost:3003/categories')
    .then(reponse => reponse.json());
}

export function getcategorie(id) {
    return fetch('http://localhost:3003/categories/' + id)
    .then(reponse => reponse.json());
}