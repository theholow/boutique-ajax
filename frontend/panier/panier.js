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
            let nameBear = response.data.name
            let imgBear = response.data.imageUrl
            let priceBear = Number(response.data.price)
            
 

            document.querySelector('.article-container').innerHTML += displayCommande(idProduct, imgBear, nameBear, couleur, quantiteBear,priceBear)
            let deleteButton = document.querySelectorAll('.btn')
            for (const btn of deleteButton) {
                btn.addEventListener('click', function () {
                    console.log('coucou')
                    removeFromBasket(this.dataset.id, panierParsed)
                })
            }


        })
}

/*Affichage de chaque produit*/
function displayCommande(id, img, name, color, quantite, price) {
    return '<div class="article container-fluid">' +
        '<img class="product-image" src="' + img + '">' +
        '<h3 class="product-name">"' + name + '"</h3>' +
        '<h5 class="product-color">"' + color + '"</h5>' +
        '<h4 class="product-price">"' + quantite + '"</h4>' +
        `<h5 class="product-quantity">"${price}"</h5>` +
        `<button class="btn btn-danger" data-id="${id + color}">Supprimer</button>` +
        '</div>'

}


//Enlève le produit du panier (bêta)
function removeFromBasket(dataId, panier) {
    console.log(panier)
    let id = dataId.substr(0, 24)
    let color = dataId.substr(24)

    for (let i = 0; i < panier.length; i++) {
        //console.log(id,panier[i].id,color,panier[i].color)
        if (id === panier[i].id && color === panier[i].color) {
            panier.splice(i, 1)
            purchase(panier)

        }
        if (panier[0] == null) {
            localStorage.clear()
        }
    }

    console.log(panier)

}

function purchase(objet) {
    localStorage.setItem("panier", JSON.stringify(objet))
}