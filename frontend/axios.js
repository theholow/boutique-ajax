const getData = () => {
    axios('http://localhost:3000/api/teddies')
        .then(response => {
            createDisplay(response.data)
        })
}
<<<<<<< HEAD


getData();

=======
getData();


>>>>>>> features/home
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

<<<<<<< HEAD
=======

>>>>>>> features/home
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
            console.log(response.data)
            let idBear = response.data._id
            let nameBear = response.data.name
            let imgBear = response.data.imageUrl
            let priceBear = response.data.price
            let descritptionBear = response.data.description
            let colors = response.data.colors
            console.log(idBear, nameBear, imgBear, priceBear, descritptionBear)
            document.querySelector('#title').innerHTML = nameBear
            document.querySelector('.img-fluid').src = imgBear
            document.querySelector('#price').innerHTML = priceBear
            document.querySelector('#description').innerHTML = descritptionBear
        })
}

oneData();














