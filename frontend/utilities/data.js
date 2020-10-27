import * as display from './display.js'

export const oneData = (ids, panier) => {

    /*Récupérer les information de l'API avec l'ID du produit*/
    axios.get('http://localhost:3000/api/teddies/' + ids)
        .then(response => {
            let idBear = response.data._id
            let nameBear = response.data.name
            let imgBear = response.data.imageUrl
            let priceBear = response.data.price
            let descritptionBear = response.data.description
            let colors = response.data.colors

            document.querySelector('#title').innerHTML = nameBear
            document.querySelector('.img-fluid').src = imgBear
            document.querySelector('#price').innerHTML = priceBear
            document.querySelector('#description').innerHTML = descritptionBear
            display.createOptions(colors)

            /*Crée objet */
            function onClick() {
                let commande = new Object
                commande.id = idBear
                commande.color = optionColor.options[optionColor.selectedIndex].value;
                commande.quantite = parseInt(quantity.options[quantity.selectedIndex].value)

                checkPanier(commande, panier)

            }

            /*Recupere la couleur*/
            let button = document.querySelector('.btn')
            button.addEventListener('click', onClick)
            let optionColor = document.getElementById('option')
            let quantity = document.getElementById('quantité')

        })
}

/*Apel API*/
export function getData() {
    axios('http://localhost:3000/api/teddies')
        .then(response => {
            display.createDisplay(response.data);
        })
}

/* Vérification de la commande*/
export function getCheckCommande(id, colors, quantite, tabHT, totoHT) {

    axios.get('http://localhost:3000/api/teddies/' + id)
        .then(response => {
            let nameBear = response.data.name
            let priceBear = response.data.price
            let truePrice = priceBear / 100
            let sousTotal = truePrice * quantite

            tabHT.push(sousTotal)

            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let HT = tabHT.reduce(reducer)

            totoHT.push(HT)
      
console.log(totoHT)

            document.querySelector('.HT').innerHTML += totoHT.pop()
            document.querySelector('.table').innerHTML += display.displayCommande(nameBear, colors, quantite, truePrice, sousTotal)
        })

}

/* Recuperation des données de l'API*/
export function getDataForBasketDisplay(idProduct, quantiteBear, couleur, panierParsed) {
    axios.get('http://localhost:3000/api/teddies/' + idProduct)
        .then(response => {
            let nameBear = response.data.name
            let imgBear = response.data.imageUrl
            let priceBear = Number(response.data.price)


            document.querySelector('.article-container').innerHTML += display.displayCommandeInBasket(idProduct, imgBear, nameBear, couleur, quantiteBear, priceBear)
            let deleteButton = document.querySelectorAll('.btn')
            for (const btn of deleteButton) {
                btn.addEventListener('click', function () {
                    console.log('coucou')
                    removeFromBasket(this.dataset.id, panierParsed)
                })
            }
        })
}

/*Vérifie et sauvegarder dans le local storage*/
function checkPanier(produit, panier) {
    let found = false;
    for (const currentProduct of panier) {
        //Vérifier si l'id existe
        if (produit.id === currentProduct.id && produit.color === currentProduct.color) {
            currentProduct.quantite += produit.quantite
            found = true;
            break;
        }
    }
    if (found === false) {
        panier.push(produit);
    }

    purchase(panier)

}

/*Sauvegarde dans le localstorage*/
function purchase(objet) {
    localStorage.setItem("panier", JSON.stringify(objet))
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

