/*Implentation des couleurs de la base de donné dans le Select de la Page*/
export function createOptions(array) {
    for (const colors of array) {
        document.querySelector('#option').innerHTML += '<option value="' + colors + '">' + colors + "</option>"
    }
}


/*Création local Storage*/
export function dataPanier() {
    let save = JSON.parse(localStorage.getItem("panier"))
    if (localStorage.getItem("panier") === null) {
        return []
    }
    for (const session of save) {
        return save
    }
}


export function displayCommande(name, color, quantite, price, sousTotal) {

    return '<tr class="product-display">'
        + '<th scope="row">1</th>' +
        '<td>"' + name + '"</td>' +
        '<td>"' + color + '"</td>' +
        '<td>"' + quantite + '"</td>' +
        '<td>"' + price + '"</td>' +
        '<td>"' + sousTotal + '"</td>' +
        '</tr>'
}

/*Affichage de chaque produit*/
export function displayCommandeInBasket(id, img, name, color, quantite, price) {
    return '<div class="article container-fluid">' +
        '<img class="product-image" src="' + img + '">' +
        '<h3 class="product-name">"' + name + '"</h3>' +
        '<h5 class="product-color">"' + color + '"</h5>' +
        '<h4 class="product-price">"' + quantite + '"</h4>' +
        `<h5 class="product-quantity">"${price}"</h5>` +
        `<button class="btn btn-danger" data-id="${id + color}">Supprimer</button>` +
        '</div>'

}

/*Affichage dans le HTML de tout les produit */
export function createCard(id, name, description, price, img) {
    return '<div class="col-md-4 mb-5">' +
        '<div class="card h-100">' +
        '<img class="card-img-top" src="' + img + '" alt="">' +
        '<div class="card-body">' +
        '<h4 class="card-title">' + name + '</h4>'
        +
        '<p class="card-text">' + description + '</p>'
        +
        '<div class="card-footer">' +
        '<a href="../produit/index.html?id=' + id + '" class="btn btn-warning">Achetez moi!</a>' +
        '<p>' + price + '</p>' +
        '</div>'
        +
        '</div>' +
        '</div>' +
        '</div>'
}

/*Recuperation des information*/
export function createDisplay(array) {
    for (let product of array) {
        let id = product._id
        let name = product.name
        let img = product.imageUrl
        let price = product.price
        let descritption = product.description
        document.getElementById('card').innerHTML += createCard(id, name, descritption, price, img)

    }
}