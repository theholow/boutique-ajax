/*Implentation des couleurs de la base de donné dans le Select de la Page*/
export function createOptions(array) {
    for (const colors of array) {
        document.querySelector('#option').innerHTML += '<option value="' + colors + '">' + colors + "</option>"
    }
}


/*Création local Storage*/
export function dataPanier () {
    let save = JSON.parse(localStorage.getItem("panier"))
    if(localStorage.getItem("panier") === null){
        return []
    }
    for(const session of save){
        return save
    }
}