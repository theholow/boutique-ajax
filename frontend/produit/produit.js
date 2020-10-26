/*------PRODUIT------*/

let panier = dataPanier()

//localStorage.clear()

/*Recuperation de l'id dans l'URL*/
let urlcourante = document.location.href;
let url = new URL(urlcourante);
let search_params = new URLSearchParams(url.search);
let ids = search_params.get('id');

/*Affichage du produit dans la page produit*/
const oneData = () => {

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
            createOptions(colors)

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
oneData();

/*Implentation des couleurs de la base de donné dans le Select de la Page*/
function createOptions(array) {
    for (const colors of array) {
        document.querySelector('#option').innerHTML += '<option value="' + colors + '">' + colors + "</option>"
    }
}

/*Création local Storage*/
function dataPanier () {
    let save = JSON.parse(localStorage.getItem("panier"))
    if(localStorage.getItem("panier") === null){
return []
    }
    for(const session of save){
    return save
}
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
    if (found === false){
        panier.push(produit);    
    }

    purchase(panier)
    
}


/*Sauvegarde dans le localstorage*/
function purchase(objet) {
    localStorage.setItem("panier", JSON.stringify(objet))
}







