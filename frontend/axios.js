
const getData = () => {
    axios('http://localhost:3000/api/teddies')
        .then(response => {
            createDisplay(response.data)
        })
}
getData();


function createDisplay(array) {
    for (let product of array) {
        let id = product._id
        let name = product.name
        let img = product.imageUrl
        let price = product.price
        let descritption = product.description
        document.getElementById('card').innerHTML += createCard(id, name, descritption, price, img)

    }
}


function createCard(id, name, description, price, img) {
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

let urlcourante = document.location.href;
//console.log(urlcourante)

let url = new URL(urlcourante)
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


            function onClick() {
                let commande = new Object
                commande.id = idBear
                commande.color = optionColor.options[optionColor.selectedIndex].value;
                commande.quantite = quantity.options[quantity.selectedIndex].value
                purchase(commande)

            }
            let panier = []
            function purchase(objet) {
                panier.push(objet)
                localStorage.setItem("panier", JSON.stringify(panier))
                console.log(panier)
                localStorage.getItem(JSON.parse(objet))
                console.log(localStorage.getItem(objet.id))
if(objet.id == localStorage.getItem(JSON.parse(objet.id))) {

}
            }


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



















