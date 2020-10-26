/*Recuperation des données du localStorage*/
let panier = localStorage.getItem("panier")
let panierParsed = JSON.parse(panier)

/*Affichage des produits dans le panier*/
for (const produit of panierParsed) {
    getCheckCommande(produit.id, produit.quantite, produit.color)

}

function getCheckCommande(id, colors, quantite) {
    axios.get('http://localhost:3000/api/teddies/' + id)
        .then(response => {
            let nameBear = response.data.name
            let priceBear = response.data.price

let truePrice = priceBear/100
            console.log(truePrice)

            document.querySelector('.table').innerHTML += displayCommande(nameBear, colors, quantite, truePrice)

        })
}

function toTruePrice(price) {
    return Number.parseFloat(price).toFixed(2);
}

function displayCommande(name, color, quantite, price) {

    return '<tr class="product-display">'
        + '<th scope="row">1</th>' +
        '<td>"' + name + '"</td>' +
        '<td>"' + color + '"</td>' +
        '<td>"' + quantite + '"</td>' +
        '<td>"' + price + '"</td>' +
        '</tr>'
}


getCheckCommande()