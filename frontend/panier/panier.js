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

            document.querySelector('.article-container').innerHTML += displayCommande(idProduct, imgBear, nameBear, couleur, quantiteBear, priceBear)
            let deleteButton = document.querySelector('.btn')

            deleteButton.addEventListener('click', function () {
                console.log('coucou')
                removeFromBasket(this.dataset.id, panierParsed)
            })

        })
}

/*Affichage de chaque produit*/
function displayCommande(id, img, name, color, quantite, price) {
    return '<div class="article container-fluid">' +
        '<img class="product-image" src="' + img + '">' +
        '<h3 class="product-name">"' + name + '"</h3>' +
        '<h5 class="product-color">"' + color + '"</h5>' +
        '<h4 class="product-price">"' + quantite + '"</h4>' +
        '<h5 class="product-quantity">"' + price + '"</h5>' +
        `<button class="btn btn-danger" data-id="${id + string_to_slug(color)}">Supprimer</button>` +
        '</div>'



}


function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}



//Enlève le produit du panier (bêta)
function removeFromBasket(dataId, panier) {
    let id = dataId.substr(0, 23)
    let color = dataId.substr(24)

    for (let i = 0; i < panier.length; i++) {
        if (dataId === i.id && dataId === i.color) {
            panier.splice[i, 1];
            purchase(panier)
            break;
        }
    }

}