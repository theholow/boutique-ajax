let panier = localStorage.getItem("panier")
let panierParsed = JSON.parse(panier)

for (const produit of panierParsed) {
    getDataForBasketDisplay(produit.id, produit.quantite, produit.color)
}


function getDataForBasketDisplay(idProduct, quantiteBear, couleur) {
    axios.get('http://localhost:3000/api/teddies/' + idProduct)
        .then(response => {
            let idBear = response.data._id
            let nameBear = response.data.name
            let imgBear = response.data.imageUrl
            let priceBear = response.data.price
            let descritptionBear = response.data.description
            let colors = response.data.color

            document.querySelector('.article-container').innerHTML += displayCommande(imgBear,nameBear,quantiteBear,priceBear)
        })
}



/*
function returnDataCommande(panier) {

    for (const produit of JSON.parse(panier)) {
        let commandeID = produit.id
        let commandeColors = produit.color
        let quantiteBear = produit.quantite

        return [commandeID, commandeColors, quantiteBear]
    }

}*/


function displayCommande(img, name, quantite, price) {
    return '<div class="article container-fluid">' +
        '<img class="product-image" src="' + img + '">' +
        '<h3 class="product-name">"' + name + '"</h3>' +
        '<h4 class="product-price">"' + quantite + '"</h4>' +
        '<h5 class="product-quantity">"' + price + '"</h5>'+
        '</div>'
}