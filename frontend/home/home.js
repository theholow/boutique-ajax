




function getData(){
    axios('http://localhost:3000/api/teddies')
        .then(response => {
            createDisplay(response.data);
        })
}
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

/*home*/


getData();

