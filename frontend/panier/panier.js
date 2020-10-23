/*-----PANIER----*/

/*Recuperation des données du localStorage*/
let panier = localStorage.getItem("panier")
let panierParsed = JSON.parse(panier)

/*Affichage des produits dans le panier*/
for (const produit of panierParsed) {
    getDataForBasketDisplay(produit.id, produit.quantite, produit.color)
}

/* Recuperation des données de l'API*/
function getDataForBasketDisplay(idProduct, quantiteBear, couleur) {
    axios.get('http://localhost:3000/api/teddies/' + idProduct)
        .then(response => {
            let idBear = response.data._id
            let nameBear = response.data.name
            let imgBear = response.data.imageUrl
            let priceBear = response.data.price
            let descritptionBear = response.data.description
            let colors = response.data.color

            document.querySelector('.article-container').innerHTML += displayCommande(idProduct,imgBear,nameBear,couleur,quantiteBear,priceBear)
        })
}

/*Affichage de chaque produit*/
function displayCommande(id,img, name,color, quantite, price) {
    return '<div class="article container-fluid">' +
        '<img class="product-image" src="' + img + '">' +
        '<h3 class="product-name">"' + name + '"</h3>' +
        '<h5 class="product-color">"' + color + '"</h5>'+
        '<h4 class="product-price">"' + quantite + '"</h4>' +
        '<h5 class="product-quantity">"' + price + '"</h5>'+
        `<button class="btn btn-danger" data-id="${id+color}">Supprimer</button>`+
        '</div>'
}

let deleteButton = document.querySelector('.btn-danger')

deleteButton.addEventListener('click', removeFromBasket)

function removeFromBasket(panier){

}
