/*Recuperation des données du localStorage*/
let panier = localStorage.getItem("panier")
let panierParsed = JSON.parse(panier)

/*Affichage des produits dans le panier*/
for (const produit of panierParsed) {
    getCheckCommande(produit.id, produit.quantite, produit.color)

}

function getCheckCommande(id, colors, quantite) {
    axios.get('http://localhost:3000/api/teddies/' +id)
        .then(response => {
            let nameBear = response.data.name
            let priceBear = response.data.price
            priceBear.toFixed(2);
console.log(priceBear)
        
                document.querySelector('.table').innerHTML += displayCommande(nameBear, colors, quantite, priceBear)
          
        })
}


function displayCommande(name, color, quantite, price) {
    return '<th scope="row">1</th>' +
        '<td>"' + name + '"</td>' +
        '<td>"' + color + '"</td>' +
        '<td>"' + quantite + '"</td>' +
        '<td>"' + price + '"</td>' +
        '</tr>'     
}


getCheckCommande()