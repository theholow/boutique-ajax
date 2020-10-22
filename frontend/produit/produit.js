let panier = dataPanier()
//localStorage.clear()
let urlcourante = document.location.href;
let url = new URL(urlcourante);
let search_params = new URLSearchParams(url.search);
let ids = search_params.get('id');

const oneData = () => {
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

            /*reste dans le onedate*/
            function onClick() {
                let commande = new Object
                commande.id = idBear
                commande.color = optionColor.options[optionColor.selectedIndex].value;
                commande.quantite = parseInt(quantity.options[quantity.selectedIndex].value)
               
              checkPanier(commande, panier)
                 purchase(commande)

            }


            /*Reste dans OneData*/
            let button = document.querySelector('.btn')
            button.addEventListener('click', onClick)
            let optionColor = document.getElementById('option')
            let quantity = document.getElementById('quantité')

        })
}
oneData();
function createOptions(array) {
    for (const colors of array) {
        document.querySelector('#option').innerHTML += '<option value="' + colors + '">' + colors + "</option>"

    }

}


function dataPanier () {
    if(localStorage.getItem("panier") === null){
return []
    }
    return JSON.parse(localStorage.getItem("panier"))
}


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
    console.log(panier)
}



function purchase(objet) {
    localStorage.setItem("panier", JSON.stringify(objet))
}







